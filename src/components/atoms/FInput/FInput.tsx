import React from "react";
import { TextField, TextFieldProps } from "@mui/material";
import { quickColors, theme } from "../../../ui";

interface FInputProps extends Omit<TextFieldProps, "variant"> {
  variant?: "outlined" | "filled";
  hasError?: boolean;
  helperText?: string;
}

const FInput: React.FC<FInputProps> = ({
  variant = "outlined",
  hasError = false,
  helperText,
  sx,
  ...props
}) => {
  return (
    <TextField
      variant={variant}
      error={hasError}
      helperText={helperText}
      sx={{
        "& .MuiOutlinedInput-root": {
          borderRadius: theme.borderRadius.md,
          "& fieldset": {
            borderColor: hasError
              ? quickColors.error
              : quickColors.border.light,
          },
          "&:hover fieldset": {
            borderColor: hasError ? quickColors.error : quickColors.primary,
          },
          "&.Mui-focused fieldset": {
            borderColor: hasError ? quickColors.error : quickColors.primary,
            borderWidth: "2px",
          },
        },
        "& .MuiInputLabel-root": {
          color: quickColors.text.secondary,
          "&.Mui-focused": {
            color: hasError ? quickColors.error : quickColors.primary,
          },
        },
        "& .MuiFormHelperText-root": {
          color: hasError ? quickColors.error : quickColors.text.muted,
          fontSize: theme.typography.fontSize.sm,
        },
        ...sx,
      }}
      {...props}
    />
  );
};

export default FInput;
