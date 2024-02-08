import { Container, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const ContactDetails = ({ handleContinue }) => {
  return (
    <div>
      <Stack
        className="details-two"
        mb={4}
        flexDirection={"row"}
        alignItems={"center"}
        gap={2}
      >
        <div className="number-circle">
          <span>2</span>
        </div>
        <Stack>
          <h1 style={{ fontWeight: "500" }}>Add contact details</h1>
          <h5 style={{ fontSize: "12px", fontWeight: "400" }}>
            E-ticket will be sent to this email address and phone number
          </h5>
        </Stack>
      </Stack>

      <Container sx={{ border: "1px solid lightgray", borderRadius: "7px" }}>
        <Stack mt={2} mb={2}>
          <label className="mobile-label" htmlFor="mobile-number">
            Mobile number
          </label>
          <Stack flexDirection={"row"} justifyContent={"space-between"}>
            <Stack
              width={80}
              p={1}
              border={"1px solid lightgray"}
              borderRadius={"5px"}
              flexDirection={"row"}
              justifyContent={"space-between"}
              sx={{ cursor: "pointer" }}
            >
              <Typography>+91</Typography>
              <KeyboardArrowDownIcon />
            </Stack>
            <input
              className="mobile-input"
              type="number"
              id="mobile-number"
              placeholder="Enter your phone number"
            />
          </Stack>
        </Stack>

        <Stack mb={6}>
          <label className="email-label" htmlFor="email">
            Email address
          </label>
          <input
            className="email-input"
            type="email"
            id="email"
            placeholder="Enter your email address"
          />
        </Stack>

        <button className="continue-btn" onClick={handleContinue}>
          Continue
        </button>
      </Container>
    </div>
  );
};

export default ContactDetails;
