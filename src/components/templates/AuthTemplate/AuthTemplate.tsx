import React from "react";
import { Box } from "@mui/material";
import { quickColors } from "../../../ui";

interface AuthTemplateProps {
  children: React.ReactNode;
}

const AuthTemplate: React.FC<AuthTemplateProps> = ({ children }) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: `linear-gradient(135deg, ${quickColors.primary} 0%, ${quickColors.primary}90 100%)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="1"%3E%3C/circle%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          opacity: 0.5,
        },
      }}
    >
      <Box sx={{ position: "relative", zIndex: 1, width: "100%" }}>
        {children}
      </Box>
    </Box>
  );
};

export default AuthTemplate;
