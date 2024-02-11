import { Box, Paper, Stack, Typography } from "@mui/material";
import React, { useState } from "react";

const FareSelection = ({ singleFlight }) => {
  return (
    <Box
      width={{
        xs: "90vw",
        md: "60vw",
      }}
    >
      <Typography
        fontSize={{
          xs: "24px",
        }}
      >
        Select your fare
      </Typography>
      <Stack flexDirection={"row"} gap={2}>
        {/* fare type 1 */}
        <Box
          sx={{
            width: {
              xs: "42vw",
              md: "20vw",
            },
            height: "40vh",
            border: "1px solid lightgray",
            p: 2,
            "&:hover": {
              cursor: "pointer",
            },
          }}
        >
          <Stack mb={4}>
            <Typography>Standard fare </Typography>
            <Typography>₹{singleFlight.ticketPrice}</Typography>
          </Stack>
          <Typography
            fontSize={{
              xs: "14px",
            }}
          >
            Standard airline cancellation and date change penalties apply
          </Typography>
        </Box>
        {/* fare type 2 */}
        <Box
          sx={{
            width: {
              xs: "42vw",
              md: "20vw",
            },
            height: "40vh",
            border: "1px solid lightgray",
            p: 2,
            "&:hover": {
              cursor: "pointer",
            },
          }}
        >
          <Stack mb={4}>
            <Typography>Standard fare </Typography>
            <Typography>
              ₹{singleFlight?.ticketPrice} + ₹
              {Math.ceil(singleFlight?.ticketPrice * 0.2)}{" "}
            </Typography>
          </Stack>
          <Typography
            fontSize={{
              xs: "14px",
            }}
          >
            Standard airline cancellation and date change penalties apply
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default FareSelection;
