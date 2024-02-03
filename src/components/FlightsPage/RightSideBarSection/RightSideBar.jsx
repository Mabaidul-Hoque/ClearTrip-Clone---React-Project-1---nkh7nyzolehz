import { Box, Paper, Stack, Typography } from "@mui/material";
import React, { useState, useContext, useEffect } from "react";
import { PaperCard } from "../../CustomizedCards/";
import { OffersContext } from "../../../UseContext/OfferDetailsProvider";
import "./RightSideBarStyles.css";
import Sweepper from "./Sweepper";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";

const RightSideBar = () => {
  const [upCurrentIndex, setUpCurrentIndex] = useState(0);
  const [downCurrentIndex, setDownCurrentIndex] = useState(0);
  const { offers } = useContext(OffersContext);
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = Math.abs(offers.length - 10);

  const { handleOfferFecth } = useContext(OffersContext);

  console.log("offers", offers);

  useEffect(() => {
    handleOfferFecth();
  }, []);

  // const goToPreviousImage = () => {
  //   setCurrentImageIndex((prevIndex) =>
  //     prevIndex === 0 ? offers.length - 1 : prevIndex - 1
  //   );
  // };

  // const goToNextImage = () => {
  //   setCurrentImageIndex((prevIndex) =>
  //     prevIndex === offers.length - 1 ? 0 : prevIndex + 1
  //   );
  // };

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

  // const handleStepChange = (step) => {
  //   setActiveStep(step);
  // };

  return (
    <Stack
      direction={"column"}
      justifyContent={"flex-start"}
      textAlign={"left"}
      gap={"1rem"}
      sx={{ pl: "1.6rem" }}
      component="div"
    >
      {/* upper carosel */}

      {/* More offers */}

      {/* lower carosel */}
      {/* <Box component="div"> */}
      {/* <PaperCard width="20vw" height="36vh" borderRadius="10px"> */}
      {/* <Box ml={"-1rem"} mt={"-1rem"} sx={{ width: "18vw" }}>
            <SwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
              className="more-offer"
            >
              {offers.map((offer, index) => (
                <div key={offer.id}>
                  {Math.abs(activeStep - index) <= 2 ? (
                    <Box
                      pt={3}
                      pl={2}
                      pr={2}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.6rem",
                      }}
                    >
                      <Typography
                        sx={{ fontSize: "16px", fontWeight: "500" }}
                        variant="h6"
                      >
                        {offer.pTl}
                      </Typography>
                      <Typography sx={{ fontSize: "12px" }} variant="h6">
                        {offer.pTx}
                      </Typography>

                      <Link
                        style={{
                          textDecoration: "none",
                          color: "#3F6FCF",
                          fontWeight: "500",
                          paddingTop: "0.5rem",
                        }}
                        className="offer-card"
                        to={"#"}
                      >
                        Know more
                      </Link>
                    </Box>
                  ) : null}
                </div>
              ))}
            </SwipeableViews>

            <Sweepper
              maxSteps={maxSteps}
              activeStep={activeStep}
              handleNext={handleNext}
              handleBack={handleBack}
            />
          </Box> */}

      {/* <div className="offer-carosel">
            {offers.map((offer, indx) => (
              <Box
                key={offer + indx}
                pt={3}
                pl={2}
                pr={2}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.6rem",
                }}
              >
                <button
                  className="prev-btn"
                  onClick={() => goToPreviousImage()}
                >
                  <KeyboardArrowLeftOutlinedIcon />
                </button>
                <div>
                  <Typography
                    sx={{ fontSize: "16px", fontWeight: "500" }}
                    variant="h6"
                  >
                    {offer.pTl}
                  </Typography>
                  <Typography sx={{ fontSize: "12px" }} variant="h6">
                    {offer.pTx}
                  </Typography>

                  <Typography
                    sx={{
                      textDecoration: "none",
                      color: "#3F6FCF",
                      fontWeight: "500",
                      paddingTop: "0.5rem",
                    }}
                    className="offer-card"
                  >
                    Know more
                  </Typography>
                </div>

                <button className="next-btn" onClick={() => goToNextImage()}>
                  <KeyboardArrowRightOutlinedIcon />
                </button>
              </Box>
            ))}
          </div> */}
      {/* </PaperCard> */}
      {/* </Box> */}

      <div className="carousel-container-up">
        <button className="up-prev-btn" onClick={handlePrevUp}>
          <KeyboardArrowLeftOutlinedIcon />
        </button>
        <div className="carousel-up">
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
        </div>
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
              <div>
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
