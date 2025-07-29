import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import { ExitToApp, Dashboard, Person } from "@mui/icons-material";
import { FText } from "../../atoms";
import { quickColors, theme } from "../../../ui";
import { useAuth } from "../../../hooks/useAuth";

const FHeader: React.FC = () => {
  const { user, logout } = useAuth();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    handleMenuClose();
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: quickColors.primary,
        boxShadow: theme.shadows.md,
        borderBottom: `1px solid ${quickColors.border.light}`,
      }}
    >
      <Toolbar
        sx={{ justifyContent: "space-between", padding: theme.spacing.md }}
      >
        <Box
          sx={{ display: "flex", alignItems: "center", gap: theme.spacing.md }}
        >
          <Dashboard sx={{ color: "white", fontSize: "1.5rem" }} />
          <FText size="lg" weight="bold" color="white">
            Neltec Entulhos
          </FText>
        </Box>

        <Box
          sx={{ display: "flex", alignItems: "center", gap: theme.spacing.sm }}
        >
          <FText
            size="sm"
            color="white"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Olá, {user?.name}
          </FText>

          <IconButton
            onClick={handleMenuOpen}
            sx={{ padding: theme.spacing.xs }}
          >
            <Avatar
              sx={{
                backgroundColor: theme.colors.primary[800],
                width: 36,
                height: 36,
                fontSize: theme.typography.fontSize.sm,
              }}
            >
              {user?.name.charAt(0).toUpperCase()}
            </Avatar>
          </IconButton>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            PaperProps={{
              sx: {
                borderRadius: theme.borderRadius.md,
                boxShadow: theme.shadows.lg,
                minWidth: 160,
              },
            }}
          >
            <MenuItem onClick={handleMenuClose} sx={{ gap: theme.spacing.sm }}>
              <Person fontSize="small" />
              <FText size="sm">Perfil</FText>
            </MenuItem>
            <MenuItem onClick={handleLogout} sx={{ gap: theme.spacing.sm }}>
              <ExitToApp fontSize="small" />
              <FText size="sm">Sair</FText>
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default FHeader;
