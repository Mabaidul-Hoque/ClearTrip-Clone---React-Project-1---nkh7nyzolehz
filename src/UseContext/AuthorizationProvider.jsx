import React, { createContext, useContext, useState } from "react";
import { fetchSignup } from "../Apis/LoginSignupApi";
import { useLocation, useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("AuthContext is undefined");
  }
  return context;
};
const AuthorizationProvider = ({ children }) => {
  const [islogin, setIsLogin] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [logInPagePath, setLogInPagePath] = useState("/");

  const handleLoginClose = () => {
    setIsLogin(false);
  };
  const handleLoginOpen = () => {
    setIsLogin(true);
  };

  const handleLogout = () => {
    if (token) {
      localStorage.removeItem("token");
      setToken("");
    }
  };

  const authValues = {
    signupDetails: {
      name,
      setName,
      email,
      setEmail,
      password,
      setPassword,
    },
    logSignDetails: {
      handleLoginOpen,
      handleLoginClose,
      islogin,
      logInPagePath,
      setLogInPagePath,
    },
    tokenDetails: {
      token,
      setToken,
    },
    handleLogout,
  };
  return (
    <AuthContext.Provider value={authValues}>{children}</AuthContext.Provider>
  );
};

export default AuthorizationProvider;
