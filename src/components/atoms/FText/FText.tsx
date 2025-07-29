import React from "react";
import { Typography, TypographyProps } from "@mui/material";
import { theme } from "../../../ui";

interface FTextProps extends TypographyProps {
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
  weight?: "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold";
  color?: string;
}

const FText: React.FC<FTextProps> = ({
  children,
  size = "base",
  weight = "normal",
  color,
  sx,
  ...props
}) => {
  const getFontSize = () => {
    return theme.typography.fontSize[size];
  };

  const getFontWeight = () => {
    return theme.typography.fontWeight[weight];
  };

  return (
    <Typography
      sx={{
        fontSize: getFontSize(),
        fontWeight: getFontWeight(),
        color: color,
        lineHeight: theme.typography.lineHeight.normal,
        ...sx,
      }}
      {...props}
    >
      {children}
    </Typography>
  );
};

export default FText;
