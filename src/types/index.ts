// Tipos de dados para o sistema de caçambas

export interface User {
  id: string;
  email: string;
  password: string;
  name: string;
  role: "admin" | "operator";
  createdAt: string;
}

export interface Cliente {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  cpfCnpj: string;
  endereco: {
    rua: string;
    numero: string;
    bairro: string;
    cidade: string;
    cep: string;
    complemento?: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface Cacamba {
  id: string;
  numero: string;
  codigo: string; // Código identificador da caçamba
  tamanho: string; // Ex: "5m³", "3m³", etc.
  capacidade: number; // metros cúbicos
  status: "disponivel" | "locada" | "manutencao" | "em_transito";
  localizacao?: {
    lat: number;
    lng: number;
    endereco: string;
  };
  fotos: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Locacao {
  id: string;
  clienteId: string;
  cliente: Cliente;
  cacambaId: string;
  cacamba: Cacamba;
  dataInicio: string;
  dataFim?: string;
  endereco: {
    rua: string;
    numero: string;
    bairro: string;
    cidade: string;
    cep: string;
    complemento?: string;
  };
  enderecoEntrega: {
    rua: string;
    numero: string;
    bairro: string;
    cidade: string;
    cep: string;
    complemento?: string;
  };
  coordenadas: {
    lat: number;
    lng: number;
  };
  valor: number;
  valorTotal: number; // Valor total da locação
  status: "ativa" | "finalizada" | "cancelada" | "pendente";
  observacoes?: string;
  fotos: string[];
  createdAt: string;
  updatedAt: string;
}

export interface DashboardStats {
  totalCacambas: number;
  cacambasDisponiveis: number;
  cacambasLocadas: number;
  locacoesAtivas: number;
  receitaTotal: number;
  receitaMensal: number;
}

export interface FormData {
  [key: string]: string | number | boolean | undefined;
}

export interface AlertProps {
  type: "success" | "error" | "warning" | "info";
  message: string;
  isVisible: boolean;
  onClose: () => void;
}

export interface ThemeColors {
  primary: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
  secondary: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
  gray: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
  success: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
  warning: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
  error: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
}
