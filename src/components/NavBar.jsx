import * as React from "react";
import LogoImage from "../assets/Logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Menu,
  Toolbar,
  Typography,
} from "@mui/material"; 
import { Link } from "react-scroll";

export const NavBar = () => {
  const [anchorElNav, setAchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAchorElNav(null);  
  };

  return (
    <AppBar
      elevation={0}
      sx={{
        backgroundColor: "white",
        color: "primary.main",
      }}
      position="fixed"
    >
      <Container maxWidth="full">
        <Toolbar>
          {/*Logo y Nombre Escritorio*/}
          <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
            <img className={{ width: 2 }} src={LogoImage} />
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Calibri",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Santiago Ricardo Ramirez
          </Typography>

          {/*Boton De Menu Movil*/}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <Link activeClass="active" smooth spy to="home">
                <Typography
                  sx={{ marginRight: 2, padding: 2, cursor: "pointer" }}
                >
                  Inicio
                </Typography>
              </Link>

              <Link activeClass="active" smooth spy to="profile">
                <Typography
                  sx={{ marginRight: 2, padding: 2, cursor: "pointer" }}
                >
                  Perfil
                </Typography>
              </Link>

              <Link activeClass="active" smooth spy to="study">
                <Typography
                  sx={{ marginRight: 2, padding: 2, cursor: "pointer" }}
                >
                  Estudios
                </Typography>
              </Link>

              <Link activeClass="active" smooth spy to="experience">
                <Typography
                  sx={{ marginRight: 2, padding: 2, cursor: "pointer" }}
                >
                  Experiencia
                </Typography>
              </Link>

              <Link activeClass="active" smooth spy to="portfolio">
                <Typography
                  sx={{ marginRight: 2, padding: 2, cursor: "pointer" }}
                >
                  Portafolio
                </Typography>
              </Link>

              <Link activeClass="active" smooth spy to="study">
                <Typography
                  sx={{ marginRight: 2, padding: 2, cursor: "pointer" }}
                >
                  Contacto
                </Typography>
              </Link>
            </Menu>
          </Box>

          {/*Logo y Nombre Movil*/}
          <Box sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
            <img className={{ width: 2 }} src={LogoImage} />
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "Calibri",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            DevSan
          </Typography>
          <Box sx={{
            cursor: "pointer",
            flex: 1,
            alignItems: "center",
            justifyContent: "end",
            display: { xs: "none", md: "flex"}
          }}
          >
            <Link activeClass="active" smooth spy to="home">
              <Typography sx={{ marginLeft: 6 }}>Inicio</Typography>
            </Link>

            <Link activeClass="active" smooth spy to="profile">
              <Typography sx={{ marginLeft: 6 }}>Perfil</Typography>
            </Link>

            <Link activeClass="active" smooth spy to="study">
              <Typography sx={{ marginLeft: 6 }}>Estudios</Typography>
            </Link>

            <Link activeClass="active" smooth spy to="experience">
              <Typography sx={{ marginLeft: 6 }}>Experiencia</Typography>
            </Link>

            <Link activeClass="active" smooth spy to="portfolio">
              <Typography sx={{ marginLeft: 6 }}>Portafolio</Typography>
            </Link>

            <Link activeClass="active" smooth spy to="contact">
              <Typography sx={{ marginLeft: 6 }}>Contacto</Typography>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
