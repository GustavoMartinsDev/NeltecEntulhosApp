import React from "react";
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";
import { quickColors, theme } from "../../../ui";

interface FButtonProps extends Omit<MuiButtonProps, "variant"> {
  variant?:
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "error"
    | "outline";
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  loading?: boolean;
}

const FButton: React.FC<FButtonProps> = ({
  children,
  variant = "primary",
  size = "medium",
  fullWidth = false,
  loading = false,
  disabled,
  sx,
  ...props
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case "primary":
        return {
          backgroundColor: quickColors.primary,
          color: "white",
          "&:hover": { backgroundColor: theme.colors.primary[700] },
        };
      case "secondary":
        return {
          backgroundColor: quickColors.secondary,
          color: "white",
          "&:hover": { backgroundColor: theme.colors.secondary[700] },
        };
      case "success":
        return {
          backgroundColor: quickColors.success,
          color: "white",
          "&:hover": { backgroundColor: theme.colors.success[700] },
        };
      case "warning":
        return {
          backgroundColor: quickColors.warning,
          color: "white",
          "&:hover": { backgroundColor: theme.colors.warning[700] },
        };
      case "error":
        return {
          backgroundColor: quickColors.error,
          color: "white",
          "&:hover": { backgroundColor: theme.colors.error[700] },
        };
      case "outline":
        return {
          backgroundColor: "transparent",
          color: quickColors.primary,
          border: `1px solid ${quickColors.primary}`,
          "&:hover": {
            backgroundColor: theme.colors.primary[50],
            borderColor: theme.colors.primary[700],
          },
        };
      default:
        return {};
    }
  };

  return (
    <MuiButton
      variant="contained"
      size={size}
      fullWidth={fullWidth}
      disabled={disabled || loading}
      sx={{
        textTransform: "none",
        borderRadius: theme.borderRadius.md,
        fontWeight: theme.typography.fontWeight.medium,
        boxShadow: theme.shadows.sm,
        "&:hover": {
          boxShadow: theme.shadows.md,
        },
        ...getVariantStyles(),
        ...sx,
      }}
      {...props}
    >
      {loading ? "Carregando..." : children}
    </MuiButton>
  );
};

export default FButton;
