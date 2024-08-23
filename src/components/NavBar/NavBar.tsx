import { AppBar, MenuItem, Toolbar, styled } from "@mui/material";

const NavBar = () => {
  const StyledToobar = styled(Toolbar)(() => ({
    display: "flex",
    justifyContent: "space-evenly",
  }));

  return (
    <>
      <AppBar position="absolute">
        <StyledToobar>
          <MenuItem>Sobre</MenuItem>
          <MenuItem>Atuação</MenuItem>
          <MenuItem>Região</MenuItem>
        </StyledToobar>
      </AppBar>
    </>
  );
};

export default NavBar;
