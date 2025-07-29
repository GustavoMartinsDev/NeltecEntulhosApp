import React from "react";
import { Grid, Box } from "@mui/material";
import { DirectionsCar, Assessment, AttachMoney } from "@mui/icons-material";
import { FText } from "../../atoms";
import { FStatsCard } from "../../molecules";
import { quickColors, theme } from "../../../ui";
import { DashboardStats } from "../../../types";

interface FDashboardStatsProps {
  stats: DashboardStats;
  isLoading?: boolean;
}

const FDashboardStats: React.FC<FDashboardStatsProps> = ({
  stats,
  isLoading = false,
}) => {
  if (isLoading) {
    return (
      <Box sx={{ padding: theme.spacing.xl }}>
        <FText>Carregando estatísticas...</FText>
      </Box>
    );
  }

  const statsCards = [
    {
      title: "Total de Caçambas",
      value: stats.totalCacambas,
      icon: <DirectionsCar />,
      color: "primary" as const,
      trend: {
        value: "100%",
        isPositive: true,
      },
    },
    {
      title: "Caçambas Disponíveis",
      value: stats.cacambasDisponiveis,
      icon: <DirectionsCar />,
      color: "success" as const,
      trend: {
        value: `${Math.round(
          (stats.cacambasDisponiveis / stats.totalCacambas) * 100
        )}%`,
        isPositive: stats.cacambasDisponiveis > 0,
      },
    },
    {
      title: "Locações Ativas",
      value: stats.locacoesAtivas,
      icon: <Assessment />,
      color: "warning" as const,
      trend: {
        value: `${stats.cacambasLocadas} unidades`,
        isPositive: stats.cacambasLocadas > 0,
      },
    },
    {
      title: "Receita Mensal",
      value: `R$ ${stats.receitaMensal.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
      })}`,
      icon: <AttachMoney />,
      color: "success" as const,
      trend: {
        value: "+15%",
        isPositive: true,
      },
    },
  ];

  return (
    <Box sx={{ padding: theme.spacing.xl }}>
      <Box sx={{ marginBottom: theme.spacing.xl }}>
        <FText
          size="2xl"
          weight="bold"
          color={quickColors.text.primary}
          sx={{ marginBottom: theme.spacing.sm }}
        >
          Dashboard
        </FText>
        <FText size="base" color={quickColors.text.secondary}>
          Visão geral do sistema de gestão
        </FText>
      </Box>

      <Grid container spacing={3}>
        {statsCards.map((card, index) => (
          <Grid item xs={12} sm={6} lg={3} key={index}>
            <FStatsCard
              title={card.title}
              value={card.value}
              icon={card.icon}
              color={card.color}
              trend={card.trend}
            />
          </Grid>
        ))}
      </Grid>

      <Box sx={{ marginTop: theme.spacing.xl }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Box
              sx={{
                backgroundColor: quickColors.background.primary,
                borderRadius: theme.borderRadius.lg,
                padding: theme.spacing.xl,
                border: `1px solid ${quickColors.border.light}`,
                boxShadow: theme.shadows.md,
              }}
            >
              <FText
                size="lg"
                weight="semibold"
                color={quickColors.text.primary}
                sx={{ marginBottom: theme.spacing.lg }}
              >
                Atividades Recentes
              </FText>
              <FText size="sm" color={quickColors.text.secondary}>
                Gráficos e relatórios serão implementados aqui
              </FText>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box
              sx={{
                backgroundColor: quickColors.background.primary,
                borderRadius: theme.borderRadius.lg,
                padding: theme.spacing.xl,
                border: `1px solid ${quickColors.border.light}`,
                boxShadow: theme.shadows.md,
              }}
            >
              <FText
                size="lg"
                weight="semibold"
                color={quickColors.text.primary}
                sx={{ marginBottom: theme.spacing.lg }}
              >
                Alertas
              </FText>
              <FText size="sm" color={quickColors.text.secondary}>
                Notificações importantes aparecerão aqui
              </FText>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default FDashboardStats;
