# 🚛 Neltec Entulhos - Sistema de Gestão

Sistema completo para gestão de caçambas estacionárias de remoção de entulhos, desenvolvido com React, TypeScript e Atomic Design.

## 🏢 Sobre a Empresa

**Neltec Entulhos** é uma empresa especializada em locação de caçambas estacionárias de 4 metros cúbicos para remoção de entulhos, com mais de **15 anos** de experiência no mercado, atendendo **Taboão da Serra - SP** e região.

## ✨ Funcionalidades

### 🔐 Sistema de Autenticação

- Login seguro com validação
- Controle de acesso por perfil (Admin/Operador)
- Gestão de sessões

### 📊 Dashboard Principal

- Visão geral das estatísticas
- Caçambas disponíveis e locadas
- Receita mensal e total
- Indicadores de performance

### 🚛 Gestão de Caçambas

- Cadastro de caçambas com numeração
- Status de disponibilidade (Disponível, Locada, Manutenção)
- Upload de múltiplas fotos
- Controle de localização

### 📋 Sistema de Locações

- Cadastro de locações com endereço completo
- Coordenadas GPS para rastreamento
- Upload de fotos da locação
- Histórico completo de locações

### 👥 Gestão de Clientes

- Cadastro completo de clientes
- CPF/CNPJ e dados de contato
- Endereço detalhado

### 🗺️ Mapa Interativo

- Visualização de todas as caçambas no mapa
- Localização em tempo real
- Status visual das caçambas

### 📈 Relatórios e Histórico

- Histórico completo de operações
- Relatórios de performance
- Análise de dados

## 🛠 Tecnologias

### Frontend

- **React 18** - Framework principal
- **TypeScript** - Tipagem estática
- **Material-UI** - Sistema de componentes
- **React Router** - Navegação

### Arquitetura

- **Atomic Design** - Estrutura de componentes escalável
- **Clean Code** - Código limpo e bem documentado
- **Responsive Design** - Interface adaptável

### Backend (Temporário)

- **JSON Server** - Simulação de API REST
- **Axios** - Cliente HTTP

### Futura Integração

- **Firebase** - Backend definitivo planejado

## 🏗 Estrutura do Projeto

```
📁 src/
├── 📁 components/              # Atomic Design
│   ├── 📁 atoms/              # Componentes básicos
│   │   ├── 📄 FButton/        # Botões customizados
│   │   ├── 📄 FInput/         # Inputs controlados
│   │   ├── 📄 FText/          # Tipografia padronizada
│   │   ├── 📄 FContainer/     # Container flexível
│   │   └── 📄 FAlert/         # Sistema de alertas
│   ├── 📁 molecules/          # Combinações de atoms
│   │   ├── 📄 FHeader/        # Cabeçalho da aplicação
│   │   ├── 📄 FInputField/    # Campo de input completo
│   │   └── 📄 FStatsCard/     # Cards de estatísticas
│   ├── 📁 organisms/          # Componentes complexos
│   │   ├── 📄 FLoginForm/     # Formulário de login
│   │   ├── 📄 FSidebar/       # Menu lateral
│   │   └── 📄 FDashboardStats/ # Estatísticas do dashboard
│   └── 📁 templates/          # Templates de página
│       ├── 📄 AuthTemplate/   # Layout de autenticação
│       └── 📄 DashboardTemplate/ # Layout do dashboard
├── 📁 pages/                  # Páginas da aplicação
├── 📁 context/                # Context API
├── 📁 hooks/                  # Custom Hooks
├── 📁 services/               # Serviços e APIs
├── 📁 types/                  # Definições TypeScript
├── 📁 ui/                     # Sistema de Design
└── 📁 utils/                  # Utilitários
```

## 🚀 Como Executar

### Pré-requisitos

- Node.js >= 16.0.0
- npm >= 8.0.0

### Instalação

1. **Clone o repositório**

```bash
git clone https://github.com/GustavoMartinsDev/NeltecEntulhosApp.git
cd NeltecEntulhosApp
```

2. **Instale as dependências**

```bash
npm install --legacy-peer-deps
```

3. **Execute o projeto completo**

```bash
npm run dev:full
```

Isso iniciará:

- **Frontend**: http://localhost:5173
- **API JSON Server**: http://localhost:3001

### Scripts Disponíveis

```bash
npm run dev          # Apenas frontend
npm run json-server  # Apenas API
npm run dev:full     # Frontend + API
npm run build        # Build de produção
npm run lint         # Análise de código
```

## 🔐 Credenciais de Acesso

### Administrador

- **Email**: admin@neltec.com
- **Senha**: admin123

### Operador

- **Email**: operador@neltec.com
- **Senha**: op123

## 🎨 Sistema de Design

### Paleta de Cores (Verde Ambiental)

- **Primary**: #22c55e (Verde principal)
- **Secondary**: #64748b (Cinza)
- **Success**: #22c55e (Verde)
- **Warning**: #f59e0b (Amarelo)
- **Error**: #ef4444 (Vermelho)

### Tipografia

- **Font Family**: Inter, Roboto, Helvetica, Arial
- **Tamanhos**: xs (12px) → 5xl (48px)
- **Pesos**: light → extrabold

### Espaçamento

- **Sistema**: Baseado em 4px
- **Variações**: xs (4px) → 3xl (64px)

## 📱 Funcionalidades Futuras

- [ ] **Google Maps Integration** - Mapa interativo real
- [ ] **Firebase Backend** - Migração para Firebase
- [ ] **Notificações Push** - Alertas em tempo real
- [ ] **Relatórios PDF** - Geração de relatórios
- [ ] **App Mobile** - Versão mobile nativa
- [ ] **Integração Pagamento** - Gateway de pagamento
- [ ] **Chat Suporte** - Suporte ao cliente

## 👨‍💻 Desenvolvimento

### Padrões de Código

- **ESLint** - Análise estática
- **TypeScript Strict** - Tipagem rigorosa
- **Prettier** - Formatação automática
- **Conventional Commits** - Padrão de commits

### Contribuição

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -m 'feat: adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Contato

**Neltec Entulhos**

- 📍 Taboão da Serra - SP
- 📞 (11) 99999-9999
- 📧 contato@neltec.com
- 🌐 www.neltec.com

---

_Desenvolvido com ❤️ por Gustavo Martins_
