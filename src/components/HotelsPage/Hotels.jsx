import React from "react";
import "./Hotels.css";
import { Paper, Stack } from "@mui/material";
import RightSideBar from "../FlightsPage/RightSideBarSection/RightSideBar";
import AddRooms from "./AddRooms";
import HotelInputSection from "./Hotel-search-card/HotelInputSection";
import { useHotelContext } from "../../UseContext/HotelDetailsProvider";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../UseContext/AuthorizationProvider";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import { CheckInOutDate } from "./Hotel-search-card/CheckInOutDate";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import { toast } from "react-toastify";

export const OPTION = [
  { name: "Kolkata, West Bengal" },
  { name: "Mumbai, Maharashtra" },
  { name: "Delhi, National Capital Territory of Delhi" },
  { name: "Bangalore, Karnataka" },
  { name: "Bangaluru, Karnataka" },
  { name: "Chennai, Tamil Nadu" },
  { name: "Hyderabad, Telangana" },
  { name: "Pune, Maharashtra" },
  { name: "Ahmedabad, Gujarat" },
  { name: "Surat, Gujarat" },
  { name: "Jaipur, Rajasthan" },
  { name: "Lucknow, Uttar Pradesh" },

  { name: "Kanpur, Uttar Pradesh" },
  { name: "Nagpur, Maharashtra" },
  { name: "Indore, Madhya Pradesh" },
  { name: "Thane, Maharashtra" },
  { name: "Pune, Maharashtra" },
  { name: "Ahmedabad, Gujarat" },
  { name: "Surat, Gujarat" },
  { name: "Jaipur, Rajasthan" },
  { name: "Lucknow, Uttar Pradesh" },
];

const Hotels = () => {
  const { hotelSearchHandler, inputInfo } = useHotelContext();
  const { handleHotelSearchBtn } = hotelSearchHandler;
  const { focus, inputPlace } = inputInfo;
  const { token } = useAuth().tokenDetails;
  const navigate = useNavigate();

  const handleNavigation = () => {
    if (token && inputPlace) {
      navigate("/hotels/results");
    } else if (!inputPlace) {
      notify("Fill the details first!");
    } else {
      notify("You have to login first to continue further!");
    }
  };
  const notify = (text) => toast(text);
  return (
    <div id="hotel-page">
      {/* main content */}

      <Stack id="h-search-container">
        <Stack
          flexDirection={"column"}
          justifyContent={"flex-start"}
          alignItems={"flex-start"}
          gap={1}
          className="hotel-search-header"
        >
          <h1>Search hotels</h1>
          <h4>Enjoy hassle free bookings with Cleartrip</h4>
        </Stack>

        <Paper id="h-search-card">
          <div className="location-input">
            <div>
              <HotelInputSection
                hotelInputClass="hotel-input-box"
                options={OPTION}
                noOptionText={"No Match Found"}
                optionKey={"name"}
                optionCount={5}
              />
            </div>
            {focus ? (
              <span className="place-icon">
                <FmdGoodIcon fontSize="medium" htmlColor="blue" />
              </span>
            ) : (
              <span className="place-icon">
                <FmdGoodOutlinedIcon fontSize="medium" htmlColor="gray" />
              </span>
            )}
          </div>

          <div className="date-room-input">
            <div className="h-date-icon">
              <CalendarMonthOutlinedIcon htmlColor="gray" />
            </div>
            <div className="date-input">
              <CheckInOutDate />
            </div>
            <AddRooms />
          </div>

          <div className="h-search-btn-container">
            <button
              onClick={() => {
                handleHotelSearchBtn();
                handleNavigation();
              }}
              className="h-search-btn"
            >
              Search hotels
            </button>
          </div>
        </Paper>
      </Stack>
      {/* right side bar similar to flight page but offers are diffferent */}
      <div id="hotel-right-side-bar">
        <RightSideBar />
      </div>
    </div>
  );
};

export default Hotels;
