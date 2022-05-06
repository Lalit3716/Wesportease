import React from "react";
import { AppBar } from "@mui/material";
import Toolbar from "./Toolbar";

const Navbar: React.FC = () => {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{ bgcolor: "transparent" }}
      color="inherit"
    >
      <Toolbar />
    </AppBar>
  );
};

export default Navbar;
