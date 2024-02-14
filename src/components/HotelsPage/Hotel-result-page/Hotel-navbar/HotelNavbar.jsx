import React, { memo, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../HotelResultPage.css";
import { useAuth } from "../../../../UseContext/AuthorizationProvider";
import HotelInputSection from "../../Hotel-search-card/HotelInputSection";
import AddRooms from "../../AddRooms";
import { OPTION } from "../../Hotels";
import HotelFilter from "./HotelFilter";
import { ResultCheckInOutDate } from "../check-in-out-date/ResultCheckInOutDate";
import HResAddRoom from "./HResAddRoom";
import LoginPage from "../../../Login-signup/LoginPage";

const HotelNavbar = () => {
  const { tokenDetails, logSignDetails, handleLogout, signupDetails } =
    useAuth();
  const { token } = tokenDetails;
  const { handleLoginOpen } = logSignDetails;
  const { setIsSignup } = signupDetails;

  const navigate = useNavigate();

  return (
    <nav className="hotel-result-navbar">
      <div className="logo-login-section">
        {/* <img src="../../../assets/cleartrip-logo.svg" alt="cleartrip-logo" /> */}
        <Link to="/">
          <img
            className="cleartrip-logo"
            src="https://careers.cleartrip.com/images/cleartrip/footer-logo.svg"
            alt="cleartrip-logo"
          />
        </Link>
        <div className="logo-login-middle">
          <HotelInputSection
            hotelInputClass="hotel-result-input-box"
            options={OPTION}
            noOptionText={"No Match Found"}
            // onSearch={handleSearch}
            optionKey={"name"}
            optionCount={5}
          />
          <ResultCheckInOutDate />
          <HResAddRoom />
          <button className="update-btn">Update</button>
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
