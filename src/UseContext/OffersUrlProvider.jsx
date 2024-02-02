import React, { createContext, useState } from "react";
import { fetchOffers } from "../Apis/OffersApi";

export const OffersContext = createContext();

export const OffersUrlProvider = ({ children }) => {
  const [offers, setOffers] = useState([]);
  const [offersUrlFilter, setOffersUrlFilter] = useState("ALL");

  const handleFlightBtn = () => {
    // let type = "";

    // if (offersUrlFilter === "ALL") type = "ALL";
    // else if (offersUrlFilter === "FLIGHTS") type = "FLIGHTS";
    // else if (offersUrlFilter === "HOTELS") type = "HOTELS";

    // if (type !== undefined || type !== "") {
    fetchOffers().then((res) => {
      console.log(res);
      setOffers(res.data.offers);
    });
    // }
  };

  const offersValue = {
    offersUrlFilter,
    setOffersUrlFilter,
    handleFlightBtn,
    offers,
    setOffers,
  };
  return (
    <OffersContext.Provider value={offersValue}>
      {children}
    </OffersContext.Provider>
  );
};
