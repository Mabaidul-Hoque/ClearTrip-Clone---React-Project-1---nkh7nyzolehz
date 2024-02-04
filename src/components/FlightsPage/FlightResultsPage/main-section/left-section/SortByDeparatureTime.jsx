import { Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useFlightResult } from "../../../../../UseContext/FlightResultProvider";

const SortByDeparatureTime = ({ fetchFlightData }) => {
  const [isDeparature, setIsDeparature] = useState(true);
  const [isEarlyMorning, setIsEarlyMorning] = useState(false);
  const [isMorning, setIsMorning] = useState(false);
  const [isAfterNoon, setIsAfterNoon] = useState(false);
  const [isEvening, setIsEvening] = useState(false);
  const [isNight, setIsNight] = useState(false);

  const { airplaneDetails } = useFlightResult();
  const { handleFlightResultFilter, filterItems, setFilterItems, setPage } =
    airplaneDetails;

  useEffect(() => {
    if (isEarlyMorning || isMorning || isAfterNoon || isEvening || isNight) {
      handleFlightResultFilter();
    } else {
      // handleFlightResultFilter();
      fetchFlightData();
    }
  }, [isEarlyMorning, isMorning, isAfterNoon, isEvening, isNight]);

  const handleDeparaturebtn = () => {
    setIsDeparature((prev) => !prev);
  };

  const handleNightFilter = () => {
    setPage(1);
    if (!isNight) {
      const newObj = {
        $lte: "23:59",
        $gte: "20:00",
      };
      setFilterItems((prev) => ({ ...prev, departureTime: newObj }));
    } else {
      delete filterItems["departureTime"];
    }
  };
  const handleEveningFilter = () => {
    setPage(1);
    if (!isEvening) {
      const newObj = {
        $lte: "19:59",
        $gte: "16:00",
      };
      setFilterItems((prev) => ({ ...prev, departureTime: newObj }));
    } else {
      delete filterItems["departureTime"];
    }
  };
  const handleAfterNoonFilter = () => {
    setPage(1);
    if (!isAfterNoon) {
      const newObj = {
        $lte: "15:59",
        $gte: "12:00",
      };
      setFilterItems((prev) => ({ ...prev, departureTime: newObj }));
    } else {
      delete filterItems["departureTime"];
    }
  };
  const handleMorningFilter = () => {
    setPage(1);
    if (!isMorning) {
      const newObj = {
        $lte: "11:59",
        $gte: "08:00",
      };
      setFilterItems((prev) => ({ ...prev, departureTime: newObj }));
    } else {
      delete filterItems["departureTime"];
    }
  };
  const handleEarlyMorningFilter = () => {
    setPage(1);
    if (!isEarlyMorning) {
      const newObj = {
        $lte: "07:59",
        $gte: "00:00",
      };
      setFilterItems((prev) => ({ ...prev, departureTime: newObj }));
    } else {
      delete filterItems["departureTime"];
    }
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
