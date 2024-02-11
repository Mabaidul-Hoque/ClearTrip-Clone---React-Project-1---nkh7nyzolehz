import { Box, Stack, Typography, Button, ThemeProvider } from "@mui/material";
import React, { useState, useEffect } from "react";
// import "../FlightResultPage.css";
import LocalAirportOutlinedIcon from "@mui/icons-material/LocalAirportOutlined";
import HotelIcon from "@mui/icons-material/Hotel";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link, useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import SyncAltOutlinedIcon from "@mui/icons-material/SyncAltOutlined";
import DepartDateResult from "./date-picker-result/DepartDateResult";
import ReturnDateResult from "./date-picker-result/ReturnDateResult";
import Traveller from "./Traveller";
import { fetchAirportNames } from "../../../../Apis/AirportNamesApi";
import { useAuth } from "../../../../UseContext/AuthorizationProvider";
import ResultDepartCity from "./source-destination/ResultDepartCity";
import ResultDestinationCity from "./source-destination/ResultDestinationCity";
import { fetchFlights } from "../../../../Apis/FlightSearchApi";
import { useFlightSearch } from "../../../../UseContext/FlightsSearchProvider";
import { useFlightResult } from "../../../../UseContext/FlightResultProvider";
const leftLogoUrl = "../../../../public/assets/Cleartrip_Original.svg.png";

import { CustomTheme } from "../../../../util/muiTheme";

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

const ResultNavbar = ({ source, dest, departDay }) => {
  const [airportNames, setAirportNames] = useState([]);
  const navigate = useNavigate();
  const { tokenDetails, logSignDetails, handleLogout } = useAuth();
  const { token } = tokenDetails;
  const { handleLoginOpen, setLogInPagePath } = logSignDetails;

  const { airplaneDetails } = useFlightSearch();
  const { setAirplanes } = airplaneDetails;

  // check after remove
  useEffect(() => {
    fetchAirportNames().then((res) => {
      setAirportNames(res.data.airports);
    });
  }, []);

  return (
    <ThemeProvider theme={CustomTheme}>
      <Stack
        sx={{
          width: {
            xxs: "95%",
            sm: "92%",
          },
          height: {
            xxs: "37vh",
            lg: "20vh",
          },
          margin: "0 auto",
          borderBottom: "1px solid lightgray",
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
            <Link to="/">
              <img
                className="cleartrip-logo"
                src="https://careers.cleartrip.com/images/cleartrip/footer-logo.svg"
                alt="cleartrip-logo"
              />
            </Link>

            <RightButton
              sx={{
                p: {
                  xs: 0,
                },
              }}
              onClick={() => navigate("/flights")}
            >
              <LocalAirportOutlinedIcon htmlColor="#3366CC" />
            </RightButton>

            <RightButton
              sx={{
                p: {
                  xs: 0,
                },
              }}
              onClick={() => navigate("/hotels")}
            >
              <HotelIcon htmlColor="#999999" fontSize="large" />
            </RightButton>
          </Stack>
          {/* login btn */}
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
        {/* search section */}
        <Stack
          mt={1}
          flexDirection={"row"}
          justifyContent={{
            xxs: "flex-start",
          }}
          alignItems={"center"}
          gap={{
            xxs: 1,
            xs: 2,
            lg: 1,
          }}
          flexWrap={"wrap"}
        >
          {/* source destination input */}
          <Stack
            flexDirection={"row"}
            justifyContent={"flex-start"}
            alignItems={"center"}
            gap={{
              xxs: 0,
              // sm: 1,
            }}
          >
            <ResultDepartCity
              options={airportNames}
              noOptionText={"No Match Found"}
              source={source}
            />
            <SyncAltOutlinedIcon htmlColor="#ED6521" />
            <ResultDestinationCity
              options={airportNames}
              noOptionText={"No Match Found"}
              dest={dest}
            />
          </Stack>
          {/* depart return date */}
          <Box>
            <DepartDateResult departDay={departDay} />
          </Box>
          <Box
            sx={{
              display: {
                xxs: "none",
                sm: "inline-block",
              },
            }}
          >
            <ReturnDateResult />
          </Box>
          {/* traveller options */}
          <Box>
            <Traveller />
          </Box>
          {/* search btn */}
          <Button
            variant="text"
            sx={{
              width: {
                xs: "93vw",
                md: "89vw",
                lg: "12vw",
              },
              bgcolor: "#000000",
              color: "#FFFFFF",
              borderRadius: "7px",
              fontSize: "16px",
              textTransform: "none",
              "&:hover": {
                bgcolor: "#000000",
              },
            }}
            // onClick={handleResultFlightSearch}
          >
            Search
          </Button>
        </Stack>
      </Stack>
    </ThemeProvider>
  );
};

export default ResultNavbar;
