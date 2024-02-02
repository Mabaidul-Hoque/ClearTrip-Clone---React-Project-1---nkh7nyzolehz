import React, { useState, memo } from "react";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { Typography, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./RightSideBarStyles.css";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const SwipeableTextMobileStepper = memo((props) => {
  const { offers } = props;
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = Math.abs(offers.length - 10);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ width: "20vw" }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {offers.map((offer, index) => (
          <div key={offer.id}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Link className="offer-card" to={"#"}>
                <Box
                  component="img"
                  sx={{
                    height: 210,
                    display: "block",
                    maxWidth: 400,
                    overflow: "hidden",
                    width: "100%",
                    borderRadius: "10px",
                  }}
                  src={offer.hero ? offer.heroUrl : offer.newHeroUrl}
                  alt={offer.pTx}
                />
                <Box width={"90%"} pl={3} pt={0} className="offer-card-texts">
                  <Typography
                    sx={{ fontSize: "16px", color: "whitesmoke" }}
                    variant="h6"
                  >
                    {offer.pTl}
                  </Typography>
                  <Typography sx={{ fontSize: "12px" }} variant="h6">
                    {offer.pTx}
                  </Typography>
                  <Typography sx={{ fontSize: "12px" }} variant="h6">
                    {offer.offerPersuasion}
                  </Typography>
                  <ArrowForwardOutlinedIcon
                    sx={{
                      position: "absolute",
                      left: "6rem",
                      bottom: "-0.2rem",
                    }}
                  />
                </Box>
              </Link>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        className="css-rh92k-MuiPaper-root-MuiMobileStepper-root"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft htmlColor="#FFFFFF" />
            ) : (
              <KeyboardArrowRight htmlColor="#FFFFFF" />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight htmlColor="#FFFFFF" />
            ) : (
              <KeyboardArrowLeft htmlColor="#FFFFFF" />
            )}
          </Button>
        }
      />
    </Box>
  );
});

export default SwipeableTextMobileStepper;
