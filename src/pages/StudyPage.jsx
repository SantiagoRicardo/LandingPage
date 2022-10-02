import { Grid, Container, Paper, Typography } from "@mui/material";
import React from "react";

export const StudyPage = () => {
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
        Estudios
      </Typography>
      <Grid container>
        <Grid sx={{ textAlign: "left" }} item xs={12} sm={6}>
          <Paper sx={{ margin: 4, padding: 4, borderRadius: 5 }} elevation={8}>
            <Typography
              variant="h1"
              sx={{
                fontFamily: "Calibri",
                fontWeight: "bold",
                fontSize: 22,
                marginBottom: 2,
              }}
            >
              Desarrollador Front - End Con React JS
            </Typography>
            <Typography
              sx={{
                fontFamily: "Calibri",
              }}
            >
              Fundación Internacional Maria Luisa De Moreno Piraquive
            </Typography>
          </Paper>

          <Paper sx={{ margin: 4, padding: 4, borderRadius: 5 }} elevation={8}>
            <Typography
              variant="h1"
              sx={{
                fontFamily: "Calibri",
                fontWeight: "bold",
                fontSize: 22,
                marginBottom: 2,
              }}
            >
              Ingeniería De Software (Cuarto Semestre)
            </Typography>
            <Typography
              sx={{
                fontFamily: "Calibri",
              }}
            >
              Corporación Universitaria Iberoamericana
            </Typography>
          </Paper>

          <Paper sx={{ margin: 4, padding: 4, borderRadius: 5 }} elevation={8}>
            <Typography
              variant="h1"
              sx={{
                fontFamily: "Calibri",
                fontWeight: "bold",
                fontSize: 22,
                marginBottom: 2,
              }}
            >
              Programacion En PHP
            </Typography>
            <Typography
              sx={{
                fontFamily: "Calibri",
              }}
            >
              Politecnico Gran Colombiano
            </Typography>
          </Paper>
        </Grid>

        <Grid sx={{ textAlign: "left" }} item xs={12} sm={6}>
          <Paper sx={{ margin: 4, padding: 4, borderRadius: 5 }} elevation={8}>
            <Typography
              variant="h1"
              sx={{
                fontFamily: "Calibri",
                fontWeight: "bold",
                fontSize: 22,
                marginBottom: 2,
              }}
            >
              Flutter
            </Typography>
            <Typography
              sx={{
                fontFamily: "Calibri",
              }}
            >
              Semillero Rank CV
            </Typography>
          </Paper>

          <Paper sx={{ margin: 4, padding: 4, borderRadius: 5 }} elevation={8}>
            <Typography
              variant="h1"
              sx={{
                fontFamily: "Calibri",
                fontWeight: "bold",
                fontSize: 22,
                marginBottom: 2,
              }}
            >
              Riesgos En Ciberseguridad
            </Typography>
            <Typography
              sx={{
                fontFamily: "Calibri",
              }}
            >
              Universidad EAFIT
            </Typography>
          </Paper>

          <Paper sx={{ margin: 4, padding: 4, borderRadius: 5 }} elevation={8}>
            <Typography
              variant="h1"
              sx={{
                fontFamily: "Calibri",
                fontWeight: "bold",
                fontSize: 22,
                marginBottom: 2,
              }}
            >
              Google Cloud
            </Typography>
            <Typography
              sx={{
                fontFamily: "Calibri",
              }}
            >
              Google Cloud Computing Foundation
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
