import React, { useCallback, useEffect, useState } from "react";
import "../MainSection.css";
import { Stack } from "@mui/material";
import { fetchFlights } from "../../../../../Apis/FlightSearchApi";
import MainContentCard from "./MainContentCard";
import { useFlightResult } from "../../../../../UseContext/FlightResultProvider";
import { fetchFlightsByStopsAndDepartTime } from "../../../../../Apis/FlightSearchApi";
import Pagination from "@mui/material/Pagination";

const MainContent = () => {
  const { airplaneDetails, stopsSortDetails, departSortDetails } =
    useFlightResult();
  const {
    sourceVal,
    destinationVal,
    dayVal,
    airplanes,
    setAirplanes,
    filteredAirplanes,
    setFilteredAirplanes,
    handleFlightResultFilter,
    page,
    setPage,
  } = airplaneDetails;

  // console.log("filterAirplane", filteredAirplanes);
  // console.log("Airplane", airplanes);

  useEffect(() => {
    console.log("main content useeffect");
    // setFilteredAirplanes(handleFlightResultFilter);
    handleFlightResultFilter();
  }, []);

  const handleChange = (event, value) => {
    setPage(value);
    handleFlightResultFilter();
  };

  return (
    <div
      id="main-content-container"
      // style={{ position: "relative", marginBottom: "100px" }}
    >
      <Stack flexDirection={"column"} gap={2}>
        {filteredAirplanes &&
          filteredAirplanes.map((airplane, index) => (
            <MainContentCard
              index={index}
              key={airplane._id + index}
              airplane={airplane}
            />
          ))}
      </Stack>
      <Stack mt={4} mb={4} flexDirection={"row"} justifyContent={"center"}>
        <div>
          <Pagination
            count={5}
            color="primary"
            page={page}
            onChange={handleChange}
          />
        </div>
      </Stack>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        cumque optio est officiis adipisci expedita quam explicabo eaque
        praesentium! Delectus porro repellendus quia, sed harum nisi excepturi
        officiis dolore praesentium, veniam aut fugiat deserunt enim officia
        perspiciatis nihil velit aperiam voluptatem, iste et? Minima hic
        architecto iure error voluptatibus quod, ad in sed, consequuntur unde,
        veniam officiis tenetur. Nam modi iusto, hic nesciunt porro quae
        nostrum, eos harum blanditiis expedita deleniti magnam nulla laudantium
        animi eaque maxime asperiores maiores amet dicta sed delectus cupiditate
        nobis aliquam facere. Nemo quo dolorem magni, porro dolore eius quasi
        omnis, harum incidunt, saepe at.
      </div>
    </div>
  );
};

export default MainContent;
