import React from "react";
import { Card, CardContent, Box } from "@mui/material";
import { FText } from "../../atoms";
import { quickColors, theme } from "../../../ui";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: {
    value: string;
    isPositive: boolean;
  };
  color?: "primary" | "success" | "warning" | "error";
}

const FStatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  icon,
  trend,
  color = "primary",
}) => {
  const getColorByType = () => {
    switch (color) {
      case "primary":
        return quickColors.primary;
      case "success":
        return quickColors.success;
      case "warning":
        return quickColors.warning;
      case "error":
        return quickColors.error;
      default:
        return quickColors.primary;
    }
  };

  return (
    <Card
      sx={{
        borderRadius: theme.borderRadius.lg,
        boxShadow: theme.shadows.md,
        border: `1px solid ${quickColors.border.light}`,
        transition: "all 0.2s ease-in-out",
        "&:hover": {
          boxShadow: theme.shadows.lg,
          transform: "translateY(-2px)",
        },
      }}
    >
      <CardContent sx={{ padding: theme.spacing.lg }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: theme.spacing.md,
          }}
        >
          <Box
            sx={{
              backgroundColor: `${getColorByType()}20`,
              borderRadius: theme.borderRadius.lg,
              padding: theme.spacing.sm,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {React.cloneElement(icon as React.ReactElement, {
              style: { color: getColorByType(), fontSize: "1.5rem" },
            })}
          </Box>
        </Box>

        <FText
          size="sm"
          weight="medium"
          color={quickColors.text.secondary}
          sx={{ marginBottom: theme.spacing.xs }}
        >
          {title}
        </FText>

        <FText
          size="2xl"
          weight="bold"
          color={quickColors.text.primary}
          sx={{ marginBottom: trend ? theme.spacing.xs : 0 }}
        >
          {value}
        </FText>

        {trend && (
          <FText
            size="sm"
            color={trend.isPositive ? quickColors.success : quickColors.error}
          >
            {trend.isPositive ? "+" : ""}
            {trend.value}
          </FText>
        )}
      </CardContent>
    </Card>
  );
};

export default FStatsCard;
