import { Modal, Stack, Typography, Box, Button } from "@mui/material";
import React, { useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./loginSignup.css";
import { fetchSignup } from "../../Apis/LoginSignupApi";
import { useAuth } from "../../UseContext/AuthorizationProvider";
import { useNavigate } from "react-router-dom";

const closeBtn = {
  "&:hover": {
    cursor: "pointer",
    color: "red",
  },
};

const SignupPage = () => {
  const { signupDetails, logSignDetails, tokenDetails } = useAuth();
  const { handleLoginOpen, handleLoginClose, islogin } = logSignDetails;
  const { name, setName, email, setEmail, password, setPassword } =
    signupDetails;

  const { token, setToken } = tokenDetails;

  const navigate = useNavigate();

  const handleSignupSubmit = () => {
    if (name && email && password) {
      fetchSignup({
        name,
        email,
        password,
        appType: "bookingportals",
      }).then((response) => {
        if (response.status === "success") {
          alert("User registered successfully");
          localStorage.setItem("token", response.token);
          setToken(response.token);
          navigate("/login");
        }
        setName("");
        setEmail("");
        setPassword("");
      });
    } else {
      alert("Some field is missing or invalid");
    }
  };

  return (
    <div>
      <Modal
        open={islogin}
        onClose={handleLoginClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="login-modal">
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
              <header>Signup</header>
              <form action="#">
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <input
                  type="button"
                  className="button"
                  value="Signup"
                  onClick={handleSignupSubmit}
                />
              </form>
              <div className="signup">
                <span className="signup">
                  Already have an account?
                  <label
                    htmlFor="check"
                    onClick={() => {
                      navigate("/login");
                    }}
                  >
                    Login
                  </label>
                </span>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default SignupPage;
