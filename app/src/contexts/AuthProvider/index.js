import React, { useEffect, useState } from "react";
import { createContext, useContext } from "react";
import { authenticateService, validateToken } from "../../Services/api";
import { decodeToken } from "react-jwt";

const authContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [isAuth, setIsAuth] = useState();

  useEffect(() => {
    const validate = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        const isValidateToken = await validateToken(token);
        if (isValidateToken) {
          const tokenResult = decodeToken(token);
          setIsAuth(true);
          setUser({ id: tokenResult.id, email: tokenResult.email });
        }
      }
    };
    validate();
  });

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuth(false);
    setUser(null);
  };
  const authenticate = async ({ email, password }) => {
    const response = await authenticateService({ email, password });
    const tokenResult = decodeToken(response.accessToken);
    if (tokenResult.id) {
      setIsAuth(true);
      setUser({ id: tokenResult.id, email: tokenResult.email });
      localStorage.setItem("token", response.accessToken);
      return true;
    }

    return false;
  };
  return (
    <authContext.Provider value={{ user, authenticate, isAuth, logout }}>
      {children}
    </authContext.Provider>
  );
};

const useAuth = () => {
  const use = useContext(authContext);
  return use;
};

// eslint-disable-next-line
export { AuthProvider, useAuth };
