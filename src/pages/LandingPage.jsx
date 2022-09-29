import { Box } from "@mui/material";
import React from "react";
import {
  HomePage,
  ProfilePage,
  StudyPage,
  ExperiencePage,
  PortfolioPage,
  ContactPage,
} from "./";

export const LandingPage = () => {
  return (
    <Box>
      <Box>
        <HomePage id="home"/>
      </Box>

      <Box>
        <ProfilePage id="profile"/>
      </Box>

      <Box>
        <StudyPage id="study"></StudyPage>
      </Box>

      <Box>
        <ExperiencePage id="experience"/>
      </Box>

      <Box>
        <PortfolioPage id="portfolio"/>
      </Box>

      <Box>
        <ContactPage id="contact"/>
      </Box>
    </Box>
  );
};
