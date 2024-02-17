import React, { useEffect } from "react";
import "./HotelCheckoutPage.css";
import FlightBookingNavbar from "../../../../FlightsPage/FlightResultsPage/flight-booking-page/flight-booking-navbar/FlightBookingNavbar";
import { Box, Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useHotelContext } from "../../../../../UseContext/HotelDetailsProvider";
import { fetchSingleHotel } from "../../../../../Apis/HotelDetailsApi";
import HotelInfoPriceCard from "../../../../../ui/HotelInfoPriceCard";
import HotelInfoCard from "../../../../../ui/HotelInfoCard";
import HotelCancellationPolicy from "../../../../../ui/HotelCancellationPolicy";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const HotelCheckoutPage = () => {
  const { hotelID } = useParams();
  const { hotelDetails, checkInOutDetails, roomTypeValues } = useHotelContext();
  const { singleHotel, setSingleHotel } = hotelDetails;
  const { checkInDate, checkOutDate } = checkInOutDetails;

  useEffect(() => {
    fetchSingleHotel(hotelID).then((response) => {
      setSingleHotel(response.data);
    });
  }, [hotelID]);

  const getDateMonth = (dateVal) => {
    const month = months[dateVal.getMonth()];
    const formattedDate = `${dateVal.getDate()} ${month}`;
    return formattedDate;
  };

  const getDayTime = (dateVal) => {
    const day = days[dateVal.getDay()];
    const hour = dateVal.getHours();
    const minute = dateVal.getMinutes();
    const ampm = hour >= 12 ? "PM" : "AM";
    const hour12 = hour % 12 || 12;
    const formattedDate = `${day}, ${hour12 < 10 ? "0" : ""}${hour12}:${
      minute < 10 ? "0" : ""
    }${minute} ${ampm}`;

    return formattedDate;
  };

  const getNights = () => {
    const date1 = new Date(checkInDate);
    const date2 = new Date(checkOutDate);
    const differenceInMs = date2 - date1;
    const differenceInDays = Math.ceil(differenceInMs / (1000 * 60 * 60 * 24));

    return differenceInDays;
  };

  return (
    <div>
      <FlightBookingNavbar />
      <Box mt={2} mb={4} sx={{ borderBottom: "1px solid #E6E6E6" }}></Box>
      <main id="h-booking-main">
        {/* hotel booikng details content */}
        <div id="h-booking-content">
          {/* header */}
          <Stack
            mb={4}
            mt={{
              xs: -3,
              sm: 0,
            }}
            flexDirection={"row"}
            alignItems={"center"}
            gap={2}
            width={{
              xs: "90vw",
              md: "60vw",
            }}
          >
            <div className="number-circle">
              <span>1</span>
            </div>
            <Typography
              fontSize={{
                xs: "24px",
              }}
              fontWeight={600}
            >
              Review your itinerary
            </Typography>
          </Stack>

          <div id="hotel-info-card">
            <HotelInfoCard
              singleHotel={singleHotel}
              getDateMonth={getDateMonth}
              getDayTime={getDayTime}
              getNights={getNights}
            />
          </div>

          <div id="cancellation-policy">
            <HotelCancellationPolicy
              getDateMonth={getDateMonth}
              getDayTime={getDayTime}
            />
          </div>
        </div>

        {/* hotel booking price card */}
        <div id="h-booking-price-card">
          <HotelInfoPriceCard singleHotel={singleHotel} />
        </div>
      </main>
    </div>
  );
};

export default HotelCheckoutPage;
