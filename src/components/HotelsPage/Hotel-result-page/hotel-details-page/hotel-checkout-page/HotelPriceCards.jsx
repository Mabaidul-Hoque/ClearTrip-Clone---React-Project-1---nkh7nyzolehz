import styled from "@emotion/styled";
import { Button, Paper, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React, { useRef } from "react";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

const CustomPaper = styled(Paper)({
  width: "18rem",
  height: "55vh",
  position: "sticky",
  top: "40px",
  borderTop: "1px solid lightgray",
  borderLeft: "1px solid lightgray",
  borderRight: "1px solid lightgray",
  borderRadius: "10px",
});

const HotelPriceCards = ({ singleHotel }) => {
  const singelRoom = useRef(JSON.parse(localStorage.getItem("room")));
  console.log("singleHotel", singleHotel);
  console.log("room", JSON.parse(localStorage.getItem("room")));
  return (
    <>
      <CustomPaper>
        <div style={{ padding: "20px" }}>
          <Typography variant="h5">Price breakup</Typography>
          <Stack
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            {/* room and night : room from addroom and night day diffenece between checkin and checkout date */}
            <Typography>1 room x 1 night</Typography>
            <Typography>
              ₹6,500
              {/* <span>{singleFlight.ticketPrice}</span> */}
            </Typography>
          </Stack>

          <Stack
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            {/* hotel taxes from the signleHotel.rooms. */}
            <Typography>Hotel taxes</Typography>
            <Typography>
              ₹{singelRoom.current?.costDetails?.taxesAndFees}
            </Typography>
          </Stack>

          <Box mt={3} mb={3} sx={{ borderBottom: "1px dotted #E6E6E6" }}></Box>
          <Typography mt={1} mb={1} fontSize={"18px"} fontWeight={"600"}>
            Total price
          </Typography>

          <Stack>
            <div className="fare">
              <Typography>Base fare(1traveller)</Typography>
              <Stack flexDirection={"row"} alignItems={"center "}>
                <CurrencyRupeeIcon fontSize="sm" />
                {/* <span>{Math.ceil(singleFlight.ticketPrice * 0.8)}</span> */}
              </Stack>
            </div>
            <div className="fare">
              <Typography>Taxes and fees</Typography>
              <Stack flexDirection={"row"} alignItems={"center "}>
                <CurrencyRupeeIcon fontSize="sm" />
                {/* <span>{Math.ceil(singleFlight.ticketPrice * 0.15)}</span> */}
              </Stack>
            </div>
            <div className="fare">
              <Typography>Discounts</Typography>
              <Stack flexDirection={"row"} alignItems={"center "}>
                <CurrencyRupeeIcon fontSize="sm" />
                {/* <span>{Math.ceil(singleFlight.ticketPrice * 0.05)}</span> */}
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
          <Button variant="text" sx={{ cursor: "no-drop" }}>
            View plans
          </Button>
          with your credit card
        </Typography>
      </CustomPaper>
    </>
  );
};

export default HotelPriceCards;
