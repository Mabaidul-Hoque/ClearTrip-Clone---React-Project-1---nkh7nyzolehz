import { Modal, Stack, Box } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./loginSignup.css";
import { fetchSignup } from "../../Apis/LoginSignupApi";
import { useAuth } from "../../UseContext/AuthorizationProvider";
import { toast } from "react-toastify";

const closeBtn = {
  "&:hover": {
    cursor: "pointer",
    color: "red",
  },
};

const SignupPage = () => {
  const { signupDetails, logSignDetails, tokenDetails } = useAuth();
  const { handleLoginClose, islogin } = logSignDetails;
  const { name, setName, email, setEmail, password, setPassword,isSignup, setIsSignup } = signupDetails;
  const { setToken } = tokenDetails;

  const handleSignupSubmit = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (name && regex.test(email) && password) {
      fetchSignup({ name, email, password, appType: "bookingportals" })
        .then((response) => {
          if (response.status === "success") {
            notify("You have registered successfully");
            localStorage.setItem("token", response.token);
            localStorage.setItem("userDetails", JSON.stringify(response?.data?.user));
            setToken(response.token);
            handleSignupClose();
            handleLoginClose();
          } else {
            notify("Already you have an accoount , login please");
          }
          setName("");
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

  const handleSignupClose = () => {
    setIsSignup(false);
  }
  return (
    <div>
      <Modal
        open={isSignup}
        onClose={() => {
          handleSignupClose();
          handleLoginClose();
        }}
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
                handleSignupClose();
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
                  required
                />
                <input
                  type="text"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  type="password"
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
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
                  <label htmlFor="check" onClick={() => setIsSignup(false)}>
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
