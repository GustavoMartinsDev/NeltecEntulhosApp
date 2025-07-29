import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthProvider } from "../../context/AuthContext";
import { NotificationProvider } from "../../context/NotificationContext";
import { useAuth } from "../../hooks/useAuth";
import HomePage from "../../pages/HomePage";
import LoginPage from "../../pages/LoginPage";
import DashboardPage from "../../pages/DashboardPage";

// Componente para rotas protegidas
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />;
};

// Componente principal do App
const AppContent: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const [selectedMenuItem, setSelectedMenuItem] = useState("dashboard");

  const handleMenuItemSelect = (itemId: string, path: string) => {
    setSelectedMenuItem(itemId);
    // Aqui você pode implementar navegação programática se necessário
    console.log(`Navegando para: ${path}`);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            isAuthenticated ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <LoginPage />
            )
          }
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage
                selectedMenuItem={selectedMenuItem}
                onMenuItemSelect={handleMenuItemSelect}
              />
            </ProtectedRoute>
          }
        />

        <Route
          path="/cacambas"
          element={
            <ProtectedRoute>
              <DashboardPage
                selectedMenuItem="cacambas"
                onMenuItemSelect={handleMenuItemSelect}
              />
            </ProtectedRoute>
          }
        />

        <Route
          path="/locacoes"
          element={
            <ProtectedRoute>
              <DashboardPage
                selectedMenuItem="locacoes"
                onMenuItemSelect={handleMenuItemSelect}
              />
            </ProtectedRoute>
          }
        />

        <Route
          path="/clientes"
          element={
            <ProtectedRoute>
              <DashboardPage
                selectedMenuItem="clientes"
                onMenuItemSelect={handleMenuItemSelect}
              />
            </ProtectedRoute>
          }
        />

        <Route
          path="/historico"
          element={
            <ProtectedRoute>
              <DashboardPage
                selectedMenuItem="historico"
                onMenuItemSelect={handleMenuItemSelect}
              />
            </ProtectedRoute>
          }
        />

        <Route
          path="/mapa"
          element={
            <ProtectedRoute>
              <DashboardPage
                selectedMenuItem="mapa"
                onMenuItemSelect={handleMenuItemSelect}
              />
            </ProtectedRoute>
          }
        />

        <Route path="/home" element={<HomePage />} />

        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </Router>
  );
};

// App principal com AuthProvider
const AppRouter: React.FC = () => {
  return (
    <AuthProvider>
      <NotificationProvider>
        <AppContent />
      </NotificationProvider>
    </AuthProvider>
  );
};

export default AppRouter;
