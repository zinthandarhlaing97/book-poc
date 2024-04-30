import { AppBar, Container, Toolbar, alpha, useTheme } from "@mui/material";
import Logo from "./Logo";

const Header = () => {
  const theme = useTheme();

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: alpha(theme.palette.background.default, 0.75),
          backdropFilter: "blur(8px)",
          borderBottom: "1px solid",
          borderColor: "divider",
        }}
      >
        <Container>
          <Toolbar
            disableGutters
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(2, 1fr)",
                md: "1fr 2fr 1fr",
              },
              gap: 2,
              justifyItems: "start",
            }}
          >
            <Logo />
          </Toolbar>
        </Container>
      </AppBar>

      <Toolbar />
    </>
  );
};

export default Header;
