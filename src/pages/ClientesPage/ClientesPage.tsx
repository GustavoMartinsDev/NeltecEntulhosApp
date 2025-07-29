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
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Avatar,
} from "@mui/material";
import {
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Visibility as ViewIcon,
  People,
  Business,
  Phone,
  Email,
} from "@mui/icons-material";
import { DashboardTemplate } from "../../components";
import { FText, FButton } from "../../components/atoms";
import { quickColors, theme } from "../../ui";
import { Cliente } from "../../types";
import { apiService } from "../../services/apiService";

interface ClientesPageProps {
  selectedMenuItem?: string;
  onMenuItemSelect?: (itemId: string, path: string) => void;
}

const ClientesPage: React.FC<ClientesPageProps> = ({
  selectedMenuItem = "clientes",
  onMenuItemSelect,
}) => {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [loading, setLoading] = useState(true);
  const [busca, setBusca] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [clienteSelecionado, setClienteSelecionado] = useState<Cliente | null>(
    null
  );

  useEffect(() => {
    carregarClientes();
  }, []);

  const carregarClientes = async () => {
    try {
      setLoading(true);
      const response = await apiService.clientes.getAll();
      setClientes(response);
    } catch (error) {
      console.error("Erro ao carregar clientes:", error);
    } finally {
      setLoading(false);
    }
  };

  const clientesFiltrados = clientes.filter(
    (cliente) =>
      cliente.nome.toLowerCase().includes(busca.toLowerCase()) ||
      cliente.email.toLowerCase().includes(busca.toLowerCase()) ||
      cliente.cpfCnpj.includes(busca)
  );

  const formatarCpfCnpj = (cpfCnpj: string) => {
    // Verifica se é CPF (11 dígitos) ou CNPJ (14 dígitos)
    const numeros = cpfCnpj.replace(/\D/g, "");
    if (numeros.length === 11) {
      return numeros.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    } else if (numeros.length === 14) {
      return numeros.replace(
        /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
        "$1.$2.$3/$4-$5"
      );
    }
    return cpfCnpj;
  };

  const formatarTelefone = (telefone: string) => {
    const numeros = telefone.replace(/\D/g, "");
    if (numeros.length === 11) {
      return numeros.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
    } else if (numeros.length === 10) {
      return numeros.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");
    }
    return telefone;
  };

  const getTipoCliente = (cpfCnpj: string) => {
    const numeros = cpfCnpj.replace(/\D/g, "");
    return numeros.length === 11 ? "Pessoa Física" : "Pessoa Jurídica";
  };

  const getAvatarIcon = (cpfCnpj: string) => {
    const numeros = cpfCnpj.replace(/\D/g, "");
    return numeros.length === 11 ? <People /> : <Business />;
  };

  const handleVerDetalhes = (cliente: Cliente) => {
    setClienteSelecionado(cliente);
    setDialogOpen(true);
  };

  const handleExcluirCliente = async (id: string) => {
    if (confirm("Tem certeza que deseja excluir este cliente?")) {
      try {
        await apiService.clientes.delete(id);
        carregarClientes();
      } catch (error) {
        console.error("Erro ao excluir cliente:", error);
      }
    }
  };

  // Estatísticas
  const totalClientes = clientes.length;
  const pessoasFisicas = clientes.filter(
    (c) => c.cpfCnpj.replace(/\D/g, "").length === 11
  ).length;
  const pessoasJuridicas = clientes.filter(
    (c) => c.cpfCnpj.replace(/\D/g, "").length === 14
  ).length;

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
              Gestão de Clientes
            </FText>
            <FText size="base" color={quickColors.text.secondary}>
              Gerencie todos os clientes da Neltec
            </FText>
          </Box>
          <FButton
            variant="primary"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <AddIcon sx={{ marginRight: 1 }} />
            Novo Cliente
          </FButton>
        </Box>

        {/* Cards de Estatísticas */}
        <Grid container spacing={3} sx={{ marginBottom: theme.spacing.xl }}>
          <Grid item xs={12} sm={4}>
            <Card sx={{ padding: theme.spacing.lg, textAlign: "center" }}>
              <People
                sx={{
                  fontSize: "2rem",
                  color: quickColors.primary,
                  marginBottom: 1,
                }}
              />
              <FText size="2xl" weight="bold" color={quickColors.primary}>
                {totalClientes}
              </FText>
              <FText size="sm" color={quickColors.text.secondary}>
                Total de Clientes
              </FText>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card sx={{ padding: theme.spacing.lg, textAlign: "center" }}>
              <People
                sx={{
                  fontSize: "2rem",
                  color: quickColors.warning,
                  marginBottom: 1,
                }}
              />
              <FText size="2xl" weight="bold" color={quickColors.warning}>
                {pessoasFisicas}
              </FText>
              <FText size="sm" color={quickColors.text.secondary}>
                Pessoas Físicas
              </FText>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card sx={{ padding: theme.spacing.lg, textAlign: "center" }}>
              <Business
                sx={{
                  fontSize: "2rem",
                  color: quickColors.success,
                  marginBottom: 1,
                }}
              />
              <FText size="2xl" weight="bold" color={quickColors.success}>
                {pessoasJuridicas}
              </FText>
              <FText size="sm" color={quickColors.text.secondary}>
                Pessoas Jurídicas
              </FText>
            </Card>
          </Grid>
        </Grid>

        {/* Busca */}
        <Box sx={{ marginBottom: theme.spacing.lg }}>
          <TextField
            fullWidth
            label="Buscar cliente por nome, email ou CPF/CNPJ"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            sx={{ maxWidth: 400 }}
          />
        </Box>

        {/* Tabela de Clientes */}
        {loading ? (
          <Box sx={{ textAlign: "center", padding: theme.spacing.xl }}>
            <FText>Carregando clientes...</FText>
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
                    <FText weight="bold">Tipo</FText>
                  </TableCell>
                  <TableCell>
                    <FText weight="bold">CPF/CNPJ</FText>
                  </TableCell>
                  <TableCell>
                    <FText weight="bold">Telefone</FText>
                  </TableCell>
                  <TableCell>
                    <FText weight="bold">Email</FText>
                  </TableCell>
                  <TableCell>
                    <FText weight="bold">Cidade</FText>
                  </TableCell>
                  <TableCell>
                    <FText weight="bold">Ações</FText>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {clientesFiltrados.map((cliente) => (
                  <TableRow key={cliente.id} hover>
                    <TableCell>
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 2 }}
                      >
                        <Avatar sx={{ backgroundColor: quickColors.primary }}>
                          {getAvatarIcon(cliente.cpfCnpj)}
                        </Avatar>
                        <Box>
                          <FText weight="bold">{cliente.nome}</FText>
                          <FText size="sm" color={quickColors.text.secondary}>
                            Cliente desde{" "}
                            {new Date(cliente.createdAt).toLocaleDateString(
                              "pt-BR"
                            )}
                          </FText>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <FText>{getTipoCliente(cliente.cpfCnpj)}</FText>
                    </TableCell>
                    <TableCell>
                      <FText>{formatarCpfCnpj(cliente.cpfCnpj)}</FText>
                    </TableCell>
                    <TableCell>
                      <FText>{formatarTelefone(cliente.telefone)}</FText>
                    </TableCell>
                    <TableCell>
                      <FText>{cliente.email}</FText>
                    </TableCell>
                    <TableCell>
                      <FText>{cliente.endereco.cidade}</FText>
                    </TableCell>
                    <TableCell>
                      <Box sx={{ display: "flex", gap: 1 }}>
                        <IconButton
                          size="small"
                          onClick={() => handleVerDetalhes(cliente)}
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
                          onClick={() => handleExcluirCliente(cliente.id)}
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

        {clientesFiltrados.length === 0 && !loading && (
          <Box
            sx={{
              textAlign: "center",
              padding: theme.spacing["3xl"],
              color: quickColors.text.secondary,
            }}
          >
            <People sx={{ fontSize: "4rem", marginBottom: 2 }} />
            <FText size="lg">Nenhum cliente encontrado</FText>
            <FText size="sm">
              {busca
                ? `Nenhum cliente encontrado para "${busca}"`
                : "Cadastre o primeiro cliente"}
            </FText>
          </Box>
        )}
      </Box>

      {/* Dialog de Detalhes do Cliente */}
      <Dialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>Detalhes do Cliente</DialogTitle>
        <DialogContent>
          {clienteSelecionado && (
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
                    {getAvatarIcon(clienteSelecionado.cpfCnpj)}
                  </Avatar>
                  <Box>
                    <FText size="lg" weight="bold">
                      {clienteSelecionado.nome}
                    </FText>
                    <FText color={quickColors.text.secondary}>
                      {getTipoCliente(clienteSelecionado.cpfCnpj)}
                    </FText>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FText size="sm" weight="bold">
                  CPF/CNPJ:
                </FText>
                <FText>{formatarCpfCnpj(clienteSelecionado.cpfCnpj)}</FText>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FText size="sm" weight="bold">
                  Telefone:
                </FText>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Phone
                    sx={{ fontSize: "1rem", color: quickColors.primary }}
                  />
                  <FText>{formatarTelefone(clienteSelecionado.telefone)}</FText>
                </Box>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FText size="sm" weight="bold">
                  Email:
                </FText>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Email
                    sx={{ fontSize: "1rem", color: quickColors.primary }}
                  />
                  <FText>{clienteSelecionado.email}</FText>
                </Box>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FText size="sm" weight="bold">
                  Cliente desde:
                </FText>
                <FText>
                  {new Date(clienteSelecionado.createdAt).toLocaleDateString(
                    "pt-BR"
                  )}
                </FText>
              </Grid>

              <Grid item xs={12}>
                <FText size="sm" weight="bold">
                  Endereço:
                </FText>
                <FText>
                  {clienteSelecionado.endereco.rua},{" "}
                  {clienteSelecionado.endereco.numero}
                  {clienteSelecionado.endereco.complemento &&
                    ` - ${clienteSelecionado.endereco.complemento}`}
                  <br />
                  {clienteSelecionado.endereco.bairro} -{" "}
                  {clienteSelecionado.endereco.cidade}
                  <br />
                  CEP: {clienteSelecionado.endereco.cep}
                </FText>
              </Grid>
            </Grid>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)}>Fechar</Button>
          <Button variant="contained" startIcon={<EditIcon />}>
            Editar Cliente
          </Button>
        </DialogActions>
      </Dialog>
    </DashboardTemplate>
  );
};

export default ClientesPage;
