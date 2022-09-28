import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import imageStudying from "../assets/studying.png";

export const ProfilePage = () => {
  return (
    <Container
      sx={{
        flexGrow: 1,
        backgroundColor: "#FFFFFF",
        paddingTop: 25,
        paddingBottom: 12,
        paddingX: { xs: 5, md: 20 },
      }}
      maxWidth="full"
    >
      <Grid container>
        <Grid sx={{ textAling: "left" }} item xs={12} sm={6}>
          <Typography
            variant="h1"
            sx={{
              fontFamily: "Calibri",
              textTransform: "capitalize",
              fontWeight: "bold",
              color: "primary.main",
              fontSize: 36,
              marginBottom: 4,
            }}
          >
            Desarrollador Front - End Con React JS
          </Typography>

          <Typography
            variant="p"
            sx={{
              fontFamily: "Calibri",
              textTransform: "capitalize",
              fontSize: 18,
              marginBottom: 6,
            }}
          >
            Hoy en dia las empresas contratan personas que son apasionadas por
            su trabajo, que buscan una solución a todo, ese soy yo, revisa mi
            trabajo y contactame, no tienes porque demorarte wey!
          </Typography>
        </Grid>
        <Grid
          sx={{
            textAling: { xs: "center", md: "right" },
            marginTop: { xs: 12, md: 0 },
          }}
          item
          xs={12}
          sm={6}
        >
          <img src={imageStudying} />
        </Grid>
      </Grid>
    </Container>
  );
};
