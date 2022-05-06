import React, { useState } from "react";
import {
  Toolbar as MuiToolbar,
  Typography,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import NavLinks from "./NavLinks";
import Drawer from "./Drawer";
import SearchField from "./SearchBar";

const Toolbar: React.FC = () => {
  const isMobile = useMediaQuery("(max-width: 1036px)");
  const showSearch = useMediaQuery("(max-width: 644px)");
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuBtnClk = () => {
    setIsOpen(!isOpen);
  };

  return (
    <MuiToolbar>
      <Typography variant="h4" fontFamily="Koulen, cursive" flexGrow={1}>
        WeSportease
      </Typography>
      {!showSearch && <SearchField />}
      {!isMobile ? (
        <NavLinks />
      ) : (
        <IconButton onClick={handleMenuBtnClk}>
          <Menu fontSize="large" />
        </IconButton>
      )}
      {isOpen && <Drawer onClose={handleMenuBtnClk} showSearch={showSearch} />}
    </MuiToolbar>
  );
};

export default Toolbar;
