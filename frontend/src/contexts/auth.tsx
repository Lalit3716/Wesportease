import React, { createContext, useState, useEffect } from "react";

interface IAuthContext {
  isAuthenticated: boolean;
  user: any;
  login(user: any, token: string, expiresIn: string): void;
  logout(): void;
}

export const authContext = createContext<IAuthContext>({
  isAuthenticated: false,
  user: null,
  login: () => {},
  logout: () => {},
});

const getLocalStorage = (key: string) => {
  return localStorage.getItem(key);
};

const setLocalStorage = (key: string, value: string) => {
  localStorage.setItem(key, value);
};

const isToken = () => {
  const token = getLocalStorage("token");
  if (!token) return;

  const expiresIn = getLocalStorage("expiresIn");
  if (!expiresIn) return;

  const now = new Date().getTime();
  if (now > parseInt(expiresIn)) return;

  return token;
};

let timeout: number;

const AuthContext: React.FC = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    isToken() ? true : false
  );
  const [user, setUser] = useState(getLocalStorage("user"));

  useEffect(() => {
    if (timeout) clearTimeout(timeout);

    if (isAuthenticated) {
      const expiresIn = getLocalStorage("expireIn")!;
      timeout = setTimeout(() => {
        logout();
      }, parseInt(expiresIn) - new Date().getTime());
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, []);

  const login = (user: any, token: string, expiresIn: string) => {
    setUser(user);
    setIsAuthenticated(true);
    setLocalStorage("token", token);
    setLocalStorage("user", JSON.stringify(user));
    setLocalStorage("expiresIn", expiresIn);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    setLocalStorage("token", "");
    setLocalStorage("user", "");
    setLocalStorage("expiresIn", "");
  };

  return (
    <authContext.Provider
      value={{
        isAuthenticated,
        user,
        login,
        logout,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthContext;
