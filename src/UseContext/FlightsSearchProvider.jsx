import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
} from "react";

import { useNavigate } from "react-router-dom";

import { fetchFlights } from "../Apis/FlightSearchApi";
import { fetchAirportNames } from "../Apis/AirportNamesApi";

const FlightsSearchContext = createContext();
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
export const useFlightSearch = () => {
  const context = useContext(FlightsSearchContext);
  if (!context) {
    throw new Error("something went wrong with the context");
  }
  return context;
};

export const FlightsSearchProvider = ({ children }) => {
  const [departDate, seDepartDate] = useState(new Date());
  const [returnDate, seReturnDate] = useState(new Date());
  const [departDay, setDepartDay] = useState("");
  const [returnDay, setReturnDay] = useState("");
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [airplanes, setAirplanes] = useState([]);
  const [airportNames, setAirportNames] = useState([]);

  const sourceRef = useRef(null);
  const destinationRef = useRef(null);

  const handleDepartDateChange = (date) => {
    seDepartDate(date);
  };
  const handleReturnDateChange = (date) => {
    seReturnDate(date);
  };

  const handleSourceChange = (value) => {
    setSource(value);
  };
  const handleDestinationChange = (value) => {
    setDestination(value);
  };

  const cityNameCodes = airportNames.map(
    (airportName) => airportName.iata_code
  );

  const handleSearchClick = () => {
    localStorage.setItem("source", source);
    localStorage.setItem("destination", destination);
    // localStorage.setItem("day", departDay.substring(0, 3));
    localStorage.setItem("day", departDay);

    if (
      source.substring(0, 3) !== destination.substring(0, 3) &&
      cityNameCodes.includes(source.substring(0, 3)) &&
      cityNameCodes.includes(destination.substring(0, 3)) &&
      days.includes(departDay.substring(0, 3))
    ) {
      const sourceVal = localStorage.getItem("source").substring(0, 3);
      const destinationVal = localStorage
        .getItem("destination")
        .substring(0, 3);
      const day = localStorage.getItem("day").substring(0, 3);
      if (sourceVal !== null && destinationVal !== null && day !== null) {
        fetchFlights(sourceVal, destinationVal, day).then((response) => {
          // console.log(response.data.flights);
          setAirplanes(response.data.flights);
        });
      } else {
        fetchFlights(sourceVal, destinationVal, day).then((response) => {
          // console.log(response.data.flights);
          setAirplanes(response.data.flights);
        });
      }
    } else {
      // if (source === "" && destination === "")
      //   sourceRef.current.firstChild.focus();
      // else if (source === "") sourceRef.current.firstChild.focus();
      // else if (destination === "") destinationRef.current.firstChild.focus();
    }
  };

  useEffect(() => {
    fetchAirportNames().then((res) => {
      setAirportNames(res.data.airports);
    });

    setDepartDay(
      `${days[departDate.getDay()]}  ${months[departDate.getMonth()].substring(
        0,
        3
      )} ${departDate.getDate()}`
    );
    setReturnDay(
      `${days[returnDate.getDay()]}  ${months[returnDate.getMonth()].substring(
        0,
        3
      )} ${returnDate.getDate()}`
    );
  }, [departDate, returnDate]);

  const flightSearch = {
    departvalue: {
      handleDepartDateChange,
      departDay,
      departDate,
    },
    returnValue: {
      handleReturnDateChange,
      returnDay,
      returnDate,
    },
    sourceDestValue: {
      handleSourceChange,
      handleDestinationChange,
      source,
      destination,
      sourceRef,
      destinationRef,
      cityNameCodes,
      setSource,
    },
    searchPlane: {
      handleSearchClick,
    },
    fecthValues: {
      airportNames,
      airplanes,
      setAirplanes,
    },
  };
  return (
    <FlightsSearchContext.Provider value={flightSearch}>
      {children}
    </FlightsSearchContext.Provider>
  );
};

export default FlightsSearchProvider;
