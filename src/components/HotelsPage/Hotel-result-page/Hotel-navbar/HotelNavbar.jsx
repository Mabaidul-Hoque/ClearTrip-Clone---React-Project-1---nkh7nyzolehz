import React, { memo } from "react";
import { Link } from "react-router-dom";
import "../HotelResultPage.css";
import { useAuth } from "../../../../UseContext/AuthorizationProvider";
import HotelInputSection from "../../Hotel-search-card/HotelInputSection";
import { OPTION } from "../../Hotels";
import HotelFilter from "./HotelFilter";
import { ResultCheckInOutDate } from "../check-in-out-date/ResultCheckInOutDate";
import HResAddRoom from "./HResAddRoom";
import LoginPage from "../../../Login-signup/LoginPage";
import { Tooltip } from "@mui/material";
import { fetchHotels } from "../../../../Apis/HotelDetailsApi";
import { useHotelContext } from "../../../../UseContext/HotelDetailsProvider";
import { toast } from "react-toastify";

const HotelNavbar = () => {
  const { tokenDetails, logSignDetails, handleLogout, signupDetails } =
    useAuth();
  const { token } = tokenDetails;
  const { handleLoginOpen } = logSignDetails;
  const { setIsSignup } = signupDetails;
  const { inputInfo, hotelDetails } = useHotelContext();
  const { setHotels, setTotalHotels, hotelPage } = hotelDetails;
  const { inputPlace } = inputInfo;

  const handleHotelUpdate = () => {
    if (inputPlace !== "") {
      fetchHotels(inputPlace, 10, hotelPage).then((resp) => {
        setTotalHotels(resp.totalResults);
        setHotels(resp.data.hotels);
      });
    } else {
      notify("Fill the input details!");
    }
  };

  const notify = (text) => toast(text);

  return (
    <nav className="hotel-result-navbar">
      <div className="logo-login-section">
        {/* cleartrip logo */}
        <Link to="/">
          <Tooltip title="Home">
            <img
              className="cleartrip-logo"
              src="https://careers.cleartrip.com/images/cleartrip/footer-logo.svg"
              alt="cleartrip-logo"
            />
          </Tooltip>
        </Link>
        <div className="logo-login-middle">
          {/* hotel result input */}
          <HotelInputSection
            hotelInputClass="hotel-result-input-box"
            options={OPTION}
            noOptionText={"No Match Found"}
            optionKey={"name"}
          />

          {/* hotel result date inputes */}
          <ResultCheckInOutDate />

          {/* hotel result room type */}
          <HResAddRoom />

          {/* new search btn */}
          <button className="update-btn" onClick={handleHotelUpdate}>
            Update
          </button>
        </div>

        {/* hotel-res-login */}
        <button
          className="hotel-res-login"
          onClick={() => {
            setIsSignup(false);
            token ? handleLogout() : handleLoginOpen();
          }}
        >
          {token ? "Log out" : "Log in / Sign up"}
        </button>
      </div>

      <LoginPage />
      {/* filter section */}
      <HotelFilter />
    </nav>
  );
};

export default memo(HotelNavbar);
