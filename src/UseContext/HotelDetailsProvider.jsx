import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";
import { fetchHotels } from "../Apis/HotelDetailsApi";
import {
  fetchFilteredHotels,
  fetchSortByPrice,
} from "../Apis/HotelResulFilterApi";
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
  const [topRated, setTopRated] = useState(false);
  const [highLow, sethighLow] = useState(false);
  const [lowHigh, setLowHigh] = useState(false);
  const [fiveStar, setFiveStar] = useState(false);
  const [fourStar, setFourStar] = useState(false);
  const [threeStar, setThreeStar] = useState(false);
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [inputPlace, setInputPlace] = useState("");
  const [hotels, setHotels] = useState([]);
  const [singleHotel, setSingleHotel] = useState({});
  const [filterItems, setFilterItems] = useState({});
  const [price, setPrice] = useState(0);
  const [hotelPrice, setHotelPrice] = useState(10000);

  const [hotelPage, setHotelPage] = useState(1);

  // const hotelPriceDebounce = useDebounce(filterItems, 500);

  const handleInputChange = (val) => {
    setInputPlace(val);
  };
  const handleInputPlaceChange = (val) => {
    setInputPlace(val);
  };

  const handleHotelSearchBtn = () => {
    localStorage.setItem("inputPlace", inputPlace);

    fetchHotels(inputPlace, 10, hotelPage).then((resp) => {
      setHotels(resp.data.hotels);
    });
  };

  const handleFilterbyPrice = useCallback(() => {
    fetchSortByPrice(
      localStorage.getItem("inputPlace"),
      10,
      hotelPage,
      price
    ).then((resp) => {
      // console.log("hotels by price high to low  ", resp);
      setFilteredHotels(resp.data.hotels);
    });
  }, [inputPlace, price, hotelPage]);

  const handleHotelFilter = useCallback(() => {
    const JSONFilter = JSON.stringify(filterItems);
    fetchFilteredHotels(
      localStorage.getItem("inputPlace"),
      10,
      hotelPage,
      JSONFilter
    ).then((response) => {
      // console.log("response for fetchFilteredHotels", response);

      setFilteredHotels(response.data.hotels);
    });
  }, [inputPlace, hotelPage, filterItems]);

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
  // usecallback
  const handleLowHighBtn = () => {
    setPrice(1);
  };
  // usememo
  const hotelDetails = {
    hotelDetails: {
      filteredHotels,
      setFilteredHotels,
      hotels,
      setHotels,
      singleHotel,
      setSingleHotel,
      hotelPage,
      setHotelPage,
    },
    hotelSearchHandler: {
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
