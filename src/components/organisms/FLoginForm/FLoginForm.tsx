import React, { useState } from "react";
import { Box, Paper, Divider } from "@mui/material";
import { Login as LoginIcon } from "@mui/icons-material";
import { FButton, FContainer, FText } from "../../atoms";
import { FInputField } from "../../molecules";
import { quickColors, theme } from "../../../ui";
import { useAuth } from "../../../hooks/useAuth";

interface LoginFormData {
  email: string;
  password: string;
}

interface FLoginFormProps {
  onLoginSuccess?: () => void;
}

const FLoginForm: React.FC<FLoginFormProps> = ({ onLoginSuccess }) => {
  const { login, isLoading } = useAuth();
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<Partial<LoginFormData>>({});
  const [loginError, setLoginError] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Limpa erro específico do campo
    if (errors[name as keyof LoginFormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }

    // Limpa erro geral de login
    if (loginError) {
      setLoginError("");
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<LoginFormData> = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email é obrigatório";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email inválido";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Senha é obrigatória";
    } else if (formData.password.length < 3) {
      newErrors.password = "Senha deve ter pelo menos 3 caracteres";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!validateForm()) return;

    try {
      const success = await login(formData.email, formData.password);

      if (success) {
        onLoginSuccess?.();
      } else {
        setLoginError("Email ou senha incorretos");
      }
    } catch (error) {
      setLoginError("Erro ao fazer login. Tente novamente.");
    }
  };

  return (
    <FContainer
      maxWidth="sm"
      padding="none"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: theme.spacing.md,
      }}
    >
      <Paper
        elevation={0}
        sx={{
          padding: theme.spacing["3xl"],
          borderRadius: theme.borderRadius.xl,
          boxShadow: theme.shadows.xl,
          border: `1px solid ${quickColors.border.light}`,
          width: "100%",
          maxWidth: "400px",
        }}
      >
        <Box sx={{ textAlign: "center", marginBottom: theme.spacing["2xl"] }}>
          <Box
            sx={{
              backgroundColor: `${quickColors.primary}20`,
              borderRadius: theme.borderRadius.full,
              width: 64,
              height: 64,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto",
              marginBottom: theme.spacing.lg,
            }}
          >
            <LoginIcon sx={{ color: quickColors.primary, fontSize: "2rem" }} />
          </Box>

          <FText size="2xl" weight="bold" color={quickColors.text.primary}>
            Bem-vindo
          </FText>

          <FText size="sm" color={quickColors.text.secondary}>
            Sistema de Gestão Neltec Entulhos
          </FText>
        </Box>

        <Divider sx={{ marginBottom: theme.spacing.xl }} />

        <form onSubmit={handleSubmit}>
          <FInputField
            label="Email"
            name="email"
            type="email"
            placeholder="seu@email.com"
            value={formData.email}
            onChange={handleInputChange}
            error={errors.email}
            required
          />

          <FInputField
            label="Senha"
            name="password"
            type="password"
            placeholder="Sua senha"
            value={formData.password}
            onChange={handleInputChange}
            error={errors.password}
            required
          />

          {loginError && (
            <Box sx={{ marginBottom: theme.spacing.md }}>
              <FText size="sm" color={quickColors.error}>
                {loginError}
              </FText>
            </Box>
          )}

          <FButton
            type="submit"
            variant="primary"
            size="large"
            fullWidth
            loading={isLoading}
            sx={{ marginTop: theme.spacing.lg }}
          >
            Entrar
          </FButton>
        </form>
      </Paper>
    </FContainer>
  );
};

export default FLoginForm;
