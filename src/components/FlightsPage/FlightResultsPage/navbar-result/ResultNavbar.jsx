import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box, Stack, Button, ThemeProvider, Tooltip } from "@mui/material";
import LocalAirportOutlinedIcon from "@mui/icons-material/LocalAirportOutlined";
import HotelIcon from "@mui/icons-material/Hotel";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import styled from "@emotion/styled";
import SyncAltOutlinedIcon from "@mui/icons-material/SyncAltOutlined";
import Traveller from "./Traveller";
import { fetchAirportNames } from "../../../../Apis/AirportNamesApi";
import { useAuth } from "../../../../UseContext/AuthorizationProvider";
import { fetchFlights } from "../../../../Apis/FlightSearchApi";
import { useFlightSearch } from "../../../../UseContext/FlightsSearchProvider";
import { CustomTheme } from "../../../../util/muiTheme";
import LoginPage from "../../../Login-signup/LoginPage";
import { toast } from "react-toastify";
import DateInputs from "../../FlightSearchCard/DateInputs";
import DepartCityInput from "../../FlightSearchCard/DepartCityInput";
import DestinationCityInput from "../../FlightSearchCard/DestinationCityInput";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
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
const SearchButton = styled(Button)({
  bgcolor: "black",
  color: "#FFFFFF",
  borderRadius: "7px",
  fontSize: "16px",
  textTransform: "none",
  "&:hover": {
    bgcolor: "black",
  },
});

const returnDateStyle = () => ({
  width: "8rem",
  height: {
    xs: "44px",
  },
  fontSize: {
    xs: "14px",
    md: "16px",
  },
});
const departDateStyle = () => ({
  width: "8rem",
  height: {
    xs: "44px",
  },
  fontSize: {
    xs: "14px",
    md: "16px",
  },
});

