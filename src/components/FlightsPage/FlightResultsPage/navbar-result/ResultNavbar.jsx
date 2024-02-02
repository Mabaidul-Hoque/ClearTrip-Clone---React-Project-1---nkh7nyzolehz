import { Box, Stack, Typography, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import "./ResultNavbar.css";
import LocalAirportOutlinedIcon from "@mui/icons-material/LocalAirportOutlined";
import HotelIcon from "@mui/icons-material/Hotel";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link, useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
// import DeaprtCityInput from "../../FlightSearchCard/DeaprtCityInput";
// import DestinationCityInput from "../../FlightSearchCard/DestinationCityInput";
import SyncAltOutlinedIcon from "@mui/icons-material/SyncAltOutlined";
import DeaprtCity from "./source-destination/DepartCity";
import DestinationCity from "./source-destination/DestinationCity";
// import DepartDate from "../../FlightSearchCard/DepartDate";
// import ReturnDate from "../../FlightSearchCard/ReturnDate";
import DepartDateResult from "./date-picker-result/DepartDateResult";
import ReturnDateResult from "./date-picker-result/ReturnDateResult";
import Traveller from "./Traveller";
// import DepartDate from "../../FlightSearchCard/DepartDate";
import { fetchAirportNames } from "../../../../Apis/AirportNamesApi";
import { useAuth } from "../../../../UseContext/AuthorizationProvider";

const leftLogoUrl = "../../../../public/assets/Cleartrip_Original.svg.png";

const RightButton = styled(Button)({
  color: "gray",
  "&:active": {
    bgcolor: "none",
    color: "gray",
  },
  "&:focus": {
    bgcolor: "none",
    color: "gray",
  },
});

const ResultNavbar = () => {
  const [airportNames, setAirportNames] = useState([]);
  const navigate = useNavigate();
  const { tokenDetails, logSignDetails, handleLogout } = useAuth();
  const { token, setToken } = tokenDetails;
  const { handleLoginOpen, setLogInPagePath } = logSignDetails;

  // const handleLogoClick = () => {
  //   navigate("/");
  // };

  useEffect(() => {
    fetchAirportNames().then((res) => {
      setAirportNames(res.data.airports);
    });
  }, []);

  return (
    <Stack id="result-navbar">
      <Stack
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <div className="logo-section">
          <Link to="/">
            <img
              className="cleartrip-logo"
              src="https://careers.cleartrip.com/images/cleartrip/footer-logo.svg"
              alt="cleartrip-logo"
            />
          </Link>
          <RightButton>
            <LocalAirportOutlinedIcon htmlColor="#3366CC" />
          </RightButton>
          <RightButton>
            <HotelIcon htmlColor="#999999" fontSize="large" />
          </RightButton>
        </div>
        <Stack
          flexDirection={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          className="login-section"
        >
          <RightButton>
            <span>INR</span>
            <CurrencyRupeeOutlinedIcon
              sx={{ marginLeft: "2px" }}
              fontSize="sm"
            />
          </RightButton>
          <RightButton>
            <HeadsetMicOutlinedIcon
              sx={{ marginRight: "2px" }}
              htmlColor="gray"
              fontSize="sm"
            />
            <span>Support</span>
          </RightButton>
          <RightButton
            onClick={() => {
              setLogInPagePath("/flights/results");
              token ? handleLogout() : handleLoginOpen();
              token ? navigate("/") : navigate("/login");
            }}
          >
            {token ? (
              <>
                <AccountCircleOutlinedIcon
                  sx={{ marginRight: "2px" }}
                  fontSize="medium"
                />
                <span>Log out</span>
              </>
            ) : (
              <>
                <AccountCircleOutlinedIcon
                  sx={{ marginRight: "2px" }}
                  fontSize="medium"
                />
                <span>Log in</span>
              </>
            )}
          </RightButton>
        </Stack>
      </Stack>
      <Stack
        mt={1}
        mr={"-30px"}
        flexDirection={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={2.5}
      >
        <Stack
          flexDirection={"row"}
          justifyContent={"flex-start"}
          alignItems={"center"}
          gap={1}
        >
          <DeaprtCity airportNames={airportNames} />
          <SyncAltOutlinedIcon htmlColor="#ED6521" />
          <DestinationCity airportNames={airportNames} />
        </Stack>
        <Box>
          <DepartDateResult />
        </Box>
        <Box>
          <ReturnDateResult />
        </Box>
        <Box>
          <Traveller />
        </Box>
        <Button
          variant="text"
          className="search-btn"
          sx={{
            bgcolor: "#000000",
            color: "#FFFFFF",
            borderRadius: "7px",
            fontSize: "16px",
            textTransform: "none",
            "&:hover": {
              bgcolor: "#000000",
            },
          }}
          // onClick={() => handleSearchClick()}
        >
          Search
        </Button>
      </Stack>
    </Stack>
  );
};

export default ResultNavbar;
