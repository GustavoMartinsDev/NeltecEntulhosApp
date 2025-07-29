import axios from "axios";
import { Cacamba, Cliente, Locacao, DashboardStats } from "../types";

const API_BASE_URL = "http://localhost:3001";

// Configuração do Axios
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

// Interceptor para logging (desenvolvimento)
api.interceptors.request.use(
  (config) => {
    console.log(`API Request: ${config.method?.toUpperCase()} ${config.url}`);
    return config;
  },
  (error) => {
    console.error("API Request Error:", error);
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    console.log(`API Response: ${response.status} ${response.config.url}`);
    return response;
  },
  (error) => {
    console.error("API Response Error:", error);
    return Promise.reject(error);
  }
);

// Serviços da API
export const apiService = {
  // Clientes
  clientes: {
    async getAll(): Promise<Cliente[]> {
      const response = await api.get("/clientes");
      return response.data;
    },

    async getById(id: string): Promise<Cliente> {
      const response = await api.get(`/clientes/${id}`);
      return response.data;
    },

    async create(
      cliente: Omit<Cliente, "id" | "createdAt" | "updatedAt">
    ): Promise<Cliente> {
      const newCliente = {
        ...cliente,
        id: Date.now().toString(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      const response = await api.post("/clientes", newCliente);
      return response.data;
    },

    async update(id: string, cliente: Partial<Cliente>): Promise<Cliente> {
      const updatedCliente = {
        ...cliente,
        updatedAt: new Date().toISOString(),
      };
      const response = await api.patch(`/clientes/${id}`, updatedCliente);
      return response.data;
    },

    async delete(id: string): Promise<void> {
      await api.delete(`/clientes/${id}`);
    },
  },

  // Caçambas
  cacambas: {
    async getAll(): Promise<Cacamba[]> {
      const response = await api.get("/cacambas");
      return response.data;
    },

    async getById(id: string): Promise<Cacamba> {
      const response = await api.get(`/cacambas/${id}`);
      return response.data;
    },

    async create(
      cacamba: Omit<Cacamba, "id" | "createdAt" | "updatedAt">
    ): Promise<Cacamba> {
      const newCacamba = {
        ...cacamba,
        id: Date.now().toString(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      const response = await api.post("/cacambas", newCacamba);
      return response.data;
    },

    async update(id: string, cacamba: Partial<Cacamba>): Promise<Cacamba> {
      const updatedCacamba = {
        ...cacamba,
        updatedAt: new Date().toISOString(),
      };
      const response = await api.patch(`/cacambas/${id}`, updatedCacamba);
      return response.data;
    },

    async delete(id: string): Promise<void> {
      await api.delete(`/cacambas/${id}`);
    },
  },

  // Locações
  locacoes: {
    async getAll(): Promise<Locacao[]> {
      const response = await api.get(
        "/locacoes?_expand=cliente&_expand=cacamba"
      );
      return response.data;
    },

    async getById(id: string): Promise<Locacao> {
      const response = await api.get(
        `/locacoes/${id}?_expand=cliente&_expand=cacamba`
      );
      return response.data;
    },

    async create(
      locacao: Omit<Locacao, "id" | "createdAt" | "updatedAt">
    ): Promise<Locacao> {
      const newLocacao = {
        ...locacao,
        id: Date.now().toString(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      const response = await api.post("/locacoes", newLocacao);
      return response.data;
    },

    async update(id: string, locacao: Partial<Locacao>): Promise<Locacao> {
      const updatedLocacao = {
        ...locacao,
        updatedAt: new Date().toISOString(),
      };
      const response = await api.patch(`/locacoes/${id}`, updatedLocacao);
      return response.data;
    },

    async delete(id: string): Promise<void> {
      await api.delete(`/locacoes/${id}`);
    },
  },

  // Estatísticas
  stats: {
    async getDashboard(): Promise<DashboardStats> {
      const response = await api.get("/stats");
      return response.data;
    },
  },
};

export default apiService;
