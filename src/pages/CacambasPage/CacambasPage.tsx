import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Typography,
  Button,
  TextField,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
} from "@mui/material";
import {
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  DirectionsCar,
  LocationOn,
} from "@mui/icons-material";
import { DashboardTemplate } from "../../components";
import { FText, FButton } from "../../components/atoms";
import { quickColors, theme } from "../../ui";
import { Cacamba } from "../../types";
import { apiService } from "../../services/apiService";

interface CacambasPageProps {
  selectedMenuItem?: string;
  onMenuItemSelect?: (itemId: string, path: string) => void;
}

const CacambasPage: React.FC<CacambasPageProps> = ({
  selectedMenuItem = "cacambas",
  onMenuItemSelect,
}) => {
  const [cacambas, setCacambas] = useState<Cacamba[]>([]);
  const [loading, setLoading] = useState(true);
  const [filtroStatus, setFiltroStatus] = useState<string>("todos");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [cacambaEditando, setCacambaEditando] = useState<Cacamba | null>(null);

  useEffect(() => {
    carregarCacambas();
  }, []);

  const carregarCacambas = async () => {
    try {
      setLoading(true);
      const response = await apiService.cacambas.getAll();
      setCacambas(response);
    } catch (error) {
      console.error("Erro ao carregar caçambas:", error);
    } finally {
      setLoading(false);
    }
  };

  const cacambasFiltradas = cacambas.filter((cacamba) => {
    if (filtroStatus === "todos") return true;
    return cacamba.status === filtroStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "disponivel":
        return "success";
      case "locada":
        return "warning";
      case "manutencao":
        return "error";
      default:
        return "default";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "disponivel":
        return "Disponível";
      case "locada":
        return "Locada";
      case "manutencao":
        return "Manutenção";
      default:
        return status;
    }
  };

  const handleAdicionarCacamba = () => {
    setCacambaEditando(null);
    setDialogOpen(true);
  };

  const handleEditarCacamba = (cacamba: Cacamba) => {
    setCacambaEditando(cacamba);
    setDialogOpen(true);
  };

  const handleExcluirCacamba = async (id: string) => {
    if (confirm("Tem certeza que deseja excluir esta caçamba?")) {
      try {
        await apiService.delete(`/cacambas/${id}`);
        carregarCacambas();
      } catch (error) {
        console.error("Erro ao excluir caçamba:", error);
      }
    }
  };

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
              Gestão de Caçambas
            </FText>
            <FText size="base" color={quickColors.text.secondary}>
              Gerencie todas as caçambas da frota
            </FText>
          </Box>
          <FButton
            variant="primary"
            onClick={handleAdicionarCacamba}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <AddIcon sx={{ marginRight: 1 }} />
            Nova Caçamba
          </FButton>
        </Box>

        {/* Filtros */}
        <Box sx={{ marginBottom: theme.spacing.lg }}>
          <TextField
            select
            label="Filtrar por Status"
            value={filtroStatus}
            onChange={(e) => setFiltroStatus(e.target.value)}
            sx={{ minWidth: 200 }}
          >
            <MenuItem value="todos">Todos</MenuItem>
            <MenuItem value="disponivel">Disponível</MenuItem>
            <MenuItem value="locada">Locada</MenuItem>
            <MenuItem value="manutencao">Manutenção</MenuItem>
          </TextField>
        </Box>

        {/* Lista de Caçambas */}
        {loading ? (
          <Box sx={{ textAlign: "center", padding: theme.spacing.xl }}>
            <FText>Carregando caçambas...</FText>
          </Box>
        ) : (
          <Grid container spacing={3}>
            {cacambasFiltradas.map((cacamba) => (
              <Grid item xs={12} sm={6} md={4} key={cacamba.id}>
                <Card
                  sx={{
                    height: "100%",
                    borderRadius: theme.borderRadius.lg,
                    transition: "all 0.2s ease-in-out",
                    "&:hover": {
                      boxShadow: theme.shadows.md,
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  {cacamba.fotos && cacamba.fotos.length > 0 && (
                    <CardMedia
                      component="img"
                      height="200"
                      image={cacamba.fotos[0]}
                      alt={`Caçamba ${cacamba.numero}`}
                    />
                  )}

                  <CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        marginBottom: theme.spacing.md,
                      }}
                    >
                      <Box>
                        <FText size="lg" weight="bold">
                          {cacamba.numero}
                        </FText>
                        <FText size="sm" color={quickColors.text.secondary}>
                          Capacidade: {cacamba.capacidade}m³
                        </FText>
                      </Box>
                      <Chip
                        label={getStatusLabel(cacamba.status)}
                        color={getStatusColor(cacamba.status) as any}
                        size="small"
                      />
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: theme.spacing.md,
                      }}
                    >
                      <LocationOn
                        sx={{
                          fontSize: "1rem",
                          color: quickColors.text.secondary,
                          marginRight: 1,
                        }}
                      />
                      <FText size="sm" color={quickColors.text.secondary}>
                        {cacamba.localizacao.endereco}
                      </FText>
                    </Box>

                    <Box sx={{ display: "flex", gap: 1 }}>
                      <IconButton
                        size="small"
                        onClick={() => handleEditarCacamba(cacamba)}
                        sx={{ color: quickColors.primary }}
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        size="small"
                        onClick={() => handleExcluirCacamba(cacamba.id)}
                        sx={{ color: quickColors.error }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}

        {cacambasFiltradas.length === 0 && !loading && (
          <Box
            sx={{
              textAlign: "center",
              padding: theme.spacing["3xl"],
              color: quickColors.text.secondary,
            }}
          >
            <DirectionsCar sx={{ fontSize: "4rem", marginBottom: 2 }} />
            <FText size="lg">Nenhuma caçamba encontrada</FText>
            <FText size="sm">
              {filtroStatus !== "todos"
                ? `Não há caçambas com status "${getStatusLabel(filtroStatus)}"`
                : "Adicione a primeira caçamba da frota"}
            </FText>
          </Box>
        )}
      </Box>

      {/* Dialog para Adicionar/Editar Caçamba */}
      <Dialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>
          {cacambaEditando ? "Editar Caçamba" : "Nova Caçamba"}
        </DialogTitle>
        <DialogContent>
          <FText size="sm" color={quickColors.text.secondary}>
            Funcionalidade de cadastro será implementada na próxima versão
          </FText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)}>Cancelar</Button>
          <Button variant="contained" onClick={() => setDialogOpen(false)}>
            {cacambaEditando ? "Salvar" : "Adicionar"}
          </Button>
        </DialogActions>
      </Dialog>
    </DashboardTemplate>
  );
};

export default CacambasPage;
