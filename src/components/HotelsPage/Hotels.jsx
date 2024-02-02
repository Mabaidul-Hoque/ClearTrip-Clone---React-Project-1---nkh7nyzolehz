import React, { forwardRef, useRef, useState } from "react";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import "./Hotels.css";
import { Stack } from "@mui/material";
import RightSideBar from "../FlightsPage/RightSideBarSection/RightSideBar";
import DepartDate from "../FlightsPage/FlightSearchCard/DepartDate";
import ReturnDate from "../FlightsPage/FlightSearchCard/ReturnDate";
// import PassengerAdd from "../FlightsPage/FlightSearchCard/PassengerAdd";
import AddRooms from "./AddRooms";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import PlaceIcon from "@mui/icons-material/Place";
import HotelInputSection from "./Hotel-search-card/HotelInputSection";
import { useHotelContext } from "../../UseContext/HotelDetailsProvider";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../UseContext/AuthorizationProvider";
import LoginPage from "../Login-signup/LoginPage";

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
  const { focus, hotelFecthValues } = useHotelContext();
  const { handleHotelSearchBtn } = hotelFecthValues;
  const { tokenDetails } = useAuth();
  const { token } = tokenDetails;

  const navigate = useNavigate();

  const handleSearch = (value, cb) => {
    // just to explian API call
    let tempOptions = [...OPTION, { name: "piyush" }];
    tempOptions = tempOptions.filter((item) =>
      item["name"]?.toLowerCase().includes(value.toLowerCase())
    );
    // setOptions
    cb(tempOptions);
  };

  return (
    <div id="hotel-page">
      {/* main content */}

      <Stack id="hotel-search-container">
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

        <form id="hotel-search-card" action="#">
          <div className="hotel-search-location-date-room">
            <div className="location-data">
              <div id="hotel-input-section">
                <HotelInputSection
                  hotelInputClass="hotel-input-box"
                  options={OPTION}
                  noOptionText={"No Match Found"}
                  onSearch={handleSearch}
                  optionKey={"name"}
                  optionCount={5}
                />
              </div>
              {focus ? (
                <span className="place-icon">
                  <PlaceIcon fontSize="medium" htmlColor="orange" />
                </span>
              ) : (
                <span className="place-icon">
                  <PlaceOutlinedIcon fontSize="medium" htmlColor="orange" />
                </span>
              )}
            </div>
            <div className="date-room-input">
              <div className="date-picker">
                <DepartDate />
                <ReturnDate />
              </div>
              <AddRooms width="16.5vw" height="59px" />
            </div>
          </div>
          <div className="search-hotels-btn-container">
            <button
              onClick={() => {
                handleHotelSearchBtn();
                token ? navigate("/hotels/results") : navigate("/login");
              }}
              className="search-hotels-btn"
            >
              Search hotels
            </button>
          </div>
        </form>
      </Stack>
      {/* right side bar similar to flight page but offers are diffferent */}
      <div id="hotel-right-side-bar">
        <RightSideBar />
      </div>
    </div>
  );
};

export default Hotels;
