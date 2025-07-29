import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Card,
  Chip,
  Button,
  TextField,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import {
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Visibility as ViewIcon,
  Assessment,
  Event,
  AttachMoney,
} from "@mui/icons-material";
import { DashboardTemplate } from "../../components";
import { FText, FButton } from "../../components/atoms";
import { quickColors, theme } from "../../ui";
import { Locacao, Cliente, Cacamba } from "../../types";
import { apiService } from "../../services/apiService";

interface LocacoesPageProps {
  selectedMenuItem?: string;
  onMenuItemSelect?: (itemId: string, path: string) => void;
}

const LocacoesPage: React.FC<LocacoesPageProps> = ({
  selectedMenuItem = "locacoes",
  onMenuItemSelect,
}) => {
  const [locacoes, setLocacoes] = useState<Locacao[]>([]);
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [cacambas, setCacambas] = useState<Cacamba[]>([]);
  const [loading, setLoading] = useState(true);
  const [filtroStatus, setFiltroStatus] = useState<string>("todos");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [locacaoSelecionada, setLocacaoSelecionada] = useState<Locacao | null>(
    null
  );

  useEffect(() => {
    carregarDados();
  }, []);

  const carregarDados = async () => {
    try {
      setLoading(true);
      const [locacoesResponse, clientesResponse, cacambasResponse] =
        await Promise.all([
          apiService.locacoes.getAll(),
          apiService.clientes.getAll(),
          apiService.cacambas.getAll(),
        ]);
      setLocacoes(locacoesResponse);
      setClientes(clientesResponse);
      setCacambas(cacambasResponse);
    } catch (error) {
      console.error("Erro ao carregar dados:", error);
    } finally {
      setLoading(false);
    }
  };

  const locacoesFiltradas = locacoes.filter((locacao) => {
    if (filtroStatus === "todos") return true;
    return locacao.status === filtroStatus;
  });

  const getClienteNome = (clienteId: string) => {
    const cliente = clientes.find((c) => c.id === clienteId);
    return cliente?.nome || "Cliente não encontrado";
  };

  const getCacambaNumero = (cacambaId: string) => {
    const cacamba = cacambas.find((c) => c.id === cacambaId);
    return cacamba?.numero || "Caçamba não encontrada";
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "ativa":
        return "success";
      case "finalizada":
        return "default";
      case "cancelada":
        return "error";
      default:
        return "default";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "ativa":
        return "Ativa";
      case "finalizada":
        return "Finalizada";
      case "cancelada":
        return "Cancelada";
      default:
        return status;
    }
  };

  const formatarData = (data: string) => {
    return new Date(data).toLocaleDateString("pt-BR");
  };

  const formatarMoeda = (valor: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(valor);
  };

  const handleVerDetalhes = (locacao: Locacao) => {
    setLocacaoSelecionada(locacao);
    setDialogOpen(true);
  };

  const handleExcluirLocacao = async (id: string) => {
    if (confirm("Tem certeza que deseja excluir esta locação?")) {
      try {
        await apiService.locacoes.delete(id);
        carregarDados();
      } catch (error) {
        console.error("Erro ao excluir locação:", error);
      }
    }
  };

  // Estatísticas rápidas
  const totalLocacoes = locacoes.length;
  const locacoesAtivas = locacoes.filter((l) => l.status === "ativa").length;
  const receitaTotal = locacoes.reduce(
    (total, locacao) => total + locacao.valor,
    0
  );

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
              Gestão de Locações
            </FText>
            <FText size="base" color={quickColors.text.secondary}>
              Controle todas as locações de caçambas
            </FText>
          </Box>
          <FButton
            variant="primary"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <AddIcon sx={{ marginRight: 1 }} />
            Nova Locação
          </FButton>
        </Box>

        {/* Cards de Estatísticas */}
        <Grid container spacing={3} sx={{ marginBottom: theme.spacing.xl }}>
          <Grid item xs={12} sm={4}>
            <Card sx={{ padding: theme.spacing.lg, textAlign: "center" }}>
              <Assessment
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
          <Grid item xs={12} sm={4}>
            <Card sx={{ padding: theme.spacing.lg, textAlign: "center" }}>
              <Event
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
                Locações Ativas
              </FText>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
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
        <Box sx={{ marginBottom: theme.spacing.lg }}>
          <TextField
            select
            label="Filtrar por Status"
            value={filtroStatus}
            onChange={(e) => setFiltroStatus(e.target.value)}
            sx={{ minWidth: 200 }}
          >
            <MenuItem value="todos">Todos</MenuItem>
            <MenuItem value="ativa">Ativa</MenuItem>
            <MenuItem value="finalizada">Finalizada</MenuItem>
            <MenuItem value="cancelada">Cancelada</MenuItem>
          </TextField>
        </Box>

        {/* Tabela de Locações */}
        {loading ? (
          <Box sx={{ textAlign: "center", padding: theme.spacing.xl }}>
            <FText>Carregando locações...</FText>
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
                    <FText weight="bold">Data Início</FText>
                  </TableCell>
                  <TableCell>
                    <FText weight="bold">Data Fim</FText>
                  </TableCell>
                  <TableCell>
                    <FText weight="bold">Valor</FText>
                  </TableCell>
                  <TableCell>
                    <FText weight="bold">Status</FText>
                  </TableCell>
                  <TableCell>
                    <FText weight="bold">Ações</FText>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {locacoesFiltradas.map((locacao) => (
                  <TableRow key={locacao.id} hover>
                    <TableCell>
                      <FText>{getClienteNome(locacao.clienteId)}</FText>
                    </TableCell>
                    <TableCell>
                      <FText>{getCacambaNumero(locacao.cacambaId)}</FText>
                    </TableCell>
                    <TableCell>
                      <FText>{formatarData(locacao.dataInicio)}</FText>
                    </TableCell>
                    <TableCell>
                      <FText>
                        {locacao.dataFim
                          ? formatarData(locacao.dataFim)
                          : "Em andamento"}
                      </FText>
                    </TableCell>
                    <TableCell>
                      <FText weight="bold" color={quickColors.success}>
                        {formatarMoeda(locacao.valor)}
                      </FText>
                    </TableCell>
                    <TableCell>
                      <Chip
                        label={getStatusLabel(locacao.status)}
                        sx={{
                          backgroundColor: `${getStatusColor(
                            locacao.status
                          )}20`,
                          color: getStatusColor(locacao.status),
                          fontWeight: "bold",
                        }}
                        size="small"
                      />
                    </TableCell>
                    <TableCell>
                      <Box sx={{ display: "flex", gap: 1 }}>
                        <IconButton
                          size="small"
                          onClick={() => handleVerDetalhes(locacao)}
                          sx={{ color: quickColors.primary }}
                        >
                          <ViewIcon />
                        </IconButton>
                        <IconButton
                          size="small"
                          sx={{ color: quickColors.primary }}
                        >
                          <EditIcon />
                        </IconButton>
                        <IconButton
                          size="small"
                          onClick={() => handleExcluirLocacao(locacao.id)}
                          sx={{ color: quickColors.error }}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}

        {locacoesFiltradas.length === 0 && !loading && (
          <Box
            sx={{
              textAlign: "center",
              padding: theme.spacing["3xl"],
              color: quickColors.text.secondary,
            }}
          >
            <Assessment sx={{ fontSize: "4rem", marginBottom: 2 }} />
            <FText size="lg">Nenhuma locação encontrada</FText>
            <FText size="sm">
              {filtroStatus !== "todos"
                ? `Não há locações com status "${getStatusLabel(filtroStatus)}"`
                : "Crie a primeira locação"}
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
              <Grid item xs={12} sm={6}>
                <FText size="sm" weight="bold">
                  Cliente:
                </FText>
                <FText>{getClienteNome(locacaoSelecionada.clienteId)}</FText>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FText size="sm" weight="bold">
                  Caçamba:
                </FText>
                <FText>{getCacambaNumero(locacaoSelecionada.cacambaId)}</FText>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FText size="sm" weight="bold">
                  Data Início:
                </FText>
                <FText>{formatarData(locacaoSelecionada.dataInicio)}</FText>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FText size="sm" weight="bold">
                  Data Fim:
                </FText>
                <FText>
                  {locacaoSelecionada.dataFim
                    ? formatarData(locacaoSelecionada.dataFim)
                    : "Em andamento"}
                </FText>
              </Grid>
              <Grid item xs={12}>
                <FText size="sm" weight="bold">
                  Endereço:
                </FText>
                <FText>
                  {locacaoSelecionada.endereco.rua},{" "}
                  {locacaoSelecionada.endereco.numero} -{" "}
                  {locacaoSelecionada.endereco.bairro}
                  <br />
                  {locacaoSelecionada.endereco.cidade} - CEP:{" "}
                  {locacaoSelecionada.endereco.cep}
                </FText>
              </Grid>
              <Grid item xs={12}>
                <FText size="sm" weight="bold">
                  Observações:
                </FText>
                <FText>{locacaoSelecionada.observacoes}</FText>
              </Grid>
              <Grid item xs={12}>
                <FText size="sm" weight="bold">
                  Valor:
                </FText>
                <FText size="lg" weight="bold" color={quickColors.success}>
                  {formatarMoeda(locacaoSelecionada.valor)}
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

export default LocacoesPage;
