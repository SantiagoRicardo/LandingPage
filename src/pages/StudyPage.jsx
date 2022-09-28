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
              Carrera Universitaria En Ingenieria De Software
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
              Desarrollador Front - End Con React JS
            </Typography>
            <Typography
              sx={{
                fontFamily: "Calibri",
              }}
            >
              Carrera Universitaria En Ingenieria De Software
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
              Desarrollador Front - End Con React JS
            </Typography>
            <Typography
              sx={{
                fontFamily: "Calibri",
              }}
            >
              Carrera Universitaria En Ingenieria De Software
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
              Desarrollador Front - End Con React JS
            </Typography>
            <Typography
              sx={{
                fontFamily: "Calibri",
              }}
            >
              Carrera Universitaria En Ingenieria De Software
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
              Desarrollador Front - End Con React JS
            </Typography>
            <Typography
              sx={{
                fontFamily: "Calibri",
              }}
            >
              Carrera Universitaria En Ingenieria De Software
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
              Desarrollador Front - End Con React JS
            </Typography>
            <Typography
              sx={{
                fontFamily: "Calibri",
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
