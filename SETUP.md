# Configuração do Projeto

## Estrutura de Arquivos Criada

### Componentes (Atomic Design)

```
src/components/
├── atoms/
│   ├── FAlert/         # Sistema de alertas
│   ├── FButton/        # Botões customizados
│   ├── FContainer/     # Container flexível
│   ├── FInput/         # Inputs controlados
│   └── FText/          # Tipografia padronizada
├── molecules/
│   ├── FHeader/        # Cabeçalho da aplicação
│   ├── FInputField/    # Campo de input completo
│   └── FStatsCard/     # Cards de estatísticas
├── organisms/
│   ├── FDashboardStats/ # Estatísticas do dashboard
│   ├── FLoginForm/     # Formulário de login
│   └── FSidebar/       # Menu lateral
├── templates/
│   ├── AuthTemplate/   # Layout de autenticação
│   └── DashboardTemplate/ # Layout do dashboard
└── AppRouter/          # Sistema de rotas
```

### Páginas

```
src/pages/
├── DashboardPage/      # Página principal do sistema
├── HomePage/           # Landing page da empresa
└── LoginPage/          # Página de autenticação
```

### Sistema de Design

```
src/ui/
├── index.ts           # Exports centralizados
└── theme.ts           # Configuração completa do design system
```

### Contextos e Hooks

```
src/context/
├── AuthContext.tsx    # Contexto de autenticação
└── NotificationContext.tsx # Sistema de notificações

src/hooks/
├── useAuth.ts         # Hook de autenticação
└── useNotification.ts # Hook de notificações
```

### Serviços

```
src/services/
├── apiService.ts      # Serviços da API REST
└── authService.ts     # Serviços de autenticação
```

### Tipos TypeScript

```
src/types/
└── index.ts           # Definições de tipos centralizadas
```

## Funcionalidades Implementadas

### ✅ Sistema de Autenticação

- Login com validação
- Contexto de autenticação
- Proteção de rotas
- Gerenciamento de sessão

### ✅ Design System Completo

- Atomic Design
- Tema verde ambiental
- Componentes reutilizáveis
- Tipografia padronizada
- Sistema de cores consistente

### ✅ Dashboard Principal

- Cards de estatísticas
- Layout responsivo
- Menu lateral
- Cabeçalho com perfil do usuário

### ✅ Homepage Institucional

- Informações da empresa
- Seções de serviços
- Contato e localização
- Design moderno e responsivo

### ✅ Estrutura de Dados

- JSON Server configurado
- Modelos de dados completos
- Relacionamentos entre entidades

## Próximos Passos

### Funcionalidades Pendentes

1. **Gestão de Caçambas**

   - Formulário de cadastro
   - Lista com filtros
   - Upload de imagens
   - Controle de status

2. **Sistema de Locações**

   - Formulário de locação
   - Seleção de cliente e caçamba
   - Cálculo de valores
   - Histórico de locações

3. **Gestão de Clientes**

   - CRUD completo
   - Validação de CPF/CNPJ
   - Histórico de locações por cliente

4. **Mapa Interativo**

   - Integração com Google Maps
   - Marcadores das caçambas
   - Status visual em tempo real

5. **Relatórios**
   - Gráficos de receita
   - Relatórios de utilização
   - Exportação de dados

### Melhorias Técnicas

- Implementar testes unitários
- Adicionar validação de formulários mais robusta
- Implementar cache de dados
- Otimizar performance
- Adicionar PWA capabilities

## Como Executar

1. **Instalar dependências**

```bash
npm install --legacy-peer-deps
```

2. **Executar projeto completo**

```bash
npm run dev:full
```

3. **Acessar aplicação**

- Frontend: http://localhost:3002
- API: http://localhost:3001

4. **Credenciais de teste**

- Admin: admin@neltec.com / admin123
- Operador: operador@neltec.com / op123

## Tecnologias Utilizadas

- **React 18** + **TypeScript**
- **Material-UI** para componentes
- **React Router** para navegação
- **Axios** para requisições HTTP
- **JSON Server** para backend mock
- **Vite** para bundling
- **ESLint** para análise de código

## Arquitetura

O projeto segue os princípios do **Atomic Design** e **Clean Code**, com:

- Separação clara de responsabilidades
- Componentes reutilizáveis
- Tipagem forte com TypeScript
- Design system consistente
- Estrutura escalável
