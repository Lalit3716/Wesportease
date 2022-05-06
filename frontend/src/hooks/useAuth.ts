import { useContext } from "react";
import { authContext } from "../contexts/auth";

const useAuth = () => {
  const ctx = useContext(authContext);

  if (ctx === undefined)
    throw new Error("useAuth must be used inside AuthContextProvider");

  return ctx;
};

export default useAuth;
