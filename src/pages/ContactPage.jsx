import { GitHub, Instagram, Twitter, WhatsApp } from "@mui/icons-material";
import { Button, Container, Grid, Typography } from "@mui/material";
import React from "react";

export const ContactPage = () => {
  return (
    <Container
      sx={{
        flexGrow: 1,
        backgroundColor: "primary.main",
        paddingY: 12,
        paddingX: { xs: 5, md: 20 },
      }}
      maxWidth="full"
    >
      <Typography
        variant="h1"
        sx={{
          color: "quinternary.main",
          fontFamily: "Calibri",
          fontSize: 42,
          fontWeight: "bold",
          marginBottom: 6,
          textAlign: "center",
        }}
      >
        Contacto
      </Typography>
      <Grid container>
        <Grid
          sx={{ textAlign: { xs: "center", md: "right" } }}
          item
          xs={12}
          md={6}
        >
          <Button
            sx={{
              m: 2,
              borderRadius: 10,
              backgroundColor: "white",
              color: "blue",
            }}
            size="large"
            variant="contained"
            startIcon={<GitHub />}
            href="https://github.com/SantiagoRicardo"
            target="_blank"
          >
            GitHub
          </Button>

          <Button
            sx={{
              m: 2,
              borderRadius: 10,
              background:
                "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
              color: "blue",
            }}
            size="large"
            variant="contained"
            startIcon={<Instagram />}
            href="https://www.instagram.com/santiago_ricardo5/"
            target="_blank"
          >
            Instagram
          </Button>

          <Button
            sx={{
              m: 2,
              borderRadius: 10,
              backgroundColor: "#1DA1F2",
              color: "blue",
            }}
            size="large"
            variant="contained"
            startIcon={<Twitter />}
            href="https://twitter.com/SantiagoGeek"
            target="_blank"
          >
            Twitter
          </Button>

          <Button
            sx={{
              m: 2,
              borderRadius: 10,
              backgroundColor: "#128C7E",
              color: "blue",
            }}
            size="large"
            variant="contained"
            startIcon={<WhatsApp />}
            href="https://wa.me/573106651486?text=Hola Soy Santiago, Desarrollador Front - End Con React JS, y Desarrollador Flutter"
            target="_blank"
          >
            WhatsApp
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};
