import { Box, Container, Typography } from "@mui/material";
import LogoImage from "../assets/Logo.png";

export const Footer = () => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "secondary.main",
        paddingY: 2,
        paddingX: { xs: 5, md: 20 },
      }}
      maxWidth="full"
    >
      <Box>
        
        <Typography
          variant="h6"
          component="a"
          href="/"
          sx={{
              mt: 1,
              ml: 2,
              display: "flex",
              fontFamily: "Calibri",
              fontWeight: 700,
              color: "white",
              textDecoration: "none",
          }}
        >
           Santiago Ricardo Ramirez
        </Typography>
      </Box>
    </Container>
  );
};
