import { Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import imageLogo from "../assets/MyBitmoji.png";

export const HomePage = () => {
  return (
    <Container
      sx={{
        flexGrow: 1,
        background:"linear-gradient(141.37deg, #FFFFFF 23.78%, #008F8C 150.47%)",
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
              fontSize: 46,
            }}
          >
            Hola que tal?👌soy Santiago
          </Typography>

          <Typography
            variant="h1"
            sx={{
              fontFamily: "Calibri",
              textTransform: "capitalize",
              fontWeight: "bold",
              color: "tertiary.main",
              fontSize: 46,
              marginBottom: 2,
            }}
          >
            Sabias que...?
          </Typography>

          <Typography
            variant="p"
            sx={{
              fontFamily: "Calibri",
              textTransform: "capitalize",
              fontSize: 26,
              marginBottom: 6,
            }}
          >
            Me apasiona lo que hago, disfruto estar en mi computador
            codificando. ¡uaaa! ¡uaaa!
          </Typography>
          <Button
            sx={{ borderRadius: 10 }}
            href="https://github.com/SantiagoRicardo"
            target="_blank"
            size="large"
            variant="outlined"
            startIcon={<GitHubIcon />}
          >
            Perfil De GitHub
          </Button>
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
          
          <img src={imageLogo} />

        </Grid>
      </Grid>
    </Container>
  );
};
