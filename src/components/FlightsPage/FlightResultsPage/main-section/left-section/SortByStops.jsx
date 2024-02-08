import { Box, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useFlightResult } from "../../../../../UseContext/FlightResultProvider";
import { useFlightSearch } from "../../../../../UseContext/FlightsSearchProvider";

const SortByStops = ({ getFilterFlights }) => {
  const [stop, setStop] = useState(true);
  const [nonStop, setNonStop] = useState(false);
  const [oneStop, setOneStop] = useState(false);
  const [twoStop, setTwoStop] = useState(false);

  const { searchPlane, filterData, setFlightPage } = useFlightSearch();
  const { handleSearchClick } = searchPlane;
  const { filterItems, setFilterItems } = filterData;

  useEffect(() => {
    if (nonStop || oneStop || twoStop) {
      setFlightPage(1);
      getFilterFlights(filterItems);
    } else {
      delete filterItems["stops"];
      getFilterFlights(filterItems);
    }
  }, [nonStop, oneStop, twoStop]);

  //   will check later
  // const handleFilterOptions = useCallback(
  //   (value, type) => {
  //     console.log("filterItems", filterItems);
  //     console.log("type", type);
  //     let newFilterItems = { ...filterItems };
  //     if (type === "non-stop") {
  //       if (value) {
  //         newFilterItems?.stops ? newFilterItems.stops.push("0") : ["0"];
  //       } else {
  //         deleteElement(newFilterItems?.stops, "0");
  //       }

  //       handleFlightResultFilter(newFilterItems);
  //       setFilterItems(newFilterItems);
  //     } else if (type === "one-stop") {
  //       if (value) {
  //         newFilterItems?.stops ? newFilterItems.stops.push("1") : ["1"];
  //       } else {
  //         deleteElement(newFilterItems?.stops, "1");
  //       }

  //       handleFlightResultFilter(newFilterItems);
  //       setFilterItems(newFilterItems);
  //     } else if (type === "two-stop") {
  //       if (value) {
  //         newFilterItems?.stops ? newFilterItems.stops.push("2") : ["2"];
  //       } else {
  //         deleteElement(newFilterItems?.stops, "2");
  //       }

  //       handleFlightResultFilter(newFilterItems);
  //       setFilterItems(newFilterItems);
  //     }

  //     handleSearchClick();
  //   },
  //   [filterItems]
  // );
  // }, [checkedBox]);

  const handleStopBnt = () => {
    setStop((prev) => !prev);
  };

  const handleNonStopFilter = () => {
    setOneStop(false);
    setTwoStop(false);
    // if (!nonStop) {

    setFilterItems((prev) => ({ ...prev, stops: "0" }));

    // } else {
    // delete filterItems["stops"];
    // }
  };

  const handleOneStopFilter = () => {
    setNonStop(false);
    setTwoStop(false);
    // if (!oneStop) {
    setFilterItems((prev) => ({ ...prev, stops: "1" }));
    // } else {
    // delete filterItems["stops"];
    // }
  };

  const handleTwoStopFilter = () => {
    setNonStop(false);
    setOneStop(false);

    // if (!twoStop) {
    setFilterItems((prev) => ({ ...prev, stops: "2" }));
    // } else {
    // delete filterItems["stops"];
    // }
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
