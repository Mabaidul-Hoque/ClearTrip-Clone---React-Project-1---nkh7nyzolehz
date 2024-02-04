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
import { Pagination, Stack } from "@mui/material";

const HotelResultPage = () => {
  // const [demoCount, setDemoCount] = useState(0);
  const { hotelSearchHandler, recommededFilterInfo, hotelDetails, inputInfo } =
    useHotelContext();
  const {
    setSingleHotel,
    setHotels,
    hotels,
    filteredHotels,
    setFilteredHotels,
    hotelPage,
    setHotelPage,
  } = hotelDetails;
  const { handleHotelFilter } = recommededFilterInfo;
  const { handleInputPlaceChange } = inputInfo;
  const { handleHotelSearchBtn } = hotelSearchHandler;

  const memoizedFilteredHotels = useMemo(
    () => filteredHotels,
    [filteredHotels]
  );

  // const memoizedHotels = useMemo(
  //   () => filteredHotels,
  //   [filteredHotels]
  // );

  useEffect(() => {
    // setDemoCount((prev) => prev + 1);
    // handleHotelSearchBtn();
    handleHotelFilter();
  }, [hotelPage]);

  const handleSingleHotelClick = (hotelID) => {
    fetchSingleHotel(hotelID).then((response) => {
      // console.log("response", response);
      setSingleHotel(response.data);
    });
  };

  // console.log("filteredHotels", filteredHotels);
  // console.log("demoCount", demoCount);
  // console.log("Hotels", hotels);

  const handleChange = (event, value) => {
    setHotelPage(value);
  };

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

      <Stack mt={4} mb={4} flexDirection={"row"} justifyContent={"center"}>
        <div>
          <Pagination
            count={5}
            color="primary"
            page={hotelPage}
            onChange={handleChange}
          />
        </div>
      </Stack>
    </div>
  );
};

export default HotelResultPage;
