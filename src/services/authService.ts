import { User } from "../types";

// Simulação de API com JSON Server ou dados locais
class AuthService {
  private users: User[] = [
    {
      id: "1",
      email: "admin@neltec.com",
      password: "admin123",
      name: "Administrador",
      role: "admin",
      createdAt: new Date().toISOString(),
    },
    {
      id: "2",
      email: "operador@neltec.com",
      password: "op123",
      name: "Operador",
      role: "operator",
      createdAt: new Date().toISOString(),
    },
  ];

  async login(email: string, password: string): Promise<User | null> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const user = this.users.find(
          (u) => u.email === email && u.password === password
        );
        if (user) {
          const { password: _password, ...userWithoutPassword } = user;
          resolve(userWithoutPassword as User);
        } else {
          resolve(null);
        }
      }, 1000); // Simula delay de rede
    });
  }

  async validateToken(_token: string): Promise<User | null> {
    // Implementação futura para validação de token
    return new Promise((resolve) => {
      setTimeout(() => resolve(null), 500);
    });
  }

  logout(): void {
    // Limpar dados de autenticação
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  }
}

export const authService = new AuthService();
