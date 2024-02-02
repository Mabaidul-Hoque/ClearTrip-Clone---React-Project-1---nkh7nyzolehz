import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./NavbarStyles.css";
import { OffersContext } from "../../../UseContext/OffersUrlProvider";
import { Box, Typography, Button, Stack } from "@mui/material";

import { useFlightSearch } from "../../../UseContext/FlightsSearchProvider";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SignupPage from "../../Login-signup/SignupPage";
import LoginPage from "../../Login-signup/LoginPage";
import { useAuth } from "../../../UseContext/AuthorizationProvider";
import styled from "@emotion/styled";
// import { useAuth } from "../../UseContext/AuthorizationProvider";

// const leftLogoUrl = "../../../public/assets/Cleartrip_Original.svg.png";

const LoginButton = styled("button")({
  color: "#FFFFFF",
  textTransform: "none",
  backgroundColor: "#3366CC",
  width: "9.5vw",
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

  const { tokenDetails, handleLogout, logSignDetails } = useAuth();
  const { token, setToken } = tokenDetails;
  const { setLogInPagePath } = logSignDetails;

  const { pathname } = useLocation();

  const navigate = useNavigate();

  return (
    <Box
      sx={{ width: "93%", margin: "auto" }}
      pt={2}
      pb={2}
      pr={4}
      component="div"
    >
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

        <LoginButton
          onClick={() => {
            pathname === "/flights"
              ? setLogInPagePath("/flights")
              : setLogInPagePath("/hotels");
            token ? handleLogout() : handleLoginOpen();
            token ? navigate("/") : navigate("/login");
          }}
          variant="contained"
        >
          {token ? "Log out" : "Log in / Sign up"}
        </LoginButton>
      </Stack>
      <LoginPage />
    </Box>
  );
};

export default Navbar;
