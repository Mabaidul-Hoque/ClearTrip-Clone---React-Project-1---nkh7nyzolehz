import { Box, Button, Stack } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import styled from "@emotion/styled";
import { useAuth } from "../../UseContext/AuthorizationProvider";

const ProlieButton = styled(Button)({
  textTransform: "none",
  color: "gray",
});
const MytripNavbar = ({ token, handleLoginOpen }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const { handleLogout } = useAuth();
  const {setIsSignup} = useAuth().signupDetails;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box className="mytrip-navbar" pt={2} pb={2}>
      {/* cleartrip logo  */}
      <Link to="/">
        <img
          className="cleartrip-logo"
          src="https://careers.cleartrip.com/images/cleartrip/footer-logo.svg"
          alt="cleartrip-logo"
        />
      </Link>
      {/* profile section */}

      <ProlieButton
        className="mytrip-profile"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <AccountCircleRoundedIcon htmlColor="gray" />
        <span style={{ fontSize: "14px" }}>Your trips</span>
        <ArrowDropDownRoundedIcon htmlColor="gray" />
      </ProlieButton>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {token ? (
          <>
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>
              <Button onClick={handleLogout}>Logout</Button>
            </MenuItem>
          </>
        ) : (
          <>
            <MenuItem 
                autoFocus="false"
                sx={{display: "flex", flexDirection: "column",cursor: "default", 
                    "&:hover": {backgroundColor: "white"}}} 
                onClick={handleClose}>
              <Button
                onClick={handleLoginOpen}
                variant="contained"
                sx={{ textTransform: "none", mb: 2}}
              >
                Sign in
              </Button> 
              <p>New here? <Button onClick ={() => setIsSignup(true)} sx={{textTransform: "none"}} >Register</Button></p>
            </MenuItem>
          </>
        )}
      </Menu>

      {/* <Button
            onClick={() => {
              setIsSignup(false);
              token ? handleLogout() : handleLoginOpen();
            }}
            variant="contained"
          >
            {token ? "Log out" : "Log in / Sign up"}
          </Button> */}
    </Box>
  );
};

export default MytripNavbar;
