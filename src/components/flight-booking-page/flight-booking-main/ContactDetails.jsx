import {
  Container,
  Box,
  Modal,
  Button,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

import PaymentGateway from "../../ui/PaymentGateway";
import { ToastContainer, toast } from "react-toastify";
import { useAuth } from "../../../contexts/AuthorizationProvider";
import { useFlightSearch } from "../../../contexts/FlightsSearchProvider";
import CountryCodeDropdown from "../../ui/CountryCodeDropdown";

const ContactDetails = ({ flightId }) => {
  const [phone, setPhone] = useState();
  const [open, setOpen] = useState(false);
  const { token } = useAuth().tokenDetails;
  const { departDate } = useFlightSearch().departvalue;
  const { returnDate } = useFlightSearch().returnValue;

  const handleOpen = () => {
    console.log("handleOpen");
    if (phone?.length === 10) {
      if (token) {
        setOpen(true);
      } else {
        toast.error("For payment you have to log in!", { theme: "colored" });
      }
    } else {
      console.log("handleOpen else ");
      toast.error("Phone number is invalid!", { theme: "colored" });
    }
  };
  const handleClose = () => {
    setOpen(false);
  };

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
              border={"1px solid lightgray"}
              borderRadius={"5px"}
              flexDirection={"row"}
              justifyContent={"center"}
              sx={{
                gap: {
                  xs: 1,
                },
                cursor: "pointer",
                minWidth: "6rem",
              }}
            >
              <CountryCodeDropdown />
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

        <Stack mb={2}>
          <label className="email-label" htmlFor="email">
            Email address
          </label>
          <input
            className="email-input"
            type="email"
            id="email"
            placeholder="Enter your email address"
            value={JSON.parse(localStorage.getItem("userDetails"))?.email}
            disabled="true"
            required
          />
        </Stack>

        {/* Add Guests */}
        <Stack sx={{ mb: 2 }}>
          <h3>Guests details</h3>
          <Button
            variant="outlined"
            sx={{ textTransform: "none", my: 4, width: "20%" }}
            // onClick={handleOpen}
          >
            Add new guest
          </Button>
        </Stack>

        <button className="continue-btn" onClick={handleOpen}>
          Continue to payment
        </button>

        <PaymentGateway
          open={open}
          handleClose={handleClose}
          booingId={flightId}
          startDate={departDate}
          endDate={returnDate}
        />
      </Container>
    </div>
  );
};

export default ContactDetails;
