import React from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import AppRouter from "./components/AppRouter";
import { quickColors } from "./ui";

// Configuração do tema Material-UI
const muiTheme = createTheme({
  palette: {
    primary: {
      main: quickColors.primary,
    },
    secondary: {
      main: quickColors.secondary,
    },
    success: {
      main: quickColors.success,
    },
    warning: {
      main: quickColors.warning,
    },
    error: {
      main: quickColors.error,
    },
    background: {
      default: quickColors.background.secondary,
      paper: quickColors.background.primary,
    },
    text: {
      primary: quickColors.text.primary,
      secondary: quickColors.text.secondary,
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  },
  shape: {
    borderRadius: 8,
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <AppRouter />
    </ThemeProvider>
  );
};

export default App;
