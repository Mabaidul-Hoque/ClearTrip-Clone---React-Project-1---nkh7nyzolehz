import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
} from "react";

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
  const [flightPage, setFlightPage] = useState(1);
  const [totalResult, setTotalResult] = useState(0);

  const sourceRef = useRef(null);
  const destinationRef = useRef(null);

  useEffect(() => {
    fetchAirportNames().then((res) => {
      setAirportNames(res.data.airports);
    });

    const options = { weekday: "short", month: "short", day: "numeric" };
    const formattedDate = departDate.toLocaleDateString("en-US", options);
    setDepartDay(formattedDate);
    const formattedRDate = returnDate.toLocaleDateString("en-US", options);
    setReturnDay(formattedRDate);
  }, [departDate, returnDate]);

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
        fetchFlights(sourceVal, destinationVal, day, 5, flightPage).then(
          (response) => {
            console.log(
              "flight result page search btn ",
              response.data.flights
            );
            setAirplanes(response.data.flights);
          }
        );
      } else {
        fetchFlights(sourceVal, destinationVal, day, 5, flightPage).then(
          (response) => {
            console.log(response.data.flights);
            setAirplanes(response.data.flights);
          }
        );
      }
    } else {
      if (source === "" && destination === "") sourceRef.current.focus();
      else if (source === "") sourceRef.current.focus();
      else if (destination === "") destinationRef.current.focus();

      if (
        source !== "" &&
        destination !== "" &&
        source.substring(0, 3) === destination.substring(0, 3)
      ) {
        alert(
          "Please provide correct INPUT values, either you have encountered SAME source and destination place or airport city name isn't correct"
        );
      }
    }
  };

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

      cityNameCodes,
      setSource,
      sourceRef,
      destinationRef,
    },
    searchPlane: {
      handleSearchClick,
    },
    fecthValues: {
      airportNames,
      airplanes,
      setAirplanes,
    },
    totalFlightsVal: { totalResult, setTotalResult },
    flightPage,
    setFlightPage,
  };
  return (
    <FlightsSearchContext.Provider value={flightSearch}>
      {children}
    </FlightsSearchContext.Provider>
  );
};

export default FlightsSearchProvider;

// const encodedPath = btoa(`${source_location}-${destination_location}--${date_of_journey}--${adult}-${child}-${infant}`)

// if (pathname.includes("flight")) {

// navigate(

// `air-${encodedPath}`

// );

// } else {

// navigate(

// `flight/air-${encodedPath}`

// );

// }

// }

// am i audible

// ??

// Sahil Chopra
// 16m ago
// no

// Adarsh Rangare
// 16m ago
// yess

// air-SFlELUFNRC0tMjAyNC0wMi0wNS0tMS0wLTA=

// Sahil Chopra
// 14m ago
// const extractedEncodedPath = encodedString.replace('air-', '');

// Adarsh Rangare
// 10m ago
// AMD-HYD--2024-02-05--1-0-0

// Sahil Chopra
// 9m ago
// 'AMD-HYD--2024-02-05--1-0-0'

// Harshit Verma
// 2m ago
// state

// Adarsh Rangare
// just now
// const { searchQuery } = useParams();

// console.log({searchQuery});

// const encodedString = searchQuery ?? '' ;

// const extractedEncodedPath = encodedString.replace('air-', '');

// console.log(extractedEncodedPath);

// // console.log(encoded);

// const decodedPath = atob(extractedEncodedPath);

// console.log(decodedPath);

// const [location, date, counts] = decodedPath?.split("--");

// console.log(location,date,counts);

// const [source, dest] = location?.split("-");

// const [adult, child, infant] = counts?.split("-");
