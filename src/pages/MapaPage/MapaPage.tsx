import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Card,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@mui/material";
import {
  Map,
  LocationOn,
  DirectionsCar,
  Assignment,
  Search,
  Navigation,
  Refresh,
  Visibility as ViewIcon,
} from "@mui/icons-material";
import { DashboardTemplate } from "../../components";
import { FText } from "../../components/atoms";
import { quickColors, theme } from "../../ui";
import { Locacao, Cacamba } from "../../types";
import { apiService } from "../../services/apiService";

interface MapaPageProps {
  selectedMenuItem?: string;
  onMenuItemSelect?: (itemId: string, path: string) => void;
}

const MapaPage: React.FC<MapaPageProps> = ({
  selectedMenuItem = "mapa",
  onMenuItemSelect,
}) => {
  const [locacoes, setLocacoes] = useState<Locacao[]>([]);
  const [cacambas, setCacambas] = useState<Cacamba[]>([]);
  const [loading, setLoading] = useState(true);
  const [filtroStatus, setFiltroStatus] = useState("");
  const [busca, setBusca] = useState("");
  const [modoVisualizacao, setModoVisualizacao] = useState<
    "locacoes" | "cacambas"
  >("locacoes");

  useEffect(() => {
    carregarDados();
  }, []);

  const carregarDados = async () => {
    try {
      setLoading(true);
      const [locacoesData, cacambasData] = await Promise.all([
        apiService.locacoes.getAll(),
        apiService.cacambas.getAll(),
      ]);
      setLocacoes(locacoesData);
      setCacambas(cacambasData);
    } catch (error) {
      console.error("Erro ao carregar dados:", error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "ativa":
        return quickColors.success;
      case "disponivel":
        return quickColors.success;
      case "locada":
        return quickColors.warning;
      case "manutencao":
        return quickColors.error;
      case "finalizada":
        return quickColors.primary;
      case "cancelada":
        return quickColors.error;
      default:
        return quickColors.text.secondary;
    }
  };

  const locacoesFiltradas = locacoes.filter((locacao) => {
    const matchBusca = locacao.cliente.nome
      .toLowerCase()
      .includes(busca.toLowerCase());
    const matchStatus = !filtroStatus || locacao.status === filtroStatus;
    return matchBusca && matchStatus;
  });

  const cacambasFiltradas = cacambas.filter((cacamba) => {
    const matchBusca = cacamba.id.toLowerCase().includes(busca.toLowerCase());
    const matchStatus = !filtroStatus || cacamba.status === filtroStatus;
    return matchBusca && matchStatus;
  });

  // Estatísticas
  const locacoesAtivas = locacoes.filter((l) => l.status === "ativa").length;
  const cacambasDisponiveis = cacambas.filter(
    (c) => c.status === "disponivel"
  ).length;
  const cacambasEmUso = cacambas.filter((c) => c.status === "locada").length;

  return (
    <DashboardTemplate
      selectedMenuItem={selectedMenuItem}
      onMenuItemSelect={onMenuItemSelect}
    >
      <Box sx={{ padding: theme.spacing.xl }}>
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: theme.spacing.xl,
          }}
        >
          <Box>
            <FText size="2xl" weight="bold" color={quickColors.text.primary}>
              Mapa de Localizações
            </FText>
            <FText size="base" color={quickColors.text.secondary}>
              Visualize a localização das caçambas e locações ativas
            </FText>
          </Box>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              variant={
                modoVisualizacao === "locacoes" ? "contained" : "outlined"
              }
              onClick={() => setModoVisualizacao("locacoes")}
              startIcon={<Assignment />}
            >
              Locações
            </Button>
            <Button
              variant={
                modoVisualizacao === "cacambas" ? "contained" : "outlined"
              }
              onClick={() => setModoVisualizacao("cacambas")}
              startIcon={<DirectionsCar />}
            >
              Caçambas
            </Button>
            <IconButton
              onClick={carregarDados}
              sx={{ color: quickColors.primary }}
            >
              <Refresh />
            </IconButton>
          </Box>
        </Box>

        {/* Cards de Estatísticas */}
        <Grid container spacing={3} sx={{ marginBottom: theme.spacing.xl }}>
          <Grid item xs={12} sm={4}>
            <Card sx={{ padding: theme.spacing.lg, textAlign: "center" }}>
              <Assignment
                sx={{
                  fontSize: "2rem",
                  color: quickColors.primary,
                  marginBottom: 1,
                }}
              />
              <FText size="2xl" weight="bold" color={quickColors.primary}>
                {locacoesAtivas}
              </FText>
              <FText size="sm" color={quickColors.text.secondary}>
                Locações Ativas
              </FText>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card sx={{ padding: theme.spacing.lg, textAlign: "center" }}>
              <DirectionsCar
                sx={{
                  fontSize: "2rem",
                  color: quickColors.success,
                  marginBottom: 1,
                }}
              />
              <FText size="2xl" weight="bold" color={quickColors.success}>
                {cacambasDisponiveis}
              </FText>
              <FText size="sm" color={quickColors.text.secondary}>
                Caçambas Disponíveis
              </FText>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card sx={{ padding: theme.spacing.lg, textAlign: "center" }}>
              <LocationOn
                sx={{
                  fontSize: "2rem",
                  color: quickColors.warning,
                  marginBottom: 1,
                }}
              />
              <FText size="2xl" weight="bold" color={quickColors.warning}>
                {cacambasEmUso}
              </FText>
              <FText size="sm" color={quickColors.text.secondary}>
                Caçambas em Uso
              </FText>
            </Card>
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          {/* Área do Mapa */}
          <Grid item xs={12} lg={8}>
            <Card sx={{ padding: theme.spacing.lg, height: 600 }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                  backgroundColor: quickColors.background.secondary,
                  borderRadius: theme.borderRadius.lg,
                  border: `2px dashed ${quickColors.border}`,
                }}
              >
                <Map
                  sx={{
                    fontSize: "4rem",
                    color: quickColors.text.secondary,
                    marginBottom: 2,
                  }}
                />
                <FText
                  size="lg"
                  weight="bold"
                  color={quickColors.text.secondary}
                >
                  Mapa Interativo
                </FText>
                <FText
                  size="base"
                  color={quickColors.text.secondary}
                  align="center"
                >
                  Integração com Google Maps será implementada aqui
                </FText>
                <FText
                  size="sm"
                  color={quickColors.text.secondary}
                  align="center"
                >
                  Mostrará localizações em tempo real das caçambas e locações
                </FText>
                <Box sx={{ marginTop: 3, display: "flex", gap: 2 }}>
                  <Chip
                    icon={<LocationOn />}
                    label="Locações Ativas"
                    sx={{
                      backgroundColor: `${quickColors.success}20`,
                      color: quickColors.success,
                    }}
                  />
                  <Chip
                    icon={<DirectionsCar />}
                    label="Caçambas Disponíveis"
                    sx={{
                      backgroundColor: `${quickColors.primary}20`,
                      color: quickColors.primary,
                    }}
                  />
                  <Chip
                    icon={<LocationOn />}
                    label="Em Manutenção"
                    sx={{
                      backgroundColor: `${quickColors.error}20`,
                      color: quickColors.error,
                    }}
                  />
                </Box>
              </Box>
            </Card>
          </Grid>

          {/* Lista de Itens */}
          <Grid item xs={12} lg={4}>
            <Card sx={{ padding: theme.spacing.lg, height: 600 }}>
              {/* Filtros */}
              <Box sx={{ marginBottom: theme.spacing.lg }}>
                <TextField
                  fullWidth
                  size="small"
                  label={`Buscar ${modoVisualizacao}`}
                  value={busca}
                  onChange={(e) => setBusca(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <Search
                        sx={{
                          marginRight: 1,
                          color: quickColors.text.secondary,
                        }}
                      />
                    ),
                  }}
                  sx={{ marginBottom: 2 }}
                />
                <FormControl fullWidth size="small">
                  <InputLabel>Status</InputLabel>
                  <Select
                    value={filtroStatus}
                    label="Status"
                    onChange={(e) => setFiltroStatus(e.target.value)}
                  >
                    <MenuItem value="">Todos</MenuItem>
                    {modoVisualizacao === "locacoes" ? (
                      <>
                        <MenuItem value="ativa">Ativa</MenuItem>
                        <MenuItem value="finalizada">Finalizada</MenuItem>
                        <MenuItem value="cancelada">Cancelada</MenuItem>
                      </>
                    ) : (
                      <>
                        <MenuItem value="disponivel">Disponível</MenuItem>
                        <MenuItem value="locada">Em Uso</MenuItem>
                        <MenuItem value="manutencao">Manutenção</MenuItem>
                      </>
                    )}
                  </Select>
                </FormControl>
              </Box>

              {/* Lista */}
              <Box sx={{ height: 450, overflowY: "auto" }}>
                {loading ? (
                  <Box sx={{ textAlign: "center", padding: theme.spacing.lg }}>
                    <FText>Carregando...</FText>
                  </Box>
                ) : (
                  <List>
                    {modoVisualizacao === "locacoes"
                      ? locacoesFiltradas.map((locacao) => (
                          <ListItem key={locacao.id} divider>
                            <ListItemAvatar>
                              <Avatar
                                sx={{ backgroundColor: quickColors.primary }}
                              >
                                <LocationOn />
                              </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                              primary={
                                <Box>
                                  <FText weight="bold">
                                    {locacao.cliente.nome}
                                  </FText>
                                  <Chip
                                    size="small"
                                    label={locacao.status}
                                    sx={{
                                      backgroundColor: `${getStatusColor(
                                        locacao.status
                                      )}20`,
                                      color: getStatusColor(locacao.status),
                                      marginLeft: 1,
                                    }}
                                  />
                                </Box>
                              }
                              secondary={
                                <Box>
                                  {/* <FText size="sm">{formatarEndereco(locacao.enderecoEntrega)}</FText> */}
                                  <FText
                                    size="sm"
                                    color={quickColors.text.secondary}
                                  >
                                    Endereço da locação - Implementar após
                                    ajuste dos tipos
                                  </FText>
                                </Box>
                              }
                            />
                            <ListItemSecondaryAction>
                              <IconButton
                                size="small"
                                sx={{ color: quickColors.primary }}
                              >
                                <Navigation />
                              </IconButton>
                            </ListItemSecondaryAction>
                          </ListItem>
                        ))
                      : cacambasFiltradas.map((cacamba) => (
                          <ListItem key={cacamba.id} divider>
                            <ListItemAvatar>
                              <Avatar
                                sx={{
                                  backgroundColor: getStatusColor(
                                    cacamba.status
                                  ),
                                }}
                              >
                                <DirectionsCar />
                              </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                              primary={
                                <Box>
                                  <FText weight="bold">{cacamba.id}</FText>
                                  <Chip
                                    size="small"
                                    label={cacamba.status}
                                    sx={{
                                      backgroundColor: `${getStatusColor(
                                        cacamba.status
                                      )}20`,
                                      color: getStatusColor(cacamba.status),
                                      marginLeft: 1,
                                    }}
                                  />
                                </Box>
                              }
                              secondary={
                                <Box>
                                  {/* <FText size="sm">{cacamba.tamanho}</FText> */}
                                  <FText
                                    size="sm"
                                    color={quickColors.text.secondary}
                                  >
                                    Localização atual - Implementar coordenadas
                                  </FText>
                                </Box>
                              }
                            />
                            <ListItemSecondaryAction>
                              <IconButton
                                size="small"
                                sx={{ color: quickColors.primary }}
                              >
                                <ViewIcon />
                              </IconButton>
                            </ListItemSecondaryAction>
                          </ListItem>
                        ))}
                  </List>
                )}

                {((modoVisualizacao === "locacoes" &&
                  locacoesFiltradas.length === 0) ||
                  (modoVisualizacao === "cacambas" &&
                    cacambasFiltradas.length === 0)) &&
                  !loading && (
                    <Box
                      sx={{
                        textAlign: "center",
                        padding: theme.spacing.lg,
                        color: quickColors.text.secondary,
                      }}
                    >
                      <Map sx={{ fontSize: "3rem", marginBottom: 1 }} />
                      <FText>Nenhum item encontrado</FText>
                      <FText size="sm">
                        {busca || filtroStatus
                          ? "Nenhum item encontrado com os filtros aplicados"
                          : `Nenhuma ${modoVisualizacao.slice(
                              0,
                              -1
                            )} registrada`}
                      </FText>
                    </Box>
                  )}
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </DashboardTemplate>
  );
};

export default MapaPage;
