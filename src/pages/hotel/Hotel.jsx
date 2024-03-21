import React from "react";
import "../../styles/hotel/Hotel.css";
import { Paper, Stack } from "@mui/material";
import RightSideBar from "../../components/right-side-bar/RightSideBar";
import { useHotelContext } from "../../contexts/HotelDetailsProvider";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthorizationProvider";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import { toast } from "react-toastify";
import AddRooms from "../../components/ui/AddRooms";
import Autocomplete from "../../components/ui/Autocomplete";
import { CheckInOutDate } from "../../components/ui/CheckInOutDate";

export const OPTION = [
  { name: "Kolkata, West Bengal" },
  { name: "Mumbai, Maharashtra" },
  { name: "Delhi, National Capital Territory of Delhi" },
  { name: "Bangalore, Karnataka" },
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
];

const Hotels = () => {
  const { hotelSearchHandler, inputInfo } = useHotelContext();
  const { handleHotelSearchBtn } = hotelSearchHandler;
  const { focus, inputPlace } = inputInfo;
  const { token } = useAuth().tokenDetails;
  const navigate = useNavigate();

  const handleNavigation = () => {
    if (token && inputPlace !== undefined) {
      navigate("/hotels/results");
    } else if (token && inputPlace === undefined) {
      toast.error("Fill the details first!", { theme: "colored" });
    } else {
      toast.error("You have to login first to continue further!", {
        theme: "colored",
      });
    }
  };

  return (
    <div id="hotel-page">
      {/* hotel home page main content */}
      <Stack id="h-search-container">
        {/* search header */}
        <Stack
          sx={{
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 1,
          }}
          className="hotel-search-header"
        >
          <h1 style={{ color: "#3B3B3B" }}>Search hotels</h1>
          <h4>Enjoy hassle free bookings with Cleartrip</h4>
        </Stack>

        {/* hotel search container card */}
        <Paper id="h-search-card">
          {/* hotel search input section */}
          <div className="location-input-box">
            <Autocomplete
              hotelInputClass="hotel-input-box"
              options={OPTION}
              noOptionText={"No Match Found"}
              optionKey={"name"}
            />
            {focus ? (
              <span className="place-icon">
                <FmdGoodIcon fontSize="medium" htmlColor="#254EAF" />
              </span>
            ) : (
              <span className="place-icon">
                <FmdGoodOutlinedIcon fontSize="medium" htmlColor="gray" />
              </span>
            )}
          </div>

          {/* date room container */}
          <div className="date-room-input">
            <div className="h-date-icon">
              <CalendarMonthOutlinedIcon htmlColor="gray" />
            </div>

            {/* date inputs */}
            <div className="date-input">
              <CheckInOutDate dateClass="hotel-search-dates" />
            </div>

            {/* rooms add section */}
            <AddRooms btnClassName="add-room-btn" />
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

      {/* RIGHT SIDE BAR */}
      <div id="hotel-right-side-bar">
        <RightSideBar />
      </div>
    </div>
  );
};

export default Hotels;
