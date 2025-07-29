import React from "react";
import { FormControl, FormLabel } from "@mui/material";
import { FInput, FText } from "../../atoms";
import { quickColors, theme } from "../../../ui";

interface FInputFieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  helperText?: string;
  multiline?: boolean;
  rows?: number;
}

const FInputField: React.FC<FInputFieldProps> = ({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  required = false,
  disabled = false,
  helperText,
  multiline = false,
  rows = 1,
}) => {
  return (
    <FormControl fullWidth sx={{ marginBottom: theme.spacing.md }}>
      <FormLabel
        htmlFor={name}
        sx={{
          color: quickColors.text.primary,
          fontSize: theme.typography.fontSize.sm,
          fontWeight: theme.typography.fontWeight.medium,
          marginBottom: theme.spacing.xs,
          "&.Mui-focused": {
            color: error ? quickColors.error : quickColors.primary,
          },
        }}
      >
        {label}
        {required && (
          <FText
            component="span"
            color={quickColors.error}
            sx={{ marginLeft: theme.spacing.xs }}
          >
            *
          </FText>
        )}
      </FormLabel>

      <FInput
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        hasError={!!error}
        disabled={disabled}
        helperText={error || helperText}
        multiline={multiline}
        rows={multiline ? rows : undefined}
        fullWidth
      />
    </FormControl>
  );
};

export default FInputField;
