import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Link as MuiLink } from "@mui/material";
import { motion } from "framer-motion";

interface Props {
  inDrawer?: boolean;
}

const NavLinks: React.FC<Props> = ({ inDrawer }) => {
  return (
    <Stack
      direction={inDrawer ? "column" : "row"}
      spacing={2}
      alignItems="center"
    >
      <Link to="/new">
        <MuiLink
          component="span"
          variant="body1"
          underline="hover"
          color="inherit"
        >
          <motion.div initial={{ x: inDrawer ? -500 : 0 }} animate={{ x: 0 }}>
            Add a playing field
          </motion.div>
        </MuiLink>
      </Link>
      <Link to="/review">
        <MuiLink
          component="span"
          variant="body1"
          underline="hover"
          color="inherit"
        >
          <motion.div initial={{ x: inDrawer ? -400 : 0 }} animate={{ x: 0 }}>
            Write a review
          </motion.div>
        </MuiLink>
      </Link>
      <Link to="/auth">
        <motion.div initial={{ x: inDrawer ? -300 : 0 }} animate={{ x: 0 }}>
          <Button variant="outlined">Log In</Button>
        </motion.div>
      </Link>
      <Link to="/auth?q=signup">
        <motion.div initial={{ x: inDrawer ? -200 : 0 }} animate={{ x: 0 }}>
          <Button variant="contained" color="error">
            Sign Up
          </Button>
        </motion.div>
      </Link>
    </Stack>
  );
};

export default NavLinks;
