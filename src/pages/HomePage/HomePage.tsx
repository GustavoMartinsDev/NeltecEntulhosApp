import React from "react";
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  AppBar,
  Toolbar,
} from "@mui/material";
import {
  Nature,
  DirectionsCar,
  LocationOn,
  Security,
  Schedule,
  Phone,
  Email,
} from "@mui/icons-material";
import { FText, FButton } from "../../components/atoms";
import { quickColors, theme } from "../../ui";
import { useNavigate } from "react-router-dom";
import logoNeltec from "../../assets/images/logoNeltec.png";

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate("/login");
  };

  const services = [
    {
      icon: <DirectionsCar />,
      title: "Caçambas 4m³",
      description:
        "Caçambas estacionárias de 4 metros cúbicos, ideais para remoção de entulhos",
    },
    {
      icon: <Schedule />,
      title: "Entrega Rápida",
      description:
        "Entrega e retirada no horário agendado, com pontualidade garantida",
    },
    {
      icon: <Nature />,
      title: "Sustentabilidade",
      description: "Destinação ambientalmente correta dos resíduos coletados",
    },
    {
      icon: <Security />,
      title: "Segurança",
      description:
        "Todos os procedimentos seguem as normas de segurança vigentes",
    },
  ];

  const stats = [
    { number: "15+", label: "Anos de Mercado" },
    { number: "30+", label: "Caçambas Disponíveis" },
    { number: "1000+", label: "Clientes Atendidos" },
    { number: "100%", label: "Satisfação" },
  ];

  return (
    <Box>
      {/* Header */}
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: quickColors.primary,
          boxShadow: theme.shadows.md,
        }}
      >
        <Toolbar>
          <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
            <img
              src={logoNeltec}
              alt="Neltec Logo"
              style={{
                marginRight: theme.spacing.sm,
                height: "2.5rem",
                width: "auto",
              }}
            />
            <FText size="xl" weight="bold" color="white">
              Neltec Entulhos
            </FText>
          </Box>
          <FButton
            variant="outline"
            onClick={handleLoginRedirect}
            sx={{
              color: "white",
              borderColor: "white",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.1)",
                borderColor: "white",
              },
            }}
          >
            Área do Cliente
          </FButton>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${quickColors.primary}15 0%, ${quickColors.primary}30 100%)`,
          padding: { xs: theme.spacing["2xl"], md: theme.spacing["3xl"] },
          textAlign: "center",
        }}
      >
        <Container maxWidth="lg">
          <FText
            size="4xl"
            weight="bold"
            color={quickColors.text.primary}
            sx={{ marginBottom: theme.spacing.lg }}
          >
            Locação de Caçambas Estacionárias
          </FText>

          <FText
            size="xl"
            color={quickColors.text.secondary}
            sx={{
              marginBottom: theme.spacing["2xl"],
              maxWidth: "600px",
              margin: "0 auto 2rem auto",
            }}
          >
            Há mais de 15 anos oferecendo soluções completas para remoção de
            entulhos em Taboão da Serra e região, com sustentabilidade e
            qualidade garantida.
          </FText>

          <Box
            sx={{
              display: "flex",
              gap: theme.spacing.md,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <FButton variant="primary" size="large">
              Solicitar Orçamento
            </FButton>
            <FButton
              variant="outline"
              size="large"
              onClick={handleLoginRedirect}
            >
              Sistema de Gestão
            </FButton>
          </Box>
        </Container>
      </Box>

      {/* Stats Section */}
      <Container maxWidth="lg" sx={{ padding: theme.spacing["2xl"] }}>
        <Grid container spacing={3}>
          {stats.map((stat, index) => (
            <Grid item xs={6} md={3} key={index}>
              <Card
                sx={{
                  textAlign: "center",
                  borderRadius: theme.borderRadius.lg,
                  border: `1px solid ${quickColors.border.light}`,
                  boxShadow: theme.shadows.sm,
                }}
              >
                <CardContent>
                  <FText
                    size="3xl"
                    weight="bold"
                    color={quickColors.primary}
                    sx={{ marginBottom: theme.spacing.xs }}
                  >
                    {stat.number}
                  </FText>
                  <FText size="sm" color={quickColors.text.secondary}>
                    {stat.label}
                  </FText>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Services Section */}
      <Box sx={{ backgroundColor: quickColors.background.secondary }}>
        <Container maxWidth="lg" sx={{ padding: theme.spacing["2xl"] }}>
          <Box sx={{ textAlign: "center", marginBottom: theme.spacing["2xl"] }}>
            <FText
              size="3xl"
              weight="bold"
              color={quickColors.text.primary}
              sx={{ marginBottom: theme.spacing.md }}
            >
              Nossos Serviços
            </FText>
            <FText size="lg" color={quickColors.text.secondary}>
              Soluções completas para gestão de resíduos
            </FText>
          </Box>

          <Grid container spacing={3}>
            {services.map((service, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card
                  sx={{
                    height: "100%",
                    borderRadius: theme.borderRadius.lg,
                    border: `1px solid ${quickColors.border.light}`,
                    transition: "all 0.2s ease-in-out",
                    "&:hover": {
                      boxShadow: theme.shadows.md,
                      transform: "translateY(-4px)",
                    },
                  }}
                >
                  <CardContent sx={{ padding: theme.spacing.xl }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: theme.spacing.lg,
                      }}
                    >
                      <Box
                        sx={{
                          backgroundColor: `${quickColors.primary}20`,
                          borderRadius: theme.borderRadius.lg,
                          padding: theme.spacing.md,
                          marginRight: theme.spacing.md,
                        }}
                      >
                        {React.cloneElement(service.icon, {
                          style: {
                            color: quickColors.primary,
                            fontSize: "1.5rem",
                          },
                        })}
                      </Box>
                      <FText
                        size="lg"
                        weight="semibold"
                        color={quickColors.text.primary}
                      >
                        {service.title}
                      </FText>
                    </Box>
                    <FText size="base" color={quickColors.text.secondary}>
                      {service.description}
                    </FText>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Contact Section */}
      <Container maxWidth="lg" sx={{ padding: theme.spacing["2xl"] }}>
        <Box sx={{ textAlign: "center", marginBottom: theme.spacing["2xl"] }}>
          <FText
            size="3xl"
            weight="bold"
            color={quickColors.text.primary}
            sx={{ marginBottom: theme.spacing.md }}
          >
            Entre em Contato
          </FText>
          <FText size="lg" color={quickColors.text.secondary}>
            Estamos prontos para atender você
          </FText>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                textAlign: "center",
                borderRadius: theme.borderRadius.lg,
                padding: theme.spacing.xl,
                border: `1px solid ${quickColors.border.light}`,
              }}
            >
              <LocationOn
                sx={{
                  fontSize: "3rem",
                  color: quickColors.primary,
                  marginBottom: theme.spacing.md,
                }}
              />
              <FText
                size="lg"
                weight="semibold"
                sx={{ marginBottom: theme.spacing.sm }}
              >
                Localização
              </FText>
              <FText size="base" color={quickColors.text.secondary}>
                Taboão da Serra - SP
                <br />
                Atendemos toda a região
              </FText>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card
              sx={{
                textAlign: "center",
                borderRadius: theme.borderRadius.lg,
                padding: theme.spacing.xl,
                border: `1px solid ${quickColors.border.light}`,
              }}
            >
              <Phone
                sx={{
                  fontSize: "3rem",
                  color: quickColors.primary,
                  marginBottom: theme.spacing.md,
                }}
              />
              <FText
                size="lg"
                weight="semibold"
                sx={{ marginBottom: theme.spacing.sm }}
              >
                Telefone
              </FText>
              <FText size="base" color={quickColors.text.secondary}>
                (11) 97515-3372
                <br />
                Atendimento
              </FText>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card
              sx={{
                textAlign: "center",
                borderRadius: theme.borderRadius.lg,
                padding: theme.spacing.xl,
                border: `1px solid ${quickColors.border.light}`,
              }}
            >
              <Email
                sx={{
                  fontSize: "3rem",
                  color: quickColors.primary,
                  marginBottom: theme.spacing.md,
                }}
              />
              <FText
                size="lg"
                weight="semibold"
                sx={{ marginBottom: theme.spacing.sm }}
              >
                Email
              </FText>
              <FText size="base" color={quickColors.text.secondary}>
                contato@neltec.com
                <br />
                Resposta rápida
              </FText>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Footer */}
      <Box
        sx={{
          backgroundColor: quickColors.text.primary,
          color: "white",
          padding: theme.spacing.xl,
          textAlign: "center",
        }}
      >
        <Container maxWidth="lg">
          <FText
            size="base"
            color="white"
            sx={{ marginBottom: theme.spacing.sm }}
          >
            © 2025 Neltec Entulhos - Todos os direitos reservados
          </FText>
          <FText size="sm" sx={{ color: "rgba(255,255,255,0.7)" }}>
            Mais de 15 anos cuidando do meio ambiente e da sua obra
          </FText>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;
