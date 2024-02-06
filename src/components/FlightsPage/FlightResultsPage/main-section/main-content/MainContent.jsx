import React, { useCallback, useEffect, useMemo, useState } from "react";
import "../MainSection.css";
import { Stack, Typography } from "@mui/material";
import { fetchFlights } from "../../../../../Apis/FlightSearchApi";
import MainContentCard from "./MainContentCard";
import { useFlightResult } from "../../../../../UseContext/FlightResultProvider";
import { fetchFlightsByStopsAndDepartTime } from "../../../../../Apis/FlightSearchApi";
import Pagination from "@mui/material/Pagination";

import { planes } from "../../../../../static-data/StaticData";
import { useFlightSearch } from "../../../../../UseContext/FlightsSearchProvider";

const MainContent = ({ totalResult }) => {
  // const [totalFlights, setTotalFlights] = useState(totalResult);
  const { searchPlane, flightPage, setFlightPage } = useFlightSearch();
  const { handleSearchClick } = searchPlane;
  const { airplaneDetails, stopsSortDetails, departSortDetails } =
    useFlightResult();

  const {
    airplanes,
    setAirplanes,
    filteredAirplanes,
    // setFilteredAirplanes,
    handleFlightResultFilter,
    // page,
    // setPage,
  } = airplaneDetails;

  console.log("filterAirplane", filteredAirplanes);
  console.log("Airplane", airplanes);
  // const memoizedFilteredAirplanes = useMemo(
  //   () => filteredAirplanes,
  //   [filteredAirplanes]
  // );

  useEffect(() => {
    // setTotalFlights(totalResult);

    // fetchFlightData();
    // setFilteredAirplanes(handleFlightResultFilter);
    handleFlightResultFilter();
  }, [flightPage]);

  const handleChange = (event, value) => {
    setFlightPage(value);
    // handleFlightResultFilter();
    // fetchFlightData();
  };

  console.log({ totalResult });

  return (
    <div id="main-content-container">
      <Stack
        className="card-header"
        flexDirection={"row"}
        justifyContent={"flex-start"}
        gap={15}
        mb={1}
      >
        <Typography ml={-10} sx={{}}>
          Airlines
        </Typography>
        <Stack flexDirection={"row"} gap={6} mr={10}>
          <Typography>Departure</Typography>
          <Typography>Duration</Typography>
        </Stack>
        <Typography sx={{ textAlign: "right" }}>Price</Typography>
      </Stack>
      <Stack flexDirection={"column"} gap={2}>
        {airplanes ? (
          airplanes.map((airplane, index) => (
            <MainContentCard
              index={index}
              key={airplane._id + index}
              airplane={airplane}
              planeLogoName={planes[index]}
            />
          ))
        ) : (
          <h1>NO Flights Are Available!!</h1>
        )}
      </Stack>
      <Stack mt={4} mb={4} flexDirection={"row"} justifyContent={"center"}>
        <div>
          <Pagination
            count={Math.ceil(totalResult / 5)}
            color="primary"
            page={flightPage}
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
