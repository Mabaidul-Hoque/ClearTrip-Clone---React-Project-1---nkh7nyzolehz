import {
  Box,
  Paper,
  Stack,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import React, { useState, useContext, useEffect } from "react";
import { OffersContext } from "../../../UseContext/OfferDetailsProvider";
import "./RightSideBarStyles.css";
import "../../../styles/App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";

const RightSideBar = () => {
  const [upCurrentIndex, setUpCurrentIndex] = useState(0);
  const [downCurrentIndex, setDownCurrentIndex] = useState(0);
  const { offers } = useContext(OffersContext);
  const { handleOfferFecth } = useContext(OffersContext);

  useEffect(() => {
    handleOfferFecth();
  }, []);

  const handleNextUp = () => {
    setUpCurrentIndex((prevIndex) =>
      prevIndex === offers.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevUp = () => {
    setUpCurrentIndex((prevIndex) =>
      prevIndex === 0 ? offers.length - 1 : prevIndex - 1
    );
  };

  const handleNextDown = () => {
    setDownCurrentIndex((prevIndex) =>
      prevIndex === offers.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevDown = () => {
    setDownCurrentIndex((prevIndex) =>
      prevIndex === 0 ? offers.length - 1 : prevIndex - 1
    );
  };

  return (
    <Stack
      sx={{
        display: {
          xs: "none",
          sm: "none",
          md: "flex",
        },
      }}
      justifyContent={"center"}
      gap={1}
    >
      <div className="carousel-container-up">
        <button className="up-prev-btn" onClick={handlePrevUp}>
          <KeyboardArrowLeftOutlinedIcon />
        </button>
        {/* <div className="carousel-up"> */}
        {offers.map((offer, index) => (
          <Paper
            key={offer._id}
            className={`carousel-item-up ${
              index === upCurrentIndex ? "active-up" : "inActive"
            }`}
          >
            <img src={offer.heroUrl} alt={offer.pTl} />
            <div className="offer-details">
              <h4>{offer.pTl}</h4>
              <p>{offer.pTx}</p>
              <button>{offer.ctaText}</button>
            </div>
          </Paper>
        ))}
        {/* </div> */}
        <button className="up-next-btn" onClick={handleNextUp}>
          <KeyboardArrowRightOutlinedIcon />
        </button>
      </div>

      <Box sx={{ fontWeight: "500", fontSize: "18px" }} component="div">
        More offers
      </Box>

      <div className="carousel-container-down">
        <button className="down-prev-btn" onClick={handlePrevDown}>
          <KeyboardArrowLeftOutlinedIcon htmlColor="blue" />
        </button>
        <div className="carousel-down">
          {offers.map((offer, index) => (
            <Paper
              key={offer._id}
              className={`carousel-item-down ${
                index === downCurrentIndex ? "active-down" : "inActive"
              }`}
            >
              <div className="offer-details-down">
                <h3>{offer.pTl}</h3>
                <p>{offer.pTx}</p>
                <button className="know-more-btn">Know more</button>
              </div>
            </Paper>
          ))}
        </div>
        <button className="down-next-btn" onClick={handleNextDown}>
          <KeyboardArrowRightOutlinedIcon htmlColor="blue" />
        </button>
      </div>
    </Stack>
  );
};

export default RightSideBar;
