import styled from "@emotion/styled";
import { Button, Paper, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { useFlightResult } from "../../../../../UseContext/FlightResultProvider";
import { useFlightSearch } from "../../../../../UseContext/FlightsSearchProvider";

const CustomPaper = styled(Paper)({
  width: "20vw",
  height: "55vh",

  borderTop: "1px solid lightgray",
  borderLeft: "1px solid lightgray",
  borderRight: "1px solid lightgray",
  borderRadius: "10px",
});
const FlightPriceCard = () => {
  const { singleFlight } = useFlightSearch().singleFlightValue;

  return (
    <div id="price-cards">
      {/* main price card */}
      <CustomPaper>
        <div style={{ padding: "20px" }}>
          <Stack
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Box>
              <Typography color={"red"} fontWeight={"500"}>
                1 seat left
              </Typography>
              <Typography mt={1} mb={1} fontSize={"18px"} fontWeight={"600"}>
                Total price
              </Typography>
              <Typography>1 adult</Typography>
            </Box>
            <Stack
              flexDirection={"row"}
              alignItems={"center "}
              fontSize={"25px"}
              fontWeight={"500"}
            >
              <CurrencyRupeeIcon fontSize="sm" />
              <span>{singleFlight.ticketPrice}</span>
            </Stack>
          </Stack>

          <Box mt={3} mb={3} sx={{ borderBottom: "1px dotted #E6E6E6" }}></Box>

          <Stack>
            <div className="fare">
              <Typography>Base fare(1traveller)</Typography>
              <Stack
                flexDirection={"row"}
                alignItems={"center "}
                //   fontSize={"25px"}
                //   fontWeight={"500"}
              >
                <CurrencyRupeeIcon fontSize="sm" />
                <span>{Math.ceil(singleFlight.ticketPrice * 0.8)}</span>
              </Stack>
            </div>
            <div className="fare">
              <Typography>Taxes and fees</Typography>
              <Stack
                flexDirection={"row"}
                alignItems={"center "}
                // fontSize={"25px"}
                // fontWeight={"500"}
              >
                <CurrencyRupeeIcon fontSize="sm" />
                <span>{Math.ceil(singleFlight.ticketPrice * 0.15)}</span>
              </Stack>
            </div>
            <div className="fare">
              <Typography>Discounts</Typography>
              <Stack
                flexDirection={"row"}
                alignItems={"center "}
                // fontSize={"25px"}
                // fontWeight={"500"}
              >
                <CurrencyRupeeIcon fontSize="sm" />
                <span>{Math.ceil(singleFlight.ticketPrice * 0.05)}</span>
              </Stack>
            </div>
          </Stack>
        </div>

        <Typography
          bgcolor={"#FFF1EC"}
          height={"15.3vh"}
          fontSize={14}
          pt={2}
          textAlign={"left"}
          pl={3}
          pr={3}
        >
          Pay om 3 interest free EMIs At <CurrencyRupeeIcon fontSize="sm" />
          4,095/mo
          <Button variant="text">View plans</Button>
          with your credit card
        </Typography>
      </CustomPaper>
    </div>
  );
};

export default FlightPriceCard;
