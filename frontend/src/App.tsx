import React from "react";
import { Routes, Route } from "react-router";
import LandingPage from "./pages/Landing";
import AuthContext from "./contexts/auth";
import AuthPage from "./pages/Auth";

const App: React.FC = () => {
  return (
    <AuthContext>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </AuthContext>
  );
};

export default App;
