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

const ResultNavbar = ({ fetchFlightData }) => {
  // const [resDepartDate, seResDepartDate] = useState(new Date());
  // const [resReturnDate, seResReturnDate] = useState(new Date());
  // const [resDepartDay, setResDepartDay] = useState("");
  // const [resReturnDay, setResReturnDay] = useState("");
  // const [resSource, setResSource] = useState("");
  // const [resDestination, setResDestination] = useState("");

  const [airportNames, setAirportNames] = useState([]);
  const navigate = useNavigate();
  const { tokenDetails, logSignDetails, handleLogout } = useAuth();
  const { token } = tokenDetails;
  const { handleLoginOpen, setLogInPagePath } = logSignDetails;

  const { fecthValues } = useFlightSearch();
  const { setAirplanes } = fecthValues;

  const { airplaneDetails } = useFlightResult();
  const { setFilteredAirplanes, sourceVal, destinationVal, dayVal } =
    airplaneDetails;

  // check after remove
  useEffect(() => {
    fetchAirportNames().then((res) => {
      setAirportNames(res.data.airports);
    });
  }, []);

  const handleResultFlightSearch = () => {
    setAirplanes(fetchFlightData);
  };

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
          <RightButton onClick={() => navigate("/flights")}>
            <LocalAirportOutlinedIcon htmlColor="#3366CC" />
          </RightButton>
          <RightButton onClick={() => navigate("/hotels")}>
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
          <ResultDepartCity
            options={airportNames}
            noOptionText={"No Match Found"}
            optionCount={5}
          />
          <SyncAltOutlinedIcon htmlColor="#ED6521" />
          <ResultDestinationCity
            options={airportNames}
            noOptionText={"No Match Found"}
            optionCount={5}
          />
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
          onClick={handleResultFlightSearch}
        >
          Search
        </Button>
      </Stack>
    </Stack>
  );
};

export default ResultNavbar;
