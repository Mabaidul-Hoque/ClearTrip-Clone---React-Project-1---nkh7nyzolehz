import styled from "@emotion/styled";
import { Button, Paper, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React, { useRef } from "react";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

const CustomPaper = styled(Paper)({
  width: "18rem",
  height: "fit-contain",
  position: "sticky",
  top: "40px",
  borderRadius: "10px",
});

const HotelInfoPriceCard = ({ singleHotel }) => {
  const singelRoom = useRef(JSON.parse(localStorage.getItem("room")));
  console.log("singleHotel", singleHotel);
  console.log("room", JSON.parse(localStorage.getItem("room")));
  return (
    <>
      <CustomPaper elevation={4}>
        <div style={{ padding: "20px" }}>
          <Typography variant="h5" mb={2}>
            Price breakup
          </Typography>
          <div className="price-break-up">
            {/* room and night : room from addroom and night day diffenece between checkin and checkout date */}
            <Typography>1 room x 1 night</Typography>
            <Typography>
              ₹6,500
              {/* <span>{singleFlight.ticketPrice}</span> */}
            </Typography>
          </div>

          <div className="price-break-up">
            {/* hotel taxes from the signleHotel.rooms. */}
            <Typography>Hotel taxes</Typography>
            <Typography>
              ₹{singelRoom.current?.costDetails?.taxesAndFees}
            </Typography>
          </div>

          <Box mt={1} mb={1} sx={{ borderBottom: "1px dotted #E6E6E6" }}></Box>

          <div className="price-break-up">
            <Typography fontSize={"18px"} fontWeight={"600"}>
              Total price
            </Typography>
            <Typography>₹6,500</Typography>
          </div>
          <Typography fontSize={"11px"}>1 room . 3 nights</Typography>
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

export default HotelInfoPriceCard;
