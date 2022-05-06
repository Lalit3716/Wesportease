import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import {
  Stack,
  Divider,
  Container,
  Typography,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import Filters from "../../components/Filters";
import FilterDrawer from "../../components/Filters/FilterDrawer";

const LandingPage = () => {
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 580px)");

  const getGeoLocation = async () => {
    return new Promise((res, rej) => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(position => {
          const pos = {
            x: position.coords.latitude,
            y: position.coords.longitude,
          };
          return res(pos);
        });
      } else {
        return res({ x: 0, y: 0 });
      }
    });
  };

  return (
    <>
      <Navbar />
      <Divider />
      <Stack direction="row">
        {!isMobile ? (
          <Filters />
        ) : (
          <IconButton onClick={() => setOpen(true)}>
            <Menu />
          </IconButton>
        )}
        {open && <FilterDrawer onClose={() => setOpen(false)} />}
        <Container sx={{ p: 3 }}>
          <Typography variant="h5">Landing Page</Typography>
        </Container>
      </Stack>
    </>
  );
};

export default LandingPage;
