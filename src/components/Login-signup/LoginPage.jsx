import { Modal, Stack, Typography, Box, Button } from "@mui/material";
import React, { useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./loginSignup.css";
import { fetchLogin, fetchSignup } from "../../Apis/LoginSignupApi";
import { useAuth } from "../../UseContext/AuthorizationProvider";
import { useLocation, useNavigate } from "react-router-dom";
import SignupPage from "./SignupPage";

const closeBtn = {
  "&:hover": {
    cursor: "pointer",
    color: "red",
  },
};

const LoginPage = () => {
  const { signupDetails, logSignDetails, tokenDetails } = useAuth();
  const { handleLoginOpen, handleLoginClose, islogin, logInPagePath } =
    logSignDetails;
  const { email, setEmail, password, setPassword, handleSignupSubmit } =
    signupDetails;

  const { token, setToken } = tokenDetails;

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleLoginSubmit = () => {
    if (email && password) {
      fetchLogin({
        email,
        password,
        appType: "bookingportals",
      }).then((response) => {
        if (response.status === "success") {
          console.log({
            logInPagePath,
          });
          alert("User logged in successfully");
          localStorage.setItem("token", response.token);
          setToken(response.token);
          navigate(logInPagePath);
        }
        handleLoginClose();
        setEmail("");
        setPassword("");
      });
    } else {
      alert("Some field is missing or invalid");
    }
  };

  useEffect(() => {
    if (!token && (pathname === "/login" || pathname === "/")) {
      handleLoginOpen();
    }
  }, []);
  return (
    <div>
      <Modal
        open={islogin}
        onClose={() => {
          handleLoginClose();
          navigate("/");
        }}
        sx={{
          borderColor: "none",
          outline: "none",
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="login-modal">
          <div className="modal-left">
            <img
              src="https://fastui.cltpstatic.com/image/upload/f_auto,q_auto,w_410,h_337,dpr_2/offermgmt/images/slider2.png"
              alt="login-left-photo"
              width={"100%"}
            />
          </div>
          <div className="modal-right">
            <Stack
              flexDirection={"row"}
              justifyContent={"flex-end"}
              alignItems={"flex-end"}
              sx={closeBtn}
              onClick={() => {
                navigate("/");
                handleLoginClose();
              }}
            >
              <CloseIcon />
            </Stack>
            <div className="registration form">
              <header>Login</header>
              <form action="#">
                <input
                  type="text"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <input
                  type="button"
                  className="button"
                  value="Login"
                  onClick={handleLoginSubmit}
                />
              </form>
              <div className="signup">
                <span className="signup">
                  Don't have an account?
                  <label
                    htmlFor="check"
                    onClick={() => {
                      navigate("/signup");
                    }}
                  >
                    Sign up
                  </label>
                </span>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default LoginPage;
