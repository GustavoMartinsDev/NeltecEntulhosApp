import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Card,
  Button,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Avatar,
} from "@mui/material";
import {
  History,
  Assignment,
  AttachMoney,
  CalendarToday,
  Visibility as ViewIcon,
  Check,
  Schedule,
  Cancel,
} from "@mui/icons-material";
import { DashboardTemplate } from "../../components";
import { FText } from "../../components/atoms";
import { quickColors, theme } from "../../ui";
import { Locacao } from "../../types";
import { apiService } from "../../services/apiService";

interface HistoricoPageProps {
  selectedMenuItem?: string;
  onMenuItemSelect?: (itemId: string, path: string) => void;
}

const HistoricoPage: React.FC<HistoricoPageProps> = ({
  selectedMenuItem = "historico",
  onMenuItemSelect,
}) => {
  const [historico, setHistorico] = useState<Locacao[]>([]);
  const [loading, setLoading] = useState(true);
  const [busca, setBusca] = useState("");
  const [filtroStatus, setFiltroStatus] = useState("");
  const [filtroMes, setFiltroMes] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [locacaoSelecionada, setLocacaoSelecionada] = useState<Locacao | null>(
    null
  );

  useEffect(() => {
    carregarHistorico();
  }, []);

  const carregarHistorico = async () => {
    try {
      setLoading(true);
      const response = await apiService.locacoes.getAll();
      // Ordenar por data mais recente
      const historicoOrdenado = response.sort(
        (a, b) =>
          new Date(b.dataInicio).getTime() - new Date(a.dataInicio).getTime()
      );
      setHistorico(historicoOrdenado);
    } catch (error) {
      console.error("Erro ao carregar histórico:", error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "ativa":
        return quickColors.success;
      case "finalizada":
        return quickColors.primary;
      case "cancelada":
        return quickColors.error;
      case "pendente":
        return quickColors.warning;
      default:
        return quickColors.text.secondary;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "ativa":
        return <Schedule />;
      case "finalizada":
        return <Check />;
      case "cancelada":
        return <Cancel />;
      case "pendente":
        return <Schedule />;
      default:
        return <History />;
    }
  };

  const formatarMoeda = (valor: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(valor);
  };

  const formatarData = (data: string) => {
    return new Date(data).toLocaleDateString("pt-BR");
  };

  const calcularDiasLocacao = (dataInicio: string, dataFim?: string) => {
    const inicio = new Date(dataInicio);
    const fim = dataFim ? new Date(dataFim) : new Date();
    const diffTime = Math.abs(fim.getTime() - inicio.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const getUltimosMeses = () => {
    const meses = [];
    const hoje = new Date();
    for (let i = 0; i < 12; i++) {
      const mes = new Date(hoje.getFullYear(), hoje.getMonth() - i, 1);
      meses.push({
        value: `${mes.getFullYear()}-${(mes.getMonth() + 1)
          .toString()
          .padStart(2, "0")}`,
        label: mes.toLocaleDateString("pt-BR", {
          month: "long",
          year: "numeric",
        }),
      });
    }
    return meses;
  };

  const historicoFiltrado = historico.filter((item) => {
    const matchBusca =
      item.cliente.nome.toLowerCase().includes(busca.toLowerCase()) ||
      item.cacamba.codigo.toLowerCase().includes(busca.toLowerCase());

    const matchStatus = !filtroStatus || item.status === filtroStatus;

    const matchMes =
      !filtroMes ||
      new Date(item.dataInicio).toISOString().slice(0, 7) === filtroMes;

    return matchBusca && matchStatus && matchMes;
  });

  const handleVerDetalhes = (locacao: Locacao) => {
    setLocacaoSelecionada(locacao);
    setDialogOpen(true);
  };

  // Estatísticas
  const totalLocacoes = historico.length;
  const locacoesFinalizadas = historico.filter(
    (l) => l.status === "finalizada"
  ).length;
  const locacoesAtivas = historico.filter((l) => l.status === "ativa").length;
  const receitaTotal = historico
    .filter((l) => l.status === "finalizada")
    .reduce((acc, l) => acc + l.valorTotal, 0);

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
              Histórico de Locações
            </FText>
            <FText size="base" color={quickColors.text.secondary}>
              Acompanhe todo o histórico de locações da Neltec
            </FText>
          </Box>
        </Box>

        {/* Cards de Estatísticas */}
        <Grid container spacing={3} sx={{ marginBottom: theme.spacing.xl }}>
          <Grid item xs={12} sm={6} lg={3}>
            <Card sx={{ padding: theme.spacing.lg, textAlign: "center" }}>
              <Assignment
                sx={{
                  fontSize: "2rem",
                  color: quickColors.primary,
                  marginBottom: 1,
                }}
              />
              <FText size="2xl" weight="bold" color={quickColors.primary}>
                {totalLocacoes}
              </FText>
              <FText size="sm" color={quickColors.text.secondary}>
                Total de Locações
              </FText>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <Card sx={{ padding: theme.spacing.lg, textAlign: "center" }}>
              <Check
                sx={{
                  fontSize: "2rem",
                  color: quickColors.success,
                  marginBottom: 1,
                }}
              />
              <FText size="2xl" weight="bold" color={quickColors.success}>
                {locacoesFinalizadas}
              </FText>
              <FText size="sm" color={quickColors.text.secondary}>
                Finalizadas
              </FText>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <Card sx={{ padding: theme.spacing.lg, textAlign: "center" }}>
              <Schedule
                sx={{
                  fontSize: "2rem",
                  color: quickColors.warning,
                  marginBottom: 1,
                }}
              />
              <FText size="2xl" weight="bold" color={quickColors.warning}>
                {locacoesAtivas}
              </FText>
              <FText size="sm" color={quickColors.text.secondary}>
                Ativas
              </FText>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <Card sx={{ padding: theme.spacing.lg, textAlign: "center" }}>
              <AttachMoney
                sx={{
                  fontSize: "2rem",
                  color: quickColors.success,
                  marginBottom: 1,
                }}
              />
              <FText size="2xl" weight="bold" color={quickColors.success}>
                {formatarMoeda(receitaTotal)}
              </FText>
              <FText size="sm" color={quickColors.text.secondary}>
                Receita Total
              </FText>
            </Card>
          </Grid>
        </Grid>

        {/* Filtros */}
        <Grid container spacing={2} sx={{ marginBottom: theme.spacing.lg }}>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              fullWidth
              label="Buscar por cliente ou código"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FormControl fullWidth>
              <InputLabel>Status</InputLabel>
              <Select
                value={filtroStatus}
                label="Status"
                onChange={(e) => setFiltroStatus(e.target.value)}
              >
                <MenuItem value="">Todos</MenuItem>
                <MenuItem value="ativa">Ativa</MenuItem>
                <MenuItem value="finalizada">Finalizada</MenuItem>
                <MenuItem value="cancelada">Cancelada</MenuItem>
                <MenuItem value="pendente">Pendente</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FormControl fullWidth>
              <InputLabel>Mês</InputLabel>
              <Select
                value={filtroMes}
                label="Mês"
                onChange={(e) => setFiltroMes(e.target.value)}
              >
                <MenuItem value="">Todos</MenuItem>
                {getUltimosMeses().map((mes) => (
                  <MenuItem key={mes.value} value={mes.value}>
                    {mes.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        {/* Tabela de Histórico */}
        {loading ? (
          <Box sx={{ textAlign: "center", padding: theme.spacing.xl }}>
            <FText>Carregando histórico...</FText>
          </Box>
        ) : (
          <TableContainer
            component={Paper}
            sx={{ borderRadius: theme.borderRadius.lg }}
          >
            <Table>
              <TableHead>
                <TableRow
                  sx={{ backgroundColor: quickColors.background.secondary }}
                >
                  <TableCell>
                    <FText weight="bold">Cliente</FText>
                  </TableCell>
                  <TableCell>
                    <FText weight="bold">Caçamba</FText>
                  </TableCell>
                  <TableCell>
                    <FText weight="bold">Status</FText>
                  </TableCell>
                  <TableCell>
                    <FText weight="bold">Data Início</FText>
                  </TableCell>
                  <TableCell>
                    <FText weight="bold">Data Fim</FText>
                  </TableCell>
                  <TableCell>
                    <FText weight="bold">Dias</FText>
                  </TableCell>
                  <TableCell>
                    <FText weight="bold">Valor</FText>
                  </TableCell>
                  <TableCell>
                    <FText weight="bold">Ações</FText>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {historicoFiltrado.map((locacao) => (
                  <TableRow key={locacao.id} hover>
                    <TableCell>
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 2 }}
                      >
                        <Avatar sx={{ backgroundColor: quickColors.primary }}>
                          {locacao.cliente.nome.charAt(0)}
                        </Avatar>
                        <Box>
                          <FText weight="bold">{locacao.cliente.nome}</FText>
                          <FText size="sm" color={quickColors.text.secondary}>
                            {locacao.enderecoEntrega.cidade}
                          </FText>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <FText weight="bold">{locacao.cacamba.codigo}</FText>
                      <FText size="sm" color={quickColors.text.secondary}>
                        {locacao.cacamba.tamanho}
                      </FText>
                    </TableCell>
                    <TableCell>
                      <Chip
                        icon={getStatusIcon(locacao.status)}
                        label={
                          locacao.status.charAt(0).toUpperCase() +
                          locacao.status.slice(1)
                        }
                        sx={{
                          backgroundColor: `${getStatusColor(
                            locacao.status
                          )}20`,
                          color: getStatusColor(locacao.status),
                          fontWeight: "bold",
                        }}
                      />
                    </TableCell>
                    <TableCell>
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <CalendarToday
                          sx={{ fontSize: "1rem", color: quickColors.primary }}
                        />
                        <FText>{formatarData(locacao.dataInicio)}</FText>
                      </Box>
                    </TableCell>
                    <TableCell>
                      {locacao.dataFim ? (
                        <Box
                          sx={{ display: "flex", alignItems: "center", gap: 1 }}
                        >
                          <CalendarToday
                            sx={{
                              fontSize: "1rem",
                              color: quickColors.primary,
                            }}
                          />
                          <FText>{formatarData(locacao.dataFim)}</FText>
                        </Box>
                      ) : (
                        <FText color={quickColors.text.secondary}>
                          Em andamento
                        </FText>
                      )}
                    </TableCell>
                    <TableCell>
                      <FText weight="bold">
                        {calcularDiasLocacao(
                          locacao.dataInicio,
                          locacao.dataFim
                        )}{" "}
                        dias
                      </FText>
                    </TableCell>
                    <TableCell>
                      <FText weight="bold" color={quickColors.success}>
                        {formatarMoeda(locacao.valorTotal)}
                      </FText>
                    </TableCell>
                    <TableCell>
                      <Button
                        size="small"
                        startIcon={<ViewIcon />}
                        onClick={() => handleVerDetalhes(locacao)}
                        sx={{ color: quickColors.primary }}
                      >
                        Ver
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}

        {historicoFiltrado.length === 0 && !loading && (
          <Box
            sx={{
              textAlign: "center",
              padding: theme.spacing["3xl"],
              color: quickColors.text.secondary,
            }}
          >
            <History sx={{ fontSize: "4rem", marginBottom: 2 }} />
            <FText size="lg">Nenhuma locação encontrada</FText>
            <FText size="sm">
              {busca || filtroStatus || filtroMes
                ? "Nenhuma locação encontrada com os filtros aplicados"
                : "Nenhuma locação registrada"}
            </FText>
          </Box>
        )}
      </Box>

      {/* Dialog de Detalhes da Locação */}
      <Dialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>Detalhes da Locação</DialogTitle>
        <DialogContent>
          {locacaoSelecionada && (
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    marginBottom: 2,
                  }}
                >
                  <Avatar
                    sx={{
                      backgroundColor: quickColors.primary,
                      width: 56,
                      height: 56,
                    }}
                  >
                    {locacaoSelecionada.cliente.nome.charAt(0)}
                  </Avatar>
                  <Box>
                    <FText size="lg" weight="bold">
                      {locacaoSelecionada.cliente.nome}
                    </FText>
                    <Chip
                      icon={getStatusIcon(locacaoSelecionada.status)}
                      label={
                        locacaoSelecionada.status.charAt(0).toUpperCase() +
                        locacaoSelecionada.status.slice(1)
                      }
                      sx={{
                        backgroundColor: `${getStatusColor(
                          locacaoSelecionada.status
                        )}20`,
                        color: getStatusColor(locacaoSelecionada.status),
                        fontWeight: "bold",
                      }}
                    />
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FText size="sm" weight="bold">
                  Caçamba:
                </FText>
                <FText>
                  {locacaoSelecionada.cacamba.codigo} -{" "}
                  {locacaoSelecionada.cacamba.tamanho}
                </FText>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FText size="sm" weight="bold">
                  Valor Total:
                </FText>
                <FText weight="bold" color={quickColors.success}>
                  {formatarMoeda(locacaoSelecionada.valorTotal)}
                </FText>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FText size="sm" weight="bold">
                  Data de Início:
                </FText>
                <FText>{formatarData(locacaoSelecionada.dataInicio)}</FText>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FText size="sm" weight="bold">
                  Data de Fim:
                </FText>
                <FText>
                  {locacaoSelecionada.dataFim
                    ? formatarData(locacaoSelecionada.dataFim)
                    : "Em andamento"}
                </FText>
              </Grid>

              <Grid item xs={12}>
                <FText size="sm" weight="bold">
                  Endereço de Entrega:
                </FText>
                <FText>
                  {locacaoSelecionada.enderecoEntrega.rua},{" "}
                  {locacaoSelecionada.enderecoEntrega.numero}
                  {locacaoSelecionada.enderecoEntrega.complemento &&
                    ` - ${locacaoSelecionada.enderecoEntrega.complemento}`}
                  <br />
                  {locacaoSelecionada.enderecoEntrega.bairro} -{" "}
                  {locacaoSelecionada.enderecoEntrega.cidade}
                  <br />
                  CEP: {locacaoSelecionada.enderecoEntrega.cep}
                </FText>
              </Grid>

              <Grid item xs={12}>
                <FText size="sm" weight="bold">
                  Duração:
                </FText>
                <FText>
                  {calcularDiasLocacao(
                    locacaoSelecionada.dataInicio,
                    locacaoSelecionada.dataFim
                  )}{" "}
                  dias
                </FText>
              </Grid>
            </Grid>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)}>Fechar</Button>
        </DialogActions>
      </Dialog>
    </DashboardTemplate>
  );
};

export default HistoricoPage;
