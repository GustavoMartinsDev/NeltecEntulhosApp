import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Box,
} from "@mui/material";
import {
  Dashboard,
  DirectionsCar,
  People,
  History,
  Map as MapIcon,
  Assessment,
} from "@mui/icons-material";
import { FText } from "../../atoms";
import { quickColors, theme } from "../../../ui";

interface MenuItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  path: string;
}

interface FSidebarProps {
  open: boolean;
  onClose: () => void;
  selectedItem: string;
  onItemSelect: (itemId: string, path: string) => void;
}

const menuItems: MenuItem[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: <Dashboard />,
    path: "/dashboard",
  },
  {
    id: "cacambas",
    label: "Caçambas",
    icon: <DirectionsCar />,
    path: "/cacambas",
  },
  {
    id: "locacoes",
    label: "Locações",
    icon: <Assessment />,
    path: "/locacoes",
  },
  {
    id: "clientes",
    label: "Clientes",
    icon: <People />,
    path: "/clientes",
  },
  {
    id: "historico",
    label: "Histórico",
    icon: <History />,
    path: "/historico",
  },
  {
    id: "mapa",
    label: "Mapa",
    icon: <MapIcon />,
    path: "/mapa",
  },
];

const FSidebar: React.FC<FSidebarProps> = ({
  open,
  onClose,
  selectedItem,
  onItemSelect,
}) => {
  const handleItemClick = (item: MenuItem) => {
    onItemSelect(item.id, item.path);
    onClose();
  };

  return (
    <Drawer
      variant="temporary"
      anchor="left"
      open={open}
      onClose={onClose}
      sx={{
        "& .MuiDrawer-paper": {
          width: 280,
          backgroundColor: quickColors.background.primary,
          borderRight: `1px solid ${quickColors.border.light}`,
        },
      }}
    >
      <Box
        sx={{
          padding: theme.spacing.lg,
          borderBottom: `1px solid ${quickColors.border.light}`,
        }}
      >
        <FText size="lg" weight="bold" color={quickColors.primary}>
          Neltec Entulhos
        </FText>
        <FText size="sm" color={quickColors.text.secondary}>
          Sistema de Gestão
        </FText>
      </Box>

      <List sx={{ padding: theme.spacing.md }}>
        {menuItems.map((item) => (
          <ListItem
            key={item.id}
            onClick={() => handleItemClick(item)}
            sx={{
              borderRadius: theme.borderRadius.md,
              marginBottom: theme.spacing.xs,
              cursor: "pointer",
              backgroundColor:
                selectedItem === item.id
                  ? `${quickColors.primary}15`
                  : "transparent",
              color:
                selectedItem === item.id
                  ? quickColors.primary
                  : quickColors.text.primary,
              "&:hover": {
                backgroundColor:
                  selectedItem === item.id
                    ? `${quickColors.primary}20`
                    : quickColors.background.secondary,
              },
              transition: "all 0.2s ease-in-out",
            }}
          >
            <ListItemIcon
              sx={{
                color:
                  selectedItem === item.id
                    ? quickColors.primary
                    : quickColors.text.secondary,
                minWidth: 40,
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={item.label}
              primaryTypographyProps={{
                fontSize: theme.typography.fontSize.sm,
                fontWeight:
                  selectedItem === item.id
                    ? theme.typography.fontWeight.medium
                    : theme.typography.fontWeight.normal,
              }}
            />
          </ListItem>
        ))}
      </List>

      <Divider sx={{ margin: `${theme.spacing.md} ${theme.spacing.lg}` }} />

      <Box sx={{ padding: theme.spacing.lg }}>
        <FText size="xs" color={quickColors.text.muted}>
          © 2025 Neltec Entulhos
        </FText>
        <FText size="xs" color={quickColors.text.muted}>
          +15 anos no mercado
        </FText>
        <FText size="xs" color={quickColors.text.muted}>
          Taboão da Serra - SP
        </FText>
      </Box>
    </Drawer>
  );
};

export default FSidebar;
