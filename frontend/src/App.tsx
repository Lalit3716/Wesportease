import React from "react";
import { Routes, Route } from "react-router";
import { Box } from "@mui/material";
import LandingPage from "./pages/Landing";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
};

export default App;
