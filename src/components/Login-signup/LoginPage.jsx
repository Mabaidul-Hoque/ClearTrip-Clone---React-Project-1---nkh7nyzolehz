import { Modal, Stack } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./loginSignup.css";
import { fetchLogin } from "../../Apis/LoginSignupApi";
import { useAuth } from "../../UseContext/AuthorizationProvider";
import SignupPage from "./SignupPage";
import { ToastContainer, toast } from "react-toastify";

const closeBtn = {
  "&:hover": {
    cursor: "pointer",
    color: "red",
  },
};

const LoginPage = () => {
  const { signupDetails, logSignDetails, tokenDetails } = useAuth();
  const { handleLoginClose, islogin } = logSignDetails;
  const { email, setEmail, password, setPassword, setIsSignup, isSignup } = signupDetails;
  const { setToken } = tokenDetails;

  const handleLoginSubmit = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(email) && password) {
      fetchLogin({ email, password, appType: "bookingportals" })
        .then((response) => {
          if (response.status === "success") {
            notify("You have logged in successfully");
            localStorage.setItem("token", response.token);
            setToken(response.token);
            localStorage.setItem("userEmail", response?.data?.email);
            handleLoginClose();
          } else {
            notify("You don't have an accoount , create one!");
          }
          setEmail("");
          setPassword("");
      });
    } else if (email && !regex.test(email)) {
      notify("Email is invalid!");
    } else {
      notify("Some fields are missing or invalid!");
    }
  };
  const notify = (text) => toast(text);

  return (
    <div>
      {isSignup ? (
        <SignupPage />
      ) : (
        <Modal
          open={islogin}
          onClose={handleLoginClose}
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
                  handleLoginClose();
                  setIsSignup(false);
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
                    required
                  />
                  <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
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
                    <label htmlFor="check" onClick={() => setIsSignup(true)}>
                      Sign up
                    </label>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}

      <ToastContainer theme="dark" />
    </div>
  );
};

export default LoginPage;
