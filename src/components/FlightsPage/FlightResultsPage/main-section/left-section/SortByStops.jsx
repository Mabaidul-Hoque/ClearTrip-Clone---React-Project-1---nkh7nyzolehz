import { Box, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useFlightResult } from "../../../../../UseContext/FlightResultProvider";

const SortByStops = () => {
  const [stop, setStop] = useState(true);
  const [nonStop, setNonStop] = useState(false);
  const [oneStop, setOneStop] = useState(false);
  const [twoStop, setTwoStop] = useState(false);

  const { airplaneDetails } = useFlightResult();
  const { handleFlightResultFilter, filterItems, setFilterItems, setPage } =
    airplaneDetails;

  useEffect(() => {
    handleFlightResultFilter();
  }, [nonStop, oneStop, twoStop]);

  //   will check later
  // useEffect(() => {
  //   console.log("left side sorting bar use effect");
  //   if (checkedBox === "non-stop") {
  //     // delete setFilterItems("stops");
  //     setFilterItems((prev) => ({ ...prev, stops: "0" }));
  //     handleFlightResultFilter();
  //   } else if (checkedBox === "one-stop") {
  //     // delete setFilterItems("stops");
  //     setFilterItems((prev) => ({ ...prev, stops: "1" }));
  //     handleFlightResultFilter();
  //   } else if (checkedBox === "two-stop") {
  //     // delete setFilterItems("stops");
  //     setFilterItems((prev) => ({ ...prev, stops: "2" }));
  //     handleFlightResultFilter();
  //   }
  // }, [checkedBox]);

  const handleStopBnt = () => {
    setStop((prev) => !prev);
  };

  const handleNonStopFilter = () => {
    setPage(1);
    if (!nonStop) {
      setFilterItems((prev) => ({ ...prev, stops: "0" }));
      // handleFlightResultFilter();
    } else {
      delete filterItems["stops"];
    }
    handleFlightResultFilter();
  };

  const handleOneStopFilter = () => {
    setPage(1);
    if (!oneStop) {
      setFilterItems((prev) => ({ ...prev, stops: "1" }));
      // handleFlightResultFilter();
    } else {
      delete filterItems["stops"];
    }
    handleFlightResultFilter();
  };

  const handleTwoStopFilter = () => {
    setPage(1);
    if (!twoStop) {
      setFilterItems((prev) => ({ ...prev, stops: "2" }));
      // handleFlightResultFilter();
    } else {
      delete filterItems["stops"];
    }
    handleFlightResultFilter();
  };

  return (
    <>
      <Box>
        <Stack
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          className="sort-by-stops"
          onClick={handleStopBnt}
        >
          <span>Stops</span>
          <span>
            {stop ? <KeyboardArrowUpOutlinedIcon /> : <KeyboardArrowDownIcon />}
          </span>
        </Stack>
        {stop ? (
          <Stack justifyContent={"center"} alignItems={"flex-start"} gap={1}>
            <div
              onClick={() => {
                setNonStop((prev) => !prev);
                // setFilterItems((prev) => ({ ...prev, stops: "0" }));
                // setCheckedBox("non-stop");
                handleNonStopFilter();
              }}
              className="stop-options"
            >
              <input
                className="stop-input"
                type="checkbox"
                id="non-stop"
                checked={nonStop}
                // checked={checkedBox === "non-stop"}
                onChange={(e) => console.log(e)}
              />
              <span>Non-stop</span>
            </div>
            <div
              onClick={() => {
                setOneStop((prev) => !prev);
                // setCheckedBox("one-stop");

                handleOneStopFilter();
              }}
              className="stop-options"
            >
              <input
                type="checkbox"
                id="one-stop"
                checked={oneStop}
                // checked={checkedBox === "one-stop"}
                onChange={(e) => console.log(e)}
              />
              <span>1 stop</span>
            </div>
            <div
              onClick={() => {
                setTwoStop((prev) => !prev);

                // setCheckedBox("two-stop");
                handleTwoStopFilter();
              }}
              className="stop-options"
            >
              <input
                type="checkbox"
                id="two-stop"
                checked={twoStop}
                // checked={checkedBox === "two-stop"}
                onChange={(e) => console.log(e)}
              />
              <span>2 stop</span>
            </div>
          </Stack>
        ) : null}
      </Box>
    </>
  );
};

export default SortByStops;
