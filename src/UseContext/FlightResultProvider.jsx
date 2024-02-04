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
  const [isOpen, setIsOpen] = useState(false);
  const [isPlane, setIsPlane] = useState(false);
  const [airplaneId, setAirplaneId] = useState(-1);
  const [isDeparature, setIsDeparature] = useState(true);
  const [isEarlyMorning, setIsEarlyMorning] = useState(false);
  const [isMorning, setIsMorning] = useState(false);
  const [isAfterNoon, setIsAfterNoon] = useState(false);
  const [isEvening, setIsEvening] = useState(false);
  const [isNight, setIsNight] = useState(false);
  const [isPrice, setIsPrice] = useState(true);
  const [filteredAirplanes, setFilteredAirplanes] = useState([]);
  const [filterItems, setFilterItems] = useState({});
  const [page, setPage] = useState(0);

  const sourceVal = useRef(localStorage.getItem("source").substring(0, 3));
  const destinationVal = useRef(
    localStorage.getItem("destination").substring(0, 3)
  );
  const dayVal = useRef(localStorage.getItem("day").substring(0, 3));

  const contextValues = useFlightSearch();
  const { airplanes, setAirplanes } = contextValues.fecthValues;

  useEffect(() => {
    handleFlightResultFilter();
  }, [isEarlyMorning, isMorning, isAfterNoon, isEvening, isNight]);

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
      setFilteredAirplanes(response.data.flights);
    });
  };
  // const handlePriceFilter = (flightPrice) => {
  //   setPage(1);
  //   if (flightPrice >= 1000 && flightPrice <= 10000) {
  //     filterItems.ticketPrice = {
  //       $lte: flightPrice,
  //       $gte: 1000,
  //     };
  //   }
  //   handleFlightResultFilter();
  // };
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
    handleFlightResultFilter();
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
    handleFlightResultFilter();
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
    handleFlightResultFilter();
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
    handleFlightResultFilter();
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
    handleFlightResultFilter();
  };

  const handleId = (value) => {
    setAirplaneId(value);
  };

  const handlePlanebtn = () => {
    setIsPlane((prev) => !prev);
  };
  const handlePricebtn = () => {
    setIsPrice((prev) => !prev);
  };
  const handleFlightDetails = () => {
    setIsOpen((prev) => !prev);
  };
  const handleDeparaturebtn = () => {
    setIsDeparature((prev) => !prev);
  };

  const flightResults = {
    airplaneDetails: {
      sourceVal,
      destinationVal,
      dayVal,
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
    flightViewDetails: {
      airplaneId,
      handleId,
      handleFlightDetails,
      isOpen,
    },
    departSortDetails: {
      isDeparature,
      handleDeparaturebtn,
      setIsEarlyMorning,
      handleEarlyMorningFilter,
      isEarlyMorning,
      isMorning,
      setIsMorning,
      handleMorningFilter,
      isAfterNoon,
      setIsAfterNoon,
      handleAfterNoonFilter,
      isEvening,
      setIsEvening,
      handleEveningFilter,
      isNight,
      setIsNight,
      handleNightFilter,
    },
    priceSortDetails: {
      handlePricebtn,
      isPrice,
    },
    planeSortDetails: {
      handlePlanebtn,
      isPlane,
    },
  };
  return (
    <FlightResultContext.Provider value={flightResults}>
      {children}
    </FlightResultContext.Provider>
  );
};

export default FlightResultProvider;
