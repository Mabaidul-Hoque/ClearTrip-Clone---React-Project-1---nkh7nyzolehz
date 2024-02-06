import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";
import { fetchHotels, fetchFilteredHotels } from "../Apis/HotelDetailsApi";
import { fetchSortByPrice } from "../Apis/HotelResulFilterApi";
import { useDebounce } from "../CustomHooks/useDebouce";

const HotelContext = createContext();

export const useHotelContext = () => {
  const context = useContext(HotelContext);
  if (!context) {
    throw new Error("something went wrong with the context");
  }
  return context;
};

export const HotelDetailsProvider = ({ children }) => {
  const [focus, setFocus] = useState(false);
  const [inputPlace, setInputPlace] = useState("");
  const [hotels, setHotels] = useState([]);
  const [singleHotel, setSingleHotel] = useState({});
  const [filterItems, setFilterItems] = useState({});
  const [hotelPage, setHotelPage] = useState(1);
  const [totalHotels, setTotalHotels] = useState(0);

  const handleInputChange = (val) => {
    setInputPlace(val);
  };
  const handleInputPlaceChange = (val) => {
    setInputPlace(val);
  };

  const handleHotelSearchBtn = () => {
    localStorage.setItem("inputPlace", inputPlace);

    fetchHotels(inputPlace, 10, hotelPage).then((resp) => {
      setTotalHotels(resp.totalResults);
      setHotels(resp.data.hotels);
    });
  };

  const handleHotelFilter = useCallback(() => {
    const JSONFilter = JSON.stringify(filterItems);
    fetchFilteredHotels(
      localStorage.getItem("inputPlace"),
      10,
      hotelPage,
      JSONFilter
    ).then((response) => {
      // console.log("response for fetchFilteredHotels", response);
      setTotalHotels(response.totalResults);
      setHotels(response.data.hotels);
    });
  }, [inputPlace, hotelPage, filterItems]);

  const hotelDetails = {
    hotelDetails: {
      hotels,
      setHotels,
      singleHotel,
      setSingleHotel,
      hotelPage,
      setHotelPage,
      totalHotels,
      setTotalHotels,
    },
    filtersData: {
      filterItems,
      setFilterItems,
      handleHotelFilter,
    },
    hotelSearchHandler: {
      handleHotelSearchBtn,
    },
    inputInfo: {
      handleInputPlaceChange,
      inputPlace,
      handleInputChange,
      focus,
      setFocus,
    },
  };

  return (
    <HotelContext.Provider value={hotelDetails}>
      {children}
    </HotelContext.Provider>
  );
};
