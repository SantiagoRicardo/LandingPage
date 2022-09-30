import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { ArrowOutward, GitHub } from "@mui/icons-material";
import React from "react";
import { projects } from "../database/projects";

export const PortfolioPage = () => {
  return (
    <Container
      sx={{
        flexGrow: 1,
        background:
          "linear-gradient(180deg, rgba(122, 197, 195, 0) 4.48%, #7AC5C3 100%)",
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
        Portafolio
      </Typography>
      {projects.map((projects) => (
        <Box key={projects.id} sx={{ width: "100%" }}>
          <Paper sx={{ margin: 4, padding: 4, borderRadius: 5 }} elevation={24}>
            <Grid
              container
              rowSpacing={2}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item md={6} xs={12}>
                <img className="portfolio" src={projects.image} />
              </Grid>
              <Grid item md={6} xs={12}>
                <Typography
                  variant="h1"
                  sx={{
                    fontFamily: "Calibri",
                    fontSize: 28,
                    fontWeight: "bold",
                    marginBottom: 2,
                  }}
                >
                  {projects.name}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Calibri",
                    fontSize: 16,
                    marginBottom: 2,
                  }}
                >
                  {projects.description}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Calibri",
                    fontSize: 16,
                    fontWeight: "bold",
                    color: "quinternary.main",
                    marginBottom: 6,
                  }}
                >
                  {projects.stack}
                </Typography>
                <Stack spacing={2} direction="row">
                  <Button
                  sx={{
                    borderRadius: 10,
                    backgroundColor: "tertiary.main"
                  }}
                    size="large"
                    variant="contained"
                    startIcon={<ArrowOutward />}
                    href={projects.link_preview}
                    target="_blank"
                  >
                    Vista Previa
                  </Button>

                  <Button
                  sx={{
                    borderRadius: 10,
                    backgroundColor: "primary.main",
                  }}
                    size="large"
                    variant="contained"
                    startIcon={<GitHub />}
                    href={projects.link_github}
                    target="_blank"
                  >
                    GITHUB
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      ))}
    </Container>
  );
};
