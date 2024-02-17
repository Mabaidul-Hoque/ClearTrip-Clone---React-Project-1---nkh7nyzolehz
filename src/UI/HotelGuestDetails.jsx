import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const courtesyTitlesList = ["Mr.", "Mrs.", "Ms."];
const HotelGuestDetails = () => {
  const [index, setIndex] = useState(0);
  return (
    <>
      <Typography variant="h4" mt={4} mb={2}>
        Guest details
      </Typography>
      <ul className="courtesy-titles-list">
        {courtesyTitlesList.map((item, indx) => (
          <li
            key={item + indx}
            className={index === indx ? "active-list" : ""}
            onClick={() => {
              setIndex(indx);
              console.log("index", indx);
            }}
          >
            {item}
          </li>
        ))}
      </ul>

      <Stack flexDirection={"row"} mt={2}>
        <TextField type="text" id="f-name" label="First name" />
        <TextField type="text" id="l-name" label="Last name" />
      </Stack>

      <Typography mt={2} mb={2}>
        Booking details will be sent to this number and email address
      </Typography>
      <Stack flexDirection={"row"} mt={2}>
        <Box>
          {/* ph number country code */}
          <TextField type="number" id="ph-numb" label="Enter mobile number" />
        </Box>
        <TextField type="email" id="email" label="Email address" />
      </Stack>

      <Typography variant="h4">Other guests</Typography>
      <Typography>
        You may be required to show name of all guests for Visa purpose
      </Typography>
      <ul className="add-other-guests">
        {/* map all the added guest */}

        <Button variant="outlined">Add new guest</Button>
      </ul>
    </>
  );
};

export default HotelGuestDetails;
