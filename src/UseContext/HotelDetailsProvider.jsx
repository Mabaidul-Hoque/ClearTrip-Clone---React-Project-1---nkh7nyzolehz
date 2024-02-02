import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
} from "react";
import { fetchHotels } from "../Apis/HotelDetailsApi";
import {
  fetchFilteredHotels,
  fetchSortByPrice,
} from "../Apis/HotelResulFilterApi";

const HotelContext = createContext();

export const useHotelContext = () => {
  const context = useContext(HotelContext);
  if (!context) {
    throw new Error("something went wrong with the context");
  }
  return context;
};

export const HotelDetailsProvider = ({ children }) => {
  const [topRated, setTopRated] = useState(false);
  const [highLow, sethighLow] = useState(false);
  const [lowHigh, setLowHigh] = useState(false);
  const [fiveStar, setFiveStar] = useState(false);
  const [fourStar, setFourStar] = useState(false);
  const [threeStar, setThreeStar] = useState(false);
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [focus, setFocus] = useState(false);
  const [inputPlace, setInputPlace] = useState("");
  const [hotels, setHotels] = useState([]);
  const [singleHotel, setSingleHotel] = useState({});
  const [filterItems, setFilterItems] = useState({});
  const [price, setPrice] = useState(0);
  const [hotelPrice, setHotelPrice] = useState(10000);

  const handleInputChange = (val) => {
    setInputPlace(val);
  };

  const handleHotelSearchBtn = () => {
    localStorage.setItem("inputPlace", inputPlace);

    fetchHotels(inputPlace).then((resp) => {
      setHotels(resp.data.hotels);
    });
  };

  const handleInputPlaceChange = (val) => {
    setInputPlace(val);
  };
  const handleFocus = (val) => {
    setFocus(val);
  };

  const handleFilterbyPrice = () => {
    fetchSortByPrice(localStorage.getItem("inputPlace"), price).then((resp) => {
      // console.log("hotels by price high to low  ", resp);
      setFilteredHotels(resp.data.hotels);
    });
  };
  const handleHotelFilter = () => {
    const JSONFilter = JSON.stringify(filterItems);
    fetchFilteredHotels(localStorage.getItem("inputPlace"), JSONFilter).then(
      (response) => {
        console.log("response for fetchFilteredHotels", response);
        setFilteredHotels(response.data.hotels);
      }
    );
  };

  const handleHotelPrice = () => {
    if (hotelPrice >= 1000 && hotelPrice <= 10000) {
      filterItems.avgCostPerNight = {
        $lte: hotelPrice,
        $gte: 1000,
      };
    }
  };

  const handleFiveStar = () => {
    filterItems.rating = 5;
  };
  const handleFourStar = () => {
    filterItems.rating = 4;
  };

  const handleThreeStar = () => {
    filterItems.rating = 3;
  };

  const handleHighLowBtn = () => {
    setPrice(-1);
  };
  const handleLowHighBtn = () => {
    setPrice(1);
  };

  const hotelDetails = {
    hotelDetails: {
      filteredHotels,
      setFilteredHotels,
      hotels,
      setHotels,
      singleHotel,
      setSingleHotel,
    },
    hotelFecthValues: {
      handleHotelSearchBtn,
    },

    recommededFilterInfo: {
      handleFilterbyPrice,
      handleHotelFilter,
      topRated,
      setTopRated,
      highLow,
      sethighLow,
      lowHigh,
      setLowHigh,
      handleHighLowBtn,
      handleLowHighBtn,
      filterItems,
    },
    filterbyPriceInfo: {
      hotelPrice,
      setHotelPrice,
      handleHotelPrice,
    },
    starFilterInfo: {
      fiveStar,
      setFiveStar,
      fourStar,
      setFourStar,
      threeStar,
      setThreeStar,
      handleFiveStar,
      handleFourStar,
      handleThreeStar,
    },

    inputInfo: {
      handleInputPlaceChange,
      inputPlace,
      handleInputChange,
      handleFocus,
      focus,
    },
  };

  return (
    <HotelContext.Provider value={hotelDetails}>
      {children}
    </HotelContext.Provider>
  );
};
