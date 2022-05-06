import React from "react";
import { createPortal } from "react-dom";
import { Box, IconButton, Stack } from "@mui/material";
import { Close } from "@mui/icons-material";
import { motion } from "framer-motion";
import NavLinks from "./NavLinks";
import SearchField from "./SearchBar";

interface Props {
  showSearch?: boolean;
  onClose: () => void;
}

const Drawer: React.FC<Props> = ({ onClose, showSearch }) => {
  console.log(showSearch);
  return createPortal(
    <Box
      bgcolor="white"
      position="fixed"
      zIndex={999}
      width="100%"
      height="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <motion.div
        initial={{ opacity: 0, backgroundColor: "transparent" }}
        animate={{ opacity: 1, backgroundColor: "#fff" }}
        exit={{ opacity: 0, backgroundColor: "transparent" }}
      >
        <IconButton
          onClick={onClose}
          sx={{ position: "absolute", top: 10, right: 10 }}
        >
          <Close fontSize="large" />
        </IconButton>
        <Stack spacing={1}>
          {showSearch && <SearchField />}
          <NavLinks inDrawer />
        </Stack>
      </motion.div>
    </Box>,
    document.getElementById("drawer-container")!
  );
};

export default Drawer;
