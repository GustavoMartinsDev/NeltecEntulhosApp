import { Box, Container, Grid, Typography, styled } from "@mui/material";
import Neltec from "../../../../assets/images/logoNeltec.png";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";

const Hero = () => {
  const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up("xs")]: {
      // <= mobile
      paddingTop: "100px",
    },
    [theme.breakpoints.up("md")]: {
      // >=mobile
      paddingTop: "0",
    },
  }));

  const StyledImg = styled("img")(({ theme }) => ({
    width: "75%",
    borderRadius: "50%",
    border: `1px solid ${theme.palette.primary.contrastText}`,
  }));

  const handleWhatsApp = () => {
    const url =
      "https://wa.me/5511972147541?text=Olá%20Gustavo,%20interessante%20seu%20portifolio";
    window.open(url, "_blank");
  };

  // const handleEmail = () => {
  //   const subject = encodeURIComponent(
  //     "Olá Gustavo, interessante seu portifolio"
  //   );
  //   const body = encodeURIComponent(
  //     "Olá Gustavo,\n\nInteressante seu portifolio.\n\nAtenciosamente,\n[Seu Nome]"
  //   );
  //   const mailtoLink = `mailto:gustavomartins.developer@gmail.com?subject=${subject}&body=${body}`;
  //   window.open(mailtoLink, "_blank");
  // };

  return (
    <>
      <StyledHero>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
              <Box position="relative">
                <Box position="absolute" width={"150%"} top={-100} right={0}>
                  <AnimatedBackground />
                </Box>
                <Box position="relative" textAlign="center">
                  <StyledImg src={Neltec} />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={7}>
              <Typography
                color="primary.contrastText"
                variant="h1"
                textAlign="center"
                pb={2}
              >
                Neltec Entulhos
              </Typography>
              <Typography
                color="primary.contrastText"
                variant="h4"
                textAlign="center"
              >
                Aluguel de Caçamba Estacionária em Taboão da Serra - Soluções
                rápidas e eficientes para o descarte de entulho.
              </Typography>
              <Grid
                container
                display="flex"
                justifyContent="center"
                spacing={3}
                pt={3}
              >
                {/* <Grid
                  item
                  xs={12}
                  md={4}
                  display="flex"
                  justifyContent="center"
                >
                  <StyledButton>
                    <DownloadIcon />
                    <Typography onClick={handleEmail}>Download CV</Typography>
                  </StyledButton>
                </Grid> */}
                <Grid
                  item
                  xs={12}
                  md={4}
                  display="flex"
                  justifyContent="center"
                >
                  <StyledButton>
                    <WhatsAppIcon />
                    <Typography onClick={handleWhatsApp}>Contate-me</Typography>
                  </StyledButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  );
};

export default Hero;
