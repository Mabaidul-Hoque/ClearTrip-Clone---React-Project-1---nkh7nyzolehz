import { Container, Paper, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const ContactDetails = ({ handleContinue }) => {
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  return (
    <div>
      {/* header */}
      <Stack
        className="contact-details"
        mb={4}
        flexDirection={"row"}
        alignItems={"center"}
        gap={2}
        width={{
          xs: "90vw",
        }}
      >
        <div className="number-circle">
          <span>2</span>
        </div>
        <Stack>
          <Typography sx={{ fontWeight: "500", fontSize: "24px" }}>
            Add contact details
          </Typography>
          <Typography sx={{ fontSize: "12px", fontWeight: "400" }}>
            E-ticket will be sent to this email address and phone number
          </Typography>
        </Stack>
      </Stack>
      {/* inputs container */}
      <Container
        sx={{
          border: "1px solid lightgray",
          borderRadius: "7px",
          width: {
            xs: "90vw",
            md: "60vw",
          },
        }}
      >
        <Stack mt={2} mb={2}>
          <label className="mobile-label" htmlFor="mobile-number">
            Mobile number
          </label>
          <Stack
            flexDirection={"row"}
            gap={{
              xs: 1,
            }}
          >
            <Stack
              p={1}
              border={"1px solid lightgray"}
              borderRadius={"5px"}
              flexDirection={"row"}
              sx={{
                gap: {
                  xs: 1,
                },
                cursor: "pointer",
                width: {
                  xs: "80px",
                  // xl: "4vw",
                },
              }}
            >
              <Typography>+91</Typography>
              <KeyboardArrowDownIcon />
            </Stack>
            <input
              className="mobile-input"
              type="number"
              id="mobile-number"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Stack>

        <button
          className="continue-btn"
          onClick={() => handleContinue(phone, email)}
        >
          Continue
        </button>
      </Container>
    </div>
  );
};

export default ContactDetails;
