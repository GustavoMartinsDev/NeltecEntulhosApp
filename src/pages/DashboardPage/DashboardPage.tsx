import React from "react";
import { DashboardTemplate, FDashboardStats } from "../../components";
import { DashboardStats } from "../../types";

// Dados mockados para demonstração
const mockStats: DashboardStats = {
  totalCacambas: 50,
  cacambasDisponiveis: 32,
  cacambasLocadas: 18,
  locacoesAtivas: 18,
  receitaTotal: 125000,
  receitaMensal: 28500,
};

interface DashboardPageProps {
  selectedMenuItem?: string;
  onMenuItemSelect?: (itemId: string, path: string) => void;
}

const DashboardPage: React.FC<DashboardPageProps> = ({
  selectedMenuItem = "dashboard",
  onMenuItemSelect,
}) => {
  return (
    <DashboardTemplate
      selectedMenuItem={selectedMenuItem}
      onMenuItemSelect={onMenuItemSelect}
    >
      <FDashboardStats stats={mockStats} />
    </DashboardTemplate>
  );
};

export default DashboardPage;
