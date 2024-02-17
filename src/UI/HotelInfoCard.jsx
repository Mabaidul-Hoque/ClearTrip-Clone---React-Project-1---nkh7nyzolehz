import styled from "@emotion/styled";
import { Box, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import HotelRatings from "./HotelRatings";
import { useHotelContext } from "../UseContext/HotelDetailsProvider";

const InfoCardPaper = styled(Paper)({
  padding: "20px",
  border: "1px solid lightgray",
  borderRadius: "12px",
});

const HotelInfoCard = ({
  singleHotel,
  getDateMonth,
  getDayTime,
  getNights,
}) => {
  const { checkInDate, checkOutDate } = useHotelContext().checkInOutDetails;
  const { roomType } = useHotelContext().roomTypeValues;
  return (
    <>
      <InfoCardPaper>
        {/* header part */}
        <Stack
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <div>
            <Typography sx={{ color: "gray" }}>
              {singleHotel?.rating}-star hotel in {singleHotel?.location}
            </Typography>
            <Typography variant="h3">{singleHotel?.name}</Typography>
            {/* rating component */}
            <HotelRatings rating={singleHotel?.rating ?? ""} />
          </div>
          <img
            style={{
              width: "120px",
              height: "100px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
            alt="info-hotel-image"
            src={singleHotel?.images && singleHotel?.images[0]}
          />
        </Stack>

        <Box mt={4} mb={4} sx={{ borderBottom: "1px solid lightgray" }}></Box>
        {/* check in out and gauest part */}
        <Stack
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <div className="check-in">
            <Typography sx={{ color: "gray" }}>Check-in</Typography>
            <Typography sx={{ fontSize: "18px", fontWeight: 500 }}>
              {getDateMonth(checkInDate)}
            </Typography>
            <Typography sx={{ color: "gray" }}>
              {getDayTime(checkInDate)}
            </Typography>
          </div>
          <Typography
            sx={{ color: "gray", bgcolor: "rgb(238, 238, 238)", p: "2px 7px" }}
          >
            {getNights()} {getNights() > 1 ? "nights" : "night"}
          </Typography>
          <div className="check-in">
            <Typography sx={{ color: "gray" }}>Check-out</Typography>
            <Typography sx={{ fontSize: "18px", fontWeight: 500 }}>
              {getDateMonth(checkOutDate)}
            </Typography>
            <Typography sx={{ color: "gray" }}>
              {getDayTime(checkOutDate)}
            </Typography>
          </div>
          <Box sx={{ borderRight: "1px solid lightgray" }}></Box>
          <div className="room-guests">
            <Typography>Rooms & Guests</Typography>
            <Typography sx={{ fontSize: "18px", fontWeight: 500 }}>
              {roomType}
            </Typography>
            <Typography></Typography>
          </div>
        </Stack>
      </InfoCardPaper>
    </>
  );
};

export default HotelInfoCard;
