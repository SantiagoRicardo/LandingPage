import { Grid, Container, Paper, Typography } from "@mui/material";
import React from "react";

export const ExperiencePage = () => {
  return (
    <Container
      sx={{
        flexGrow: 1,
        background: "linear-gradient(180deg, rgba(122, 197, 195, 0) 4.48%, #7AC5C3 100%)",
        paddingY: 12,
        paddingX: { xs: 5, md: 20 },
      }}
      maxWidth="full"
    >
      <Typography
        variant="h1"
        sx={{
          color: "primary.main",
          fontFamily: "Calibri",
          fontSize: 42,
          fontWeight: "bold",
          marginBottom: 6,
          textAlign: "center",
        }}
      >
        Experiencia
      </Typography>
      <Grid container>
        <Grid sx={{ textAlign: "left" }} item xs={12} sm={6}>
          <Paper sx={{ backgroundColor: "primary.main", margin: 4, padding: 4, borderRadius: 5 }} elevation={8}>
            <Typography
              variant="h1"
              sx={{
                fontFamily: "Calibri",
                fontWeight: "bold",
                color: "quinternary.main",
                fontSize: 22,
                marginBottom: 2,
              }}
            >
              Desarrollador Front - End Con React JS
            </Typography>
            <Typography
              sx={{
                fontFamily: "Calibri",
                color: "#FFFFFF",
              }}
            >
              Carrera Universitaria En Ingenieria De Software
            </Typography>
          </Paper>

          

          <Paper sx={{ backgroundColor: "primary.main", margin: 4, padding: 4, borderRadius: 5 }} elevation={8}>
            <Typography
              variant="h1"
              sx={{
                fontFamily: "Calibri",
                fontWeight: "bold",
                color: "quinternary.main",
                fontSize: 22,
                marginBottom: 2,
              }}
            >
              Desarrollador Front - End Con React JS
            </Typography>
            <Typography
              sx={{
                fontFamily: "Calibri",
                color: "#FFFFFF",
              }}
            >
              Carrera Universitaria En Ingenieria De Software
            </Typography>
          </Paper>
        </Grid>

        <Grid sx={{ textAlign: "left" }} item xs={12} sm={6}>
          <Paper sx={{ backgroundColor: "primary.main", margin: 4, padding: 4, borderRadius: 5 }} elevation={8}>
            <Typography
              variant="h1"
              sx={{
                fontFamily: "Calibri",
                fontWeight: "bold",
                color: "quinternary.main",
                fontSize: 22,
                marginBottom: 2,
              }}
            >
              Desarrollador Front - End Con React JS
            </Typography>
            <Typography
              sx={{
                fontFamily: "Calibri",
                color: "#FFFFFF",
              }}
            >
              Carrera Universitaria En Ingenieria De Software
            </Typography>
          </Paper>

          <Paper sx={{ backgroundColor: "primary.main", margin: 4, padding: 4, borderRadius: 5 }} elevation={8}>
            <Typography
              variant="h1"
              sx={{
                fontFamily: "Calibri",
                fontWeight: "bold",
                color: "quinternary.main",
                fontSize: 22,
                marginBottom: 2,
              }}
            >
              Desarrollador Front - End Con React JS
            </Typography>
            <Typography
              sx={{
                fontFamily: "Calibri",
                color: "#FFFFFF",
              }}
            >
              Carrera Universitaria En Ingenieria De Software
            </Typography>
          </Paper>

          
        </Grid>
      </Grid>
    </Container>
  );
};
