import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
} from "react";
import { fetchFlights } from "../Apis/FlightSearchApi";
import { fetchAirportNames } from "../Apis/AirportNamesApi";
import { toast } from "react-toastify";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const FlightsSearchContext = createContext();
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
  const [source, setSource] = useState("HYD Hyderabad, IN");
  const [destination, setDestination] = useState("AMD Ahmedabad, IN");
  const [airplanes, setAirplanes] = useState([]);
  const [airportNames, setAirportNames] = useState([]);
  const [flightPage, setFlightPage] = useState(1);
  const [totalResult, setTotalResult] = useState(0);
  const [filterItems, setFilterItems] = useState({});
  const [singleFlight, setSingleFlight] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [traveller, setTraveller] = useState({adults: 1, children: 0, infants: 0});

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
    // setting in the local storage beacause via context , data is unable read in the flight result page
    localStorage.setItem("source", source);
    localStorage.setItem("destination", destination);
    localStorage.setItem("departDay", departDay);
    console.log("source", source);
    console.log("destination", destination);
    if(source !== "" && destination !== "") {
        if (
            source.substring(0, 3) !== destination.substring(0, 3) &&
            cityNameCodes.includes(source.substring(0, 3)) &&
            cityNameCodes.includes(destination.substring(0, 3)) &&
            days.includes(departDay.substring(0, 3))
        ) {
            const sourceVal = source.substring(0, 3);
            const destinationVal = destination.substring(0, 3);
            const day = departDay.substring(0, 3);
            if (sourceVal !== null && destinationVal !== null && day !== null) {
                fetchFlights(sourceVal, destinationVal, day, 5, flightPage)
                .then((response) => {
                    setAirplanes(response.data.flights);
                });
        } else {
            fetchFlights(sourceVal, destinationVal, day, 5, flightPage)
                .then((response) => {
                    setAirplanes(response.data.flights);
                });
            }
        }
    } else {
      if (source === "" || destination === "") {
        notify("Fill the details before search!");
      }
      if (
        source !== "" &&
        destination !== "" &&
        source.substring(0, 3) === destination.substring(0, 3)
      ) {
        notify("Inputs are either same or invalid!, provide correct inputs");
      }
    }
  };

  const notify = (text) => toast(text);

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
    airplaneDetails: {
      airportNames,
      setAirportNames,
      airplanes,
      setAirplanes,
    },
    filterData: {
      filterItems,
      setFilterItems,
    },
    singleFlightValue: {
      singleFlight,
      setSingleFlight,
    },
    totalFlightsVal: { totalResult, setTotalResult },
    loadingData: { isLoading, setIsLoading },
    travellerData: { traveller, setTraveller },
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
