import React, { useEffect, useMemo, useState } from "react";
import "./HotelResultPage.css";
import HotelNavbar from "./Hotel-navbar/HotelNavbar";
import { fetchHotels, fetchSingleHotel } from "../../../Apis/HotelDetailsApi";
import { useHotelContext } from "../../../UseContext/HotelDetailsProvider";
import StarsIcon from "@mui/icons-material/Stars";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { useNavigate } from "react-router-dom";

import { useDebounce } from "../../../CustomHooks/useDebouce";
import ImageCarousel from "./image-carousel/ImageCarousel";

const HotelResultPage = () => {
  const { recommededFilterInfo, hotelDetails, inputInfo } = useHotelContext();
  const {
    setSingleHotel,
    setHotels,
    hotels,
    filteredHotels,
    setFilteredHotels,
  } = hotelDetails;
  const { highLow } = recommededFilterInfo;
  const { handleInputPlaceChange } = inputInfo;

  const memoizedFilteredHotels = useMemo(
    () => filteredHotels,
    [filteredHotels]
  );

  // useEffect(() => {
  //   fetchHotels(localStorage.getItem("inputPlace")).then((resp) => {
  //     setFilteredHotels(resp.data.hotels);
  //   });
  // }, []);

  const handleSingleHotelClick = (hotelID) => {
    fetchSingleHotel(hotelID).then((response) => {
      console.log("response", response);
      setSingleHotel(response.data);
    });
  };

  console.log("filteredHotels", filteredHotels);
  return (
    <div id="hotel-result-page">
      <HotelNavbar />
      <div
        style={{ borderBottom: "1px solid #D3D3D3", marginTop: "20px" }}
      ></div>

      <main id="hotel-result-page-main">
        {memoizedFilteredHotels.length > 0 ? (
          memoizedFilteredHotels.map((hotel) => (
            <div key={hotel._id} className="hotel-card">
              {/* <div className="result-carosel">
                <button
                  className="res-prev-btn"
                  onClick={() => goToPreviousImage(hotel.images)}
                >
                  <KeyboardArrowLeftOutlinedIcon />
                </button>
                <img
                  loading="lazy"
                  src={hotel.images && hotel.images[currentImageIndex]}
                  alt={hotel.name}
                  onClick={() => {
                    handleSingleHotelClick(hotel._id);
                    navigate(`/hotels/results/${hotel._id}`);
                  }}
                />

                <button
                  className="res-next-btn"
                  onClick={() => goToNextImage(hotel.images)}
                >
                  <KeyboardArrowRightOutlinedIcon />
                </button>
              </div> */}
              <ImageCarousel
                handleSingleHotelClick={handleSingleHotelClick}
                hotel={hotel}
              />
              <div className="hotel-card-title">
                <span>{hotel.name}</span>
                <div>
                  <span>
                    <StarsIcon fontSize="sm" />
                  </span>
                  <span>{hotel.rating}/5</span>
                </div>
              </div>
              <div className="hotel-card-price">
                <span>
                  <CurrencyRupeeIcon fontSize="sm" />
                </span>
                <div>
                  {Math.ceil(hotel.avgCostPerNight)}
                  <span className="night"> / night</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1 style={{ textAlign: "center" }}>NO Hotels are Available!</h1>
          </div>
        )}
      </main>
    </div>
  );
};

export default HotelResultPage;
