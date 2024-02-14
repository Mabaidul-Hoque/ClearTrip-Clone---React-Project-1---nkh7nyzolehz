import React, { useEffect, useState } from "react";
import "../HotelResultPage.css";
import "./HotelDetailsPage.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../../../UseContext/AuthorizationProvider";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { OPTION } from "../../Hotels";
import { useHotelContext } from "../../../../UseContext/HotelDetailsProvider";
import { fetchSingleHotel } from "../../../../Apis/HotelDetailsApi";
import GeneralDetails from "./GeneralDetails";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import Rooms from "./Rooms";
import HotelDetailsInput from "./HotelDetailsInput";
import { ResultCheckInOutDate } from "../check-in-out-date/ResultCheckInOutDate";
import HResAddRoom from "../Hotel-navbar/HResAddRoom";
import { Stack, Typography } from "@mui/material";
import Footer from "../../../FooterPage/Footer";
import LoginPage from "../../../Login-signup/LoginPage";

const DemoPaper = styled(Paper)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: "center",
}));

const detailTopics = [
  {
    id: "general",
    name: "General",
  },
  {
    id: "amentities",
    name: "Amentities",
  },
  {
    id: "house-rules",
    name: "Rules",
  },
  {
    id: "rooms",
    name: "Rooms",
  },
];
const HotelDetailsPage = () => {
  const [topicIndx, setTopicIndx] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const { logSignDetails, tokenDetails, handleLogout, signupDetails } =
    useAuth();
  const { handleLoginOpen } = logSignDetails;
  const { token } = tokenDetails;
  const { setIsSignup } = signupDetails;
  const { hotelDetails } = useHotelContext();
  const { singleHotel, setSingleHotel } = hotelDetails;

  const navigate = useNavigate();
  const { userID } = useParams();

  // console.log("userID", userID);

  const goToPreviousImage = (images) => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage = (images) => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    fetchSingleHotel(userID).then((response) => {
      // console.log("singleHotel", response);
      setSingleHotel(response.data);
    });
  }, [userID]);

  return (
    <div className="hotel-details-page">
      <nav className="hotel-details-navbar">
        <Stack flexDirection={"column"} gap={4}>
          <div className="logo-login-section">
            <Link to="/">
              <img
                className="cleartrip-logo"
                src="https://careers.cleartrip.com/images/cleartrip/footer-logo.svg"
                alt="cleartrip-logo"
              />
            </Link>
            <div className="logo-login-middle">
              <HotelDetailsInput
                options={OPTION}
                singleHotel={singleHotel}
                optionKey={"name"}
                noOptionText={"No Match Found"}
              />
              <ResultCheckInOutDate />
              <HResAddRoom />
              <button className="update-btn">Update</button>
            </div>
            {/* log in btn */}
            <button
              onClick={() => {
                setIsSignup(false);
                token ? handleLogout() : handleLoginOpen();
              }}
              className="hotel-res-login"
            >
              {token ? "Log out" : "Log in / Sign up"}
            </button>
          </div>

          <LoginPage />

          <Stack
            flexDirection={"row"}
            alignItems={"center"}
            gap={{
              xs: 2,
              sm: 4,
            }}
            sx={{
              fontSize: "16px",
              fontWeight: "500",
              color: "#515152",
              cursor: "pointer",
            }}
            className="details-topic"
          >
            {detailTopics.map((topic, index) => (
              <a
                key={topic.id + index}
                className={topicIndx === index ? "topic active-topic" : "topic"}
                onClick={() => setTopicIndx(index)}
                href={`#${topic.id}`}
              >
                {topic.name}
              </a>
            ))}
          </Stack>
        </Stack>
      </nav>

      <div style={{ borderBottom: "1px solid gray" }}></div>
      <main className="hotel-details-main">
        <Stack
          mb={4}
          sx={{
            width: {
              xs: "90vw",
            },
          }}
          flexDirection={{
            xs: "column-reverse",
            sm: "row",
          }}
          justifyContent={"space-between"}
          alignItems={{
            xs: "center",
            sm: "flex-start",
          }}
        >
          <div className="left-details">
            <div id="general">
              <GeneralDetails singleHotel={singleHotel} />
            </div>
            <div id="amentities">
              <h2>Amentities</h2>
              <ul className="amentities-list">
                {singleHotel.amenities &&
                  singleHotel.amenities.map((data, indx) => (
                    <li className="amenty" key={data + indx}>
                      {data}
                    </li>
                  ))}
              </ul>
            </div>
            <div id="house-rules">
              <h2>Property rules</h2>
              <div className="guest-profile">
                <h5>Guest profile</h5>
                <li className="rules-list">
                  Unmarried couples are
                  {singleHotel?.houseRules?.guestProfile
                    ?.unmarriedCouplesAllowed
                    ? "allowed"
                    : "NOT allowed"}
                </li>
              </div>
              <div className="check-in-out-policy">
                <h5>Check-in Check-out Policy</h5>
                <li className="rules-list">
                  {singleHotel?.houseRules?.idProofRelated?.idProofsAccepted?.map(
                    (id, indx) => (
                      <span key={id + indx}>{id}</span>
                    )
                  )}
                  <span>are acceptable ID Proofs</span>
                </li>
                <li className="rules-list">
                  Loacl ids are{" "}
                  {singleHotel?.houseRules?.idProofRelated?.localIdsAllowed
                    ? "allowed"
                    : "NOT allowed"}
                </li>
              </div>
              <div className="restrictions">
                <h5>Restricitons</h5>
                <li className="rules-list">
                  Smoking{" "}
                  {singleHotel?.houseRules?.smokingAllowed
                    ? "allowed"
                    : "NOT allowed"}
                  within the premises
                </li>
                <li className="rules-list">
                  Pets are
                  {singleHotel?.houseRules?.petsAllowed
                    ? "allowed"
                    : "NOT allowed"}{" "}
                  at the property
                </li>
              </div>
            </div>
          </div>
          <div className="right-details">
            <div className="image-carosel">
              <button
                className="prev-btn"
                onClick={() => goToPreviousImage(singleHotel.images)}
              >
                <KeyboardArrowLeftOutlinedIcon />
              </button>
              <img
                src={
                  singleHotel.images && singleHotel.images[currentImageIndex]
                }
                alt={`Image ${currentImageIndex + 1}`}
              />

              <button
                className="next-btn"
                onClick={() => goToNextImage(singleHotel.images)}
              >
                <KeyboardArrowRightOutlinedIcon />
              </button>
            </div>
            <DemoPaper
              sx={{
                width: {
                  xs: "90vw",
                  sm: "42vw",
                },
                height: 100,
              }}
              variant="outlined"
            >
              <Stack
                flexDirection={"row"}
                alignItems={"center"}
                gap={{
                  xs: 0,
                  md: "5px",
                }}
              >
                <Typography
                  sx={{
                    fontSize: {
                      xs: "20px",
                      md: "24px",
                    },
                    ml: {
                      xs: "-1rem",
                      md: 0,
                    },
                    fontWeight: "600",
                  }}
                >
                  <CurrencyRupeeIcon style={{ marginBottom: "-4px" }} />
                  <span>{Math.ceil(singleHotel.avgCostPerNight)}</span>
                </Typography>
                <Typography
                  fontSize={{
                    xs: "10px",
                    sm: "11px",
                    md: "14px",
                  }}
                >
                  +{" "}
                  <CurrencyRupeeIcon
                    fontSize="sm"
                    style={{ marginBottom: "-2px" }}
                  />
                  500 tax / night
                </Typography>
              </Stack>
              <button className="select-room-btn">Select room</button>
            </DemoPaper>
          </div>
        </Stack>

        <Rooms singleHotel={singleHotel} />
      </main>

      <Footer />
    </div>
  );
};

export default HotelDetailsPage;
