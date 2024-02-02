import { Box, Stack, Typography } from "@mui/material";
import React, { useState, useContext, useEffect } from "react";
import SwipeableTextMobileStepper from "./SwipeableTextMobileStepper";
import { PaperCard } from "../../CustomizedCards/";
import { fetchOffers } from "../../../Apis/OffersApi";
import { OffersContext } from "../../../UseContext/OffersUrlProvider";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import "./RightSideBarStyles.css";
import Sweepper from "./Sweepper";

const RightSideBar = () => {
  const { offers, setOffers } = useContext(OffersContext);
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

  useEffect(() => {
    // fetchOffers().then((res) => {
    //   // console.log(res);
    //   setOffers(res.data.offers);
    // });
  }, []);

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

      <SwipeableTextMobileStepper offers={offers} />

      {/* More offers */}
      <Box sx={{ fontWeight: "500", fontSize: "18px" }} component="div">
        More offers
      </Box>
      {/* lower carosel */}
      <Box component="div">
        <PaperCard width="20vw" height="36vh" borderRadius="10px">
          <Box ml={"-1rem"} mt={"-1rem"} sx={{ width: "18vw" }}>
            {/* <SwipeableViews
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
            </SwipeableViews> */}

            <Sweepper
              maxSteps={maxSteps}
              activeStep={activeStep}
              handleNext={handleNext}
              handleBack={handleBack}
            />
          </Box>
        </PaperCard>
      </Box>
    </Stack>
  );
};

export default RightSideBar;
