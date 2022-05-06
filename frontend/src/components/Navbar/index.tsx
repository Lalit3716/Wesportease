import React from "react";
import { AppBar } from "@mui/material";
import Toolbar from "./Toolbar";
import Divider from "@mui/material/Divider";

const Navbar: React.FC = () => {
  return (
    <>
      <AppBar
        position="static"
        elevation={0}
        sx={{ bgcolor: "transparent" }}
        color="inherit"
      >
        <Toolbar />
      </AppBar>
      <Divider />
    </>
  );
};

export default Navbar;
