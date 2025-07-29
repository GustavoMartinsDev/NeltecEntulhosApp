import React, { useState } from "react";
import { Box, IconButton } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { FHeader } from "../../molecules";
import { FSidebar } from "../../organisms";
import { quickColors } from "../../../ui";

interface DashboardTemplateProps {
  children: React.ReactNode;
  selectedMenuItem?: string;
  onMenuItemSelect?: (itemId: string, path: string) => void;
}

const DashboardTemplate: React.FC<DashboardTemplateProps> = ({
  children,
  selectedMenuItem = "dashboard",
  onMenuItemSelect,
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleMenuItemSelect = (itemId: string, path: string) => {
    onMenuItemSelect?.(itemId, path);
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      {/* Menu Button - Fixed Position */}
      <IconButton
        onClick={handleSidebarToggle}
        sx={{
          position: "fixed",
          top: 16,
          left: 16,
          zIndex: 1300,
          backgroundColor: quickColors.primary,
          color: "white",
          "&:hover": {
            backgroundColor: quickColors.primary,
            opacity: 0.9,
          },
          boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
        }}
      >
        <MenuIcon />
      </IconButton>

      {/* Sidebar */}
      <FSidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        selectedItem={selectedMenuItem}
        onItemSelect={handleMenuItemSelect}
      />

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          backgroundColor: quickColors.background.secondary,
          minHeight: "100vh",
          paddingLeft: { xs: 0, md: 0 },
        }}
      >
        <FHeader />

        <Box
          sx={{
            padding: { xs: 2, md: 3 },
            paddingTop: { xs: 1, md: 2 },
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardTemplate;
