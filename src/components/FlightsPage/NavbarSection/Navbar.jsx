import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./NavbarStyles.css";
import { OffersContext } from "../../../UseContext/OfferDetailsProvider";
import { Box, Button, Stack, ThemeProvider } from "@mui/material";
import LoginPage from "../../Login-signup/LoginPage";
import { useAuth } from "../../../UseContext/AuthorizationProvider";
import styled from "@emotion/styled";
import { theme } from "../../../util/muiTheme";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginButton = styled(Button)({
  color: "#FFFFFF",
  textTransform: "none",
  backgroundColor: "#3366CC",
  width: {
    xs: "12vw",
    sm: "9.5vw",
  },
  lineHeight: 2.5,
  padding: "3px",
  border: "none",
  borderRadius: "5px",
  fontSize: "14px",
  fontWeight: "500",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "#254EAF",
  },
});

const Navbar = ({ handleLoginOpen }) => {
  const { setOffersUrlFilter } = useContext(OffersContext);
  const { tokenDetails, handleLogout, signupDetails } = useAuth();
  const { token } = tokenDetails;
  const { setIsSignup } = signupDetails;

  return (
    <div>
      <Box className="home-navbar" pt={2} pb={2} component="div">
        <Stack
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Link
            onClick={() => {
              setOffersUrlFilter("ALL");
            }}
            to="/"
          >
            <img
              className="cleartrip-logo"
              src="https://careers.cleartrip.com/images/cleartrip/footer-logo.svg"
              alt="cleartrip-logo"
            />
          </Link>
          <Box>
            <LoginButton
              onClick={() => {
                setIsSignup(false);
                token ? handleLogout() : handleLoginOpen();
              }}
              variant="contained"
            >
              {token ? "Log out" : "Log in / Sign up"}
            </LoginButton>
          </Box>
        </Stack>
        <LoginPage />
      </Box>
    </div>
  );
};

export default Navbar;
