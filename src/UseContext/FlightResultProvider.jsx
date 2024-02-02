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
  const [stop, setStop] = useState(true);
  const [nonStop, setNonStop] = useState(false);
  const [oneStop, setOneStop] = useState(false);
  const [twoStop, setTwoStop] = useState(false);
  const [isDeparature, setIsDeparature] = useState(true);
  const [isEarlyMorning, setIsEarlyMorning] = useState(false);
  const [isMorning, setIsMorning] = useState(false);
  const [isAfterNoon, setIsAfterNoon] = useState(false);
  const [isEvening, setIsEvening] = useState(false);
  const [isNight, setIsNight] = useState(false);
  const [isPrice, setIsPrice] = useState(true);
  const [rupee, setRupee] = useState(3000);
  const [filteredAirplanes, setFilteredAirplanes] = useState([]);
  const [filterItems, setFilterItems] = useState({});

  const sourceVal = useRef(localStorage.getItem("source").substring(0, 3));
  const destinationVal = useRef(
    localStorage.getItem("destination").substring(0, 3)
  );
  const dayVal = useRef(localStorage.getItem("day").substring(0, 3));

  const contextValues = useFlightSearch();
  const { airplanes, setAirplanes } = contextValues.fecthValues;

  useEffect(() => {
    const JSONFilter = JSON.stringify(filterItems);
    fetchFilteredFlights(
      sourceVal.current,
      destinationVal.current,
      dayVal.current,
      JSONFilter
    ).then((response) => {
      console.log("fetch filtered flights", response.data.flights);
      setFilteredAirplanes(response.data.flights);
    });
  }, [
    nonStop,
    oneStop,
    twoStop,
    isEarlyMorning,
    isMorning,
    isAfterNoon,
    isEvening,
    isNight,
    rupee,
  ]);

  // const findMaxMinPriceFlight = () => {
  //   const ticketPrices = airplanes.map((flight) => flight.ticketPrice);
  //   const maxTicketPrice = Math.max(...ticketPrices);
  //   const minTicketPrice = Math.min(...ticketPrices);
  //   setMaxTicketPrice(maxTicketPrice);
  //   setMinTicketPrice(minTicketPrice);
  // };

  const handlePriceFilter = () => {
    if (rupee >= 1000 && rupee <= 10000) {
      filterItems.ticketPrice = {
        $lte: rupee,
        $gte: 1000,
      };
    }
  };

  const handlePriceChnage = (price) => {
    setRupee(price);
  };
  const handleNightFilter = () => {
    if (!isNight) {
      filterItems.departureTime = {
        $lte: "23:59",
        $gte: "20:00",
      };

      // fetchFlightsByDepartTime(
      //   sourceVal.current,
      //   destinationVal.current,
      //   dayVal.current,
      //   "20:00",
      //   "23:59"
      // ).then((response) => {
      //   console.log("response from night only", response);
      //   setFilteredAirplanes(response.data.flights);
      // });
    } else {
      delete filterItems["departureTime"];
      //   setFilteredAirplanes((prev) => {
      //     return prev.filter((flight) => {
      //       const departureTime = new Date(`1970-01-01T${flight.departureTime}`);
      //       const eightPM = new Date(`1970-01-01T20:00`);
      //       const midNight = new Date(`1970-01-01T23:59`);
      //       return departureTime < eightPM || departureTime > midNight;
      //     });
      //   });
    }
  };
  const handleEveningFilter = () => {
    if (!isEvening) {
      filterItems.departureTime = {
        $lte: "19:59",
        $gte: "16:00",
      };

      // fetchFlightsByDepartTime(
      //   sourceVal.current,
      //   destinationVal.current,
      //   dayVal.current,
      //   "16:00",
      //   "19:59"
      // ).then((response) => {
      //   setFilteredAirplanes(response.data.flights);
      // });
    } else {
      delete filterItems["departureTime"];
      //   setFilteredAirplanes((prev) => {
      //     return prev.filter((flight) => {
      //       const departureTime = new Date(`1970-01-01T${flight.departureTime}`);
      //       const foruPM = new Date(`1970-01-01T16:00`);
      //       const eightPM = new Date(`1970-01-01T19:59`);
      //       return departureTime < foruPM || departureTime > eightPM;
      //     });
      //   });
    }
  };
  const handleAfterNoonFilter = () => {
    if (!isAfterNoon) {
      filterItems.departureTime = {
        $lte: "15:59",
        $gte: "12:00",
      };

      // fetchFlightsByDepartTime(
      //   sourceVal.current,
      //   destinationVal.current,
      //   dayVal.current,
      //   "12:00",
      //   "15:59"
      // ).then((response) => {
      //   setFilteredAirplanes(response.data.flights);
      // });
    } else {
      delete filterItems["departureTime"];
      //   setFilteredAirplanes((prev) => {
      //     return prev.filter((flight) => {
      //       const departureTime = new Date(`1970-01-01T${flight.departureTime}`);
      //       const noon = new Date(`1970-01-01T12:00`);
      //       const foruPM = new Date(`1970-01-01T15:59`);
      //       return departureTime < noon || departureTime > foruPM;
      //     });
      //   });
    }
  };
  const handleMorningFilter = () => {
    if (!isMorning) {
      filterItems.departureTime = {
        $lte: "11:59",
        $gte: "08:00",
      };
      // fetchFlightsByDepartTime(
      //   sourceVal.current,
      //   destinationVal.current,
      //   dayVal.current,
      //   "08:00",
      //   "11:59"
      // ).then((response) => {
      //   setFilteredAirplanes(response.data.flights);
      // });
    } else {
      delete filterItems["departureTime"];
      //   setFilteredAirplanes((prev) => {
      //     return prev.filter((flight) => {
      //       const departureTime = new Date(`1970-01-01T${flight.departureTime}`);
      //       const earlymorning = new Date(`1970-01-01T08:00`);
      //       const noon = new Date(`1970-01-01T11:59`);
      //       return departureTime < earlymorning || departureTime > noon;
      //     });
      //   });
    }
  };
  const handleEarlyMorningFilter = () => {
    if (!isEarlyMorning) {
      filterItems.departureTime = {
        $lte: "07:59",
        $gte: "00:00",
      };

      // fetchFlightsByDepartTime(
      //   sourceVal.current,
      //   destinationVal.current,
      //   dayVal.current,
      //   "00:00",
      //   "07:59"
      // ).then((response) => {
      //   setFilteredAirplanes(response.data.flights);
      // });
    } else {
      delete filterItems["departureTime"];
      //   setFilteredAirplanes((prev) => {
      //     return prev.filter((flight) => {
      //       const departureTime = new Date(`1970-01-01T${flight.departureTime}`);
      //       const midnight = new Date(`1970-01-01T00:00`);
      //       const eightAM = new Date(`1970-01-01T07:59`);
      //       return departureTime < midnight || departureTime > eightAM;
      //     });
      //   });
    }
  };

  const handleNonStopFilter = () => {
    if (!nonStop) {
      filterItems.stops = "0";
      // fetchFlightsFilterByStops(
      //   sourceVal.current,
      //   destinationVal.current,
      //   dayVal.current,
      //   0
      // ).then((response) => {
      //   setFilteredAirplanes(response.data.flights);
      // });
    } else {
      delete filterItems["stops"];
      // setFilteredAirplanes(() =>
      //   filteredAirplanes.filter((data) => data.stops !== 0)
      // );
    }
  };

  const handleOneStopFilter = () => {
    if (!oneStop) {
      filterItems.stops = "1";
      // fetchFlightsFilterByStops(
      //   sourceVal.current,
      //   destinationVal.current,
      //   dayVal.current,
      //   1
      // ).then((response) => {
      //   setFilteredAirplanes(response.data.flights);
      // });
    } else {
      delete filterItems["stops"];
      //   setFilteredAirplanes(() =>
      //     filteredAirplanes.filter((data) => data.stops !== 1)
      //   );
    }
  };

  const handleTwoStopFilter = () => {
    if (!twoStop) {
      filterItems.stops = "2";
      // fetchFlightsFilterByStops(
      //   sourceVal.current,
      //   destinationVal.current,
      //   dayVal.current,
      //   2
      // ).then((response) => {
      //   setFilteredAirplanes(response.data.flights);
      // });
    } else {
      delete filterItems["stops"];
      //   setFilteredAirplanes(() =>
      //     filteredAirplanes.filter((data) => data.stops !== 2)
      //   );
    }
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
  const handleStopBnt = () => {
    setStop((prev) => !prev);
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
    },
    flightViewDetails: {
      airplaneId,
      handleId,
      handleFlightDetails,
      isOpen,
    },

    stopsSortDetails: {
      stop,
      handleStopBnt,
      nonStop,
      oneStop,
      twoStop,
      setNonStop,
      setOneStop,
      setTwoStop,
      handleNonStopFilter,
      handleTwoStopFilter,
      handleOneStopFilter,
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
      handlePriceChnage,
      rupee,
      handlePriceFilter,
      // maxTicketPrice,
      // minTicketPrice,
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
