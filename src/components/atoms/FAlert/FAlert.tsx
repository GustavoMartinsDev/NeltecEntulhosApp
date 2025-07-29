import React from "react";
import { Alert, AlertProps as MuiAlertProps, Snackbar } from "@mui/material";
import { AlertProps } from "../../../types";
import { theme } from "../../../ui";

const FAlert: React.FC<AlertProps> = ({
  type,
  message,
  isVisible,
  onClose,
}) => {
  const getAlertColor = (): MuiAlertProps["severity"] => {
    switch (type) {
      case "success":
        return "success";
      case "error":
        return "error";
      case "warning":
        return "warning";
      case "info":
        return "info";
      default:
        return "info";
    }
  };

  return (
    <Snackbar
      open={isVisible}
      autoHideDuration={5000}
      onClose={onClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert
        onClose={onClose}
        severity={getAlertColor()}
        sx={{
          borderRadius: theme.borderRadius.md,
          fontWeight: theme.typography.fontWeight.medium,
          fontSize: theme.typography.fontSize.sm,
          "& .MuiAlert-icon": {
            fontSize: "1.25rem",
          },
        }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default FAlert;
