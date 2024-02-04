import React from "react";
import "../FlightBookingPage.css";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import { Box, Button, Stack } from "@mui/material";
import styled from "@emotion/styled";

const CustomButton = styled(Button)({
  variant: "text",
  textTransform: "none",
  fontsize: "16px",
});
const FlightBookingNavbar = () => {
  return (
    <Stack
      className="flight-booking-navabr"
      flexDirection={"row"}
      justifyContent={"space-between"}
      mt={2}
    >
      <img
        className="cleartrip-logo"
        src="https://careers.cleartrip.com/images/cleartrip/footer-logo.svg"
        alt="cleartrip-logo"
      />

      <CustomButton>
        <AccountCircleSharpIcon fontsize="sm" />
        <span style={{ marginLeft: "3px" }}>My account</span>
      </CustomButton>
    </Stack>
  );
};

export default FlightBookingNavbar;
