import React from "react";
import { motion } from "framer-motion";
import { Box, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
import Filters from "../../components/Filters";

interface Props {
  onClose: () => void;
}

const FilterDrawer: React.FC<Props> = ({ onClose }) => {
  return (
    <Box
      height="100%"
      width="100%"
      bgcolor="#fff"
      position="absolute"
      zIndex="999"
    >
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <IconButton onClick={onClose}>
          <Close />
        </IconButton>
        <Filters />
      </motion.div>
    </Box>
  );
};

export default FilterDrawer;
