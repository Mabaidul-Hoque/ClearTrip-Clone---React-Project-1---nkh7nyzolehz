import { Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useFlightResult } from "../../../../../UseContext/FlightResultProvider";
import { useFlightSearch } from "../../../../../UseContext/FlightsSearchProvider";

const SortByDeparatureTime = ({ getFilterFlights }) => {
  const [isDeparature, setIsDeparature] = useState(true);
  const [isEarlyMorning, setIsEarlyMorning] = useState(false);
  const [isMorning, setIsMorning] = useState(false);
  const [isAfterNoon, setIsAfterNoon] = useState(false);
  const [isEvening, setIsEvening] = useState(false);
  const [isNight, setIsNight] = useState(false);

  const { filterData, setFlightPage } = useFlightSearch();
  const { filterItems, setFilterItems } = filterData;

  useEffect(() => {
    if (isEarlyMorning || isMorning || isAfterNoon || isEvening || isNight) {
      setFlightPage(1);
      getFilterFlights(filterItems);
    } else {
      delete filterItems["departureTime"];
      getFilterFlights(filterItems);
    }
  }, [isEarlyMorning, isMorning, isAfterNoon, isEvening, isNight]);

  const handleDeparaturebtn = () => {
    setIsDeparature((prev) => !prev);
  };

  const handleNightFilter = () => {
    setIsEarlyMorning(false);
    setIsMorning(false);
    setIsAfterNoon(false);
    setIsEvening(false);

    const newObj = {
      $lte: "23:59",
      $gte: "20:00",
    };
    setFilterItems((prev) => ({ ...prev, departureTime: newObj }));
  };
  const handleEveningFilter = () => {
    setIsEarlyMorning(false);
    setIsMorning(false);
    setIsAfterNoon(false);

    setIsNight(false);

    const newObj = {
      $lte: "19:59",
      $gte: "16:00",
    };
    setFilterItems((prev) => ({ ...prev, departureTime: newObj }));
  };
  const handleAfterNoonFilter = () => {
    setIsEarlyMorning(false);
    setIsMorning(false);

    setIsEvening(false);
    setIsNight(false);

    const newObj = {
      $lte: "15:59",
      $gte: "12:00",
    };
    setFilterItems((prev) => ({ ...prev, departureTime: newObj }));
  };
  const handleMorningFilter = () => {
    setIsEarlyMorning(false);

    setIsAfterNoon(false);
    setIsEvening(false);
    setIsNight(false);

    const newObj = {
      $lte: "11:59",
      $gte: "08:00",
    };
    setFilterItems((prev) => ({ ...prev, departureTime: newObj }));
  };
  const handleEarlyMorningFilter = () => {
    setIsMorning(false);
    setIsAfterNoon(false);
    setIsEvening(false);
    setIsNight(false);

    const newObj = {
      $lte: "07:59",
      $gte: "00:00",
    };
    setFilterItems((prev) => ({ ...prev, departureTime: newObj }));
  };

  return (
    <>
      <div>
        <Stack
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          className="sort-by-depart-time"
          onClick={handleDeparaturebtn}
        >
          <div>Departure time</div>
          <span>
            {isDeparature ? (
              <KeyboardArrowUpOutlinedIcon />
            ) : (
              <KeyboardArrowDownIcon />
            )}
          </span>
        </Stack>
        {isDeparature ? (
          <Stack gap={1}>
            <Stack
              flexDirection={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
              className="depart-time-options"
              onClick={() => {
                setIsEarlyMorning((prev) => !prev);
                handleEarlyMorningFilter();
              }}
            >
              <div className="checkbox-time">
                <input
                  type="checkbox"
                  checked={isEarlyMorning}
                  value={isEarlyMorning}
                  onChange={(e) => console.log(e.target.value)}
                />
                <span>Early morning</span>
              </div>
              <span className="flight-time-range">Midnight - 8 am</span>
            </Stack>
            <Stack
              flexDirection={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
              className="depart-time-options"
              onClick={() => {
                setIsMorning((prev) => !prev);
                handleMorningFilter();
              }}
            >
              <div className="checkbox-time">
                <input
                  type="checkbox"
                  checked={isMorning}
                  value={isMorning}
                  onChange={(e) => console.log(e.target.value)}
                />
                <span>Morning</span>
              </div>

              <span className="flight-time-range">8 am - Noon</span>
            </Stack>
            <Stack
              flexDirection={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
              className="depart-time-options"
              onClick={() => {
                setIsAfterNoon((prev) => !prev);
                handleAfterNoonFilter();
              }}
            >
              <div className="checkbox-time">
                <input
                  type="checkbox"
                  checked={isAfterNoon}
                  value={isAfterNoon}
                  onChange={(e) => console.log(e.target.value)}
                />
                <span>Afternoon</span>
              </div>

              <span className="flight-time-range">Noon - 4 pm</span>
            </Stack>
            <Stack
              flexDirection={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
              className="depart-time-options"
              onClick={() => {
                setIsEvening((prev) => !prev);
                handleEveningFilter();
              }}
            >
              <div className="checkbox-time">
                <input
                  type="checkbox"
                  checked={isEvening}
                  value={isEvening}
                  onChange={(e) => console.log(e.target.value)}
                />
                <span>Evening</span>
              </div>

              <span className="flight-time-range">4 pm - 8 pm</span>
            </Stack>
            <Stack
              flexDirection={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
              className="depart-time-options"
              onClick={() => {
                setIsNight((prev) => !prev);
                handleNightFilter();
              }}
            >
              <div className="checkbox-time">
                <input
                  type="checkbox"
                  checked={isNight}
                  value={isNight}
                  onChange={(e) => console.log(e.target.value)}
                />
                <span>Night</span>
              </div>

              <span className="flight-time-range">4 pm - Midnight</span>
            </Stack>
          </Stack>
        ) : null}
      </div>
    </>
  );
};

export default SortByDeparatureTime;
