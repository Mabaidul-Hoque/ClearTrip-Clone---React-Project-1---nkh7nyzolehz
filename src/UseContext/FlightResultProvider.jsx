import React, {
  useState,
  useReducer,
  useEffect,
  useContext,
  createContext,
  useCallback,
  useRef,
} from "react";
import {
  fetchFilteredFlights,
  fetchFlights,
  fetchFlightsByDepartTime,
  fetchFlightsByStopsAndDepartTime,
  fetchFlightsFilterByStops,
} from "../Apis/FlightSearchApi";
import { useFlightSearch } from "./FlightsSearchProvider";

const FlightResultContext = createContext();

export const useFlightResult = () => {
  const context = useContext(FlightResultContext);
  if (!context) {
    throw new Error("context is undefined");
  }
  return context;
};

export const FlightResultProvider = ({ children }) => {
  const [filteredAirplanes, setFilteredAirplanes] = useState([]);
  const [filterItems, setFilterItems] = useState({});
  const [page, setPage] = useState(1);
  const [singleFlight, setSingleFlight] = useState({});

  const sourceVal = useRef(localStorage.getItem("source").substring(0, 3));
  const destinationVal = useRef(
    localStorage.getItem("destination").substring(0, 3)
  );
  const dayVal = useRef(localStorage.getItem("day").substring(0, 3));

  const contextValues = useFlightSearch();
  const { airplanes, setAirplanes } = contextValues.fecthValues;

  const handleFlightResultFilter = () => {
    const JSONFilter = JSON.stringify(filterItems);
    fetchFilteredFlights(
      sourceVal.current,
      destinationVal.current,
      dayVal.current,
      5,
      page,
      JSONFilter
    ).then((response) => {
      // console.log("fetch filtered flights", response.data.flights);
      // setFilteredAirplanes(response.data.flights);
      setAirplanes(response.data.flights);
    });
  };

  const flightResults = {
    airplaneDetails: {
      airplanes,
      setAirplanes,
      filteredAirplanes,
      setFilteredAirplanes,
      handleFlightResultFilter,
      filterItems,
      setFilterItems,
      page,
      setPage,
    },
    singleFlightValue: {
      singleFlight,
      setSingleFlight,
    },
  };
  return (
    <FlightResultContext.Provider value={flightResults}>
      {children}
    </FlightResultContext.Provider>
  );
};

export default FlightResultProvider;
