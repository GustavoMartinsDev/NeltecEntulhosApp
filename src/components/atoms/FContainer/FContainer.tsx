import React from "react";
import { Box, BoxProps } from "@mui/material";
import { theme } from "../../../ui";

interface FContainerProps extends BoxProps {
  padding?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
  margin?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
  background?: "primary" | "secondary" | "muted" | "transparent";
  rounded?: "none" | "sm" | "base" | "md" | "lg" | "xl" | "2xl" | "full";
  shadow?: "none" | "sm" | "base" | "md" | "lg" | "xl";
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "full";
}

const FContainer: React.FC<FContainerProps> = ({
  children,
  padding = "md",
  margin = "none",
  background = "transparent",
  rounded = "none",
  shadow = "none",
  maxWidth,
  sx,
  ...props
}) => {
  const getPadding = () => {
    if (padding === "none") return "0";
    return theme.spacing[padding];
  };

  const getMargin = () => {
    if (margin === "none") return "0";
    return theme.spacing[margin];
  };

  const getBackground = () => {
    switch (background) {
      case "primary":
        return "#ffffff";
      case "secondary":
        return theme.colors.gray[50];
      case "muted":
        return theme.colors.gray[100];
      default:
        return "transparent";
    }
  };

  const getBorderRadius = () => {
    if (rounded === "none") return "0";
    return theme.borderRadius[rounded];
  };

  const getBoxShadow = () => {
    if (shadow === "none") return "none";
    return theme.shadows[shadow];
  };

  const getMaxWidth = () => {
    if (!maxWidth || maxWidth === "full") return "100%";

    const breakpointMap: { [key: string]: string } = {
      xs: "475px",
      sm: theme.breakpoints.sm,
      md: theme.breakpoints.md,
      lg: theme.breakpoints.lg,
      xl: theme.breakpoints.xl,
      "2xl": theme.breakpoints["2xl"],
    };

    return breakpointMap[maxWidth] || "100%";
  };

  return (
    <Box
      sx={{
        padding: getPadding(),
        margin: getMargin(),
        backgroundColor: getBackground(),
        borderRadius: getBorderRadius(),
        boxShadow: getBoxShadow(),
        maxWidth: getMaxWidth(),
        width: "100%",
        ...sx,
      }}
      {...props}
    >
      {children}
    </Box>
  );
};

export default FContainer;