const ResultNavbar = () => {
  const { tokenDetails, logSignDetails, handleLogout, signupDetails } =
    useAuth();
  const { token } = tokenDetails;
  const { handleLoginOpen } = logSignDetails;
  const { setIsSignup } = signupDetails;
  const {
    airplaneDetails,
    sourceDestValue,
    flightPage,
    departvalue,
    totalFlightsVal,
    loadingData,
  } = useFlightSearch();
  const { setAirplanes, airportNames, setAirportNames } = airplaneDetails;
  const { cityNameCodes, source, destination } = sourceDestValue;
  const { departDay } = departvalue;
  const { setTotalResult } = totalFlightsVal;
  const { setIsLoading } = loadingData;
  const navigate = useNavigate();

  useEffect(() => {
    fetchAirportNames().then((res) => {
      setAirportNames(res.data.airports);
    });
  }, []);

  const handleResultFlightSearch = () => {
    if (
      source.substring(0, 3) !== destination.substring(0, 3) &&
      cityNameCodes.includes(source.substring(0, 3)) &&
      cityNameCodes.includes(destination.substring(0, 3)) &&
      days.includes(departDay.substring(0, 3))
    ) {
      const sourceVal = source.substring(0, 3);
      const destinationVal = destination.substring(0, 3);
      const day = departDay.substring(0, 3);
      if (sourceVal !== null && destinationVal !== null && day !== null) {
        setIsLoading(true);
        fetchFlights(sourceVal, destinationVal, day, 5, flightPage).then(
          (response) => {
            setTotalResult(response.totalResults);
            setAirplanes(response.data.flights);
            setIsLoading(false);
          }
        );
      } else {
        fetchFlights(sourceVal, destinationVal, day, 5, flightPage).then(
          (response) => {
            setTotalResult(response.totalResults);
            setAirplanes(response.data.flights);
          }
        );
      }
    } else {
      if (source === "" || destination === "") {
        notify("Fill the details before search!");
      }
      if (
        source !== "" &&
        destination !== "" &&
        source.substring(0, 3) === destination.substring(0, 3)
      ) {
        notify("Inputs are either same or invalid!, provide correct inputs");
      }
    }
  };

  const notify = (text) => toast(text);

  return (
    <ThemeProvider theme={CustomTheme}>
      <Stack
        sx={{
          width: {
            xxs: "95%",
            sm: "92%",
          },
          height: "fit-content",
          margin: "0 auto",
        }}
      >
        {/* logo login section */}
        <Stack
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          mt={2}
        >
          {/* logo-section */}
          <Stack
            flexDirection={"row"}
            justifyContent={"flex-start"}
            alignItems={"center"}
          >
            <Tooltip title="Home" sx={{ marginTop: -4 }}>
              <Link to="/">
                <img
                  className="cleartrip-logo"
                  src="https://careers.cleartrip.com/images/cleartrip/footer-logo.svg"
                  alt="cleartrip-logo"
                />
              </Link>
            </Tooltip>

            <RightButton
              sx={{
                p: {
                  xs: 0,
                },
              }}
              onClick={() => navigate("/flights")}
            >
              <Tooltip title="Flight">
                <LocalAirportOutlinedIcon htmlColor="#3366CC" />
              </Tooltip>
            </RightButton>

            <RightButton
              sx={{
                p: {
                  xs: 0,
                },
              }}
              onClick={() => navigate("/hotels")}
            >
              <Tooltip title="Hotel">
                <HotelIcon htmlColor="#999999" fontSize="large" />
              </Tooltip>
            </RightButton>
          </Stack>
          {/* support and login btn section */}
          <Stack
            flexDirection={"row"}
            justifyContent={"center"}
            alignItems={"center"}
            className="login-section"
          >
            <RightButton
              sx={{
                display: {
                  xxs: "none",
                  sm: "inline-block",
                },
                cursor: "no-drop",
              }}
            >
              <span>INR</span>
              <CurrencyRupeeOutlinedIcon
                sx={{ marginLeft: "2px" }}
                fontSize="sm"
              />
            </RightButton>
            <RightButton
              sx={{
                display: {
                  xxs: "none",
                  sm: "inline-block",
                },
                cursor: "no-drop",
              }}
            >
              <HeadsetMicOutlinedIcon
                sx={{ marginRight: "2px" }}
                htmlColor="gray"
                fontSize="sm"
              />
              <span>Support</span>
            </RightButton>
            <RightButton
              onClick={() => {
                setIsSignup(false);
                token ? handleLogout() : handleLoginOpen();
              }}
              sx={{ fontSize: { xs: "12px", sm: "14px" } }}
            >
              <AccountCircleOutlinedIcon
                sx={{ marginRight: "2px" }}
                fontSize="medium"
              />
              {token ? <span>Log out</span> : <span>Log in</span>}
            </RightButton>
          </Stack>
        </Stack>
        <LoginPage />

        {/* navbar search section */}
        <Stack
          mt={1}
          flexDirection={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={{
            xs: 0.5,
            lg: 1,
          }}
          flexWrap={"wrap"}
        >
          {/* source destination input */}
          <Stack
            flexDirection={{ xs: "column", sm: "row" }}
            alignItems={"center"}
            gap={0.5}
          >
            <DepartCityInput
              options={airportNames}
              noOptionText={"No Match Found"}
              inputStyleClass="inputBoxRes"
              source={source}
            />
            <SyncAltOutlinedIcon
              sx={{ display: { xs: "none", sm: "block" } }}
              htmlColor="#ED6521"
            />
            <DestinationCityInput
              options={airportNames}
              noOptionText={"No Match Found"}
              inputStyleClass="inputBoxRes"
              destination={destination}
            />
          </Stack>

          {/* depart return date */}
          <Box sx={{
            display: "flex"
          }}>
            <DateInputs
              departStyle={departDateStyle}
              returnStyle={returnDateStyle}
            />
          </Box>

          {/* traveller options */}
          <Box>
            <Traveller />
          </Box>

          {/* search btn */}
          <SearchButton
            variant="contained"
            sx={{
              width: "10rem",
              height: "44px",
            }}
            onClick={handleResultFlightSearch}
          >
            Search
          </SearchButton>
        </Stack>
      </Stack>
    </ThemeProvider>
  );
};

export default ResultNavbar;
