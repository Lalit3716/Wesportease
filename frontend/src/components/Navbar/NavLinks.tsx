import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Stack, Link as MuiLink, Avatar } from "@mui/material";
import { motion } from "framer-motion";
import useAuth from "../../hooks/useAuth";

interface Props {
  inDrawer?: boolean;
}

const NavLinks: React.FC<Props> = ({ inDrawer }) => {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  const onLogout = () => {
    logout();
    navigate("/auth");
  };

  return (
    <Stack
      direction={inDrawer ? "column" : "row"}
      spacing={2}
      alignItems="center"
    >
      {isAuthenticated && (
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
      )}
      {isAuthenticated && (
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
      )}
      {!isAuthenticated && (
        <Link to="/auth">
          <motion.div initial={{ x: inDrawer ? -300 : 0 }} animate={{ x: 0 }}>
            <Button variant="outlined">Log In</Button>
          </motion.div>
        </Link>
      )}
      {!isAuthenticated && (
        <Link to="/auth?q=signup">
          <motion.div initial={{ x: inDrawer ? -200 : 0 }} animate={{ x: 0 }}>
            <Button variant="contained" color="error">
              Sign Up
            </Button>
          </motion.div>
        </Link>
      )}
      {isAuthenticated && (
        <Avatar
          src={`https://avatars.dicebear.com/api/initials/${user.username}.svg`}
        />
      )}
      {isAuthenticated && (
        <motion.div initial={{ x: inDrawer ? -200 : 0 }} animate={{ x: 0 }}>
          <Button variant="contained" color="error" onClick={onLogout}>
            Log Out
          </Button>
        </motion.div>
      )}
    </Stack>
  );
};

export default NavLinks;
