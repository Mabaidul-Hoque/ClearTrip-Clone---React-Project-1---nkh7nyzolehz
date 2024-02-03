import React, { useEffect, useState } from "react";
import "./HotelDetailsPage.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import DepartDate from "../../../FlightsPage/FlightSearchCard/DepartDate";
import ReturnDate from "../../../FlightsPage/FlightSearchCard/ReturnDate";
import AddRooms from "../../AddRooms";
import { useAuth } from "../../../../UseContext/AuthorizationProvider";
import HotelInputSection from "../../Hotel-search-card/HotelInputSection";
import { CheckInOutDate } from "../check-in-out-date/CheckInOutDate";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { OPTION } from "../../Hotels";
import { Button, Stack } from "@mui/material";
import { useHotelContext } from "../../../../UseContext/HotelDetailsProvider";
import { fetchSingleHotel } from "../../../../Apis/HotelDetailsApi";
import GeneralDetails from "./GeneralDetails";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import Rooms from "./Rooms";
import HotelDetailsInput from "./HotelDetailsInput";

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: "45vw",
  height: 100,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: "center",
}));

const detailTopics = ["General", "Amentities", "Rules", "Rooms"];
const HotelDetailsPage = () => {
  const [topicIndx, setTopicIndx] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const { logSignDetails, tokenDetails, handleLogout } = useAuth();
  const { handleLoginOpen, setLogInPagePath } = logSignDetails;
  const { token } = tokenDetails;
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
              <CheckInOutDate />
              <AddRooms width="13vw" height="46px" />
            </div>
            <button
              onClick={() => {
                setLogInPagePath("/hotels/results");
                token ? handleLogout() : handleLoginOpen();
                token ? navigate("/") : navigate("/login");
              }}
              className="hotel-res-login"
            >
              {token ? "Log out" : "Log in / Sign up"}
            </button>
          </div>
          <Stack
            flexDirection={"row"}
            alignItems={"center"}
            gap={4}
            sx={{
              fontSize: "16px",
              fontWeight: "500",
              color: "#515152",
              cursor: "pointer",
            }}
            className="details-topic"
          >
            {detailTopics.map((topic, index) => (
              <div
                key={topic + index}
                className={topicIndx === index ? "topic active-topic" : "topic"}
                onClick={() => setTopicIndx(index)}
              >
                {topic}
              </div>
            ))}
          </Stack>
        </Stack>
      </nav>
      <div style={{ borderBottom: "1px solid gray" }}></div>
      <main className="hotel-details-main">
        <Stack
          className="details"
          mb={4}
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"flex-start"}
        >
          <div className="left-details">
            <GeneralDetails singleHotel={singleHotel} />
            <div className="amentities">
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
            {/* <div className="house-rules">
              <h2>Property rules</h2>
              <div className="guest-profile">
                <h5>Guest profile</h5>
                <li>
                  Unmarried couples are
                  {singleHotel.houseRules.guestProfile &&
                  singleHotel.houseRules.guestProfile.unmarriedCouplesAllowed
                    ? "allowed"
                    : "NOT allowed"}
                </li>
              </div>
              <div className="check-in-out-policy">
                <h5>Check-in Check-out Policy</h5>
                <li>
                  {singleHotel.houseRules.idProofRelated &&
                    singleHotel.houseRules.idProofRelated.idProofsAccepted.map(
                      (id, indx) => <span key={id + indx}>{id}</span>
                    )}
                  <span>are acceptable ID Proofs</span>
                </li>
                <li>
                  Loacl ids are{" "}
                  {singleHotel.houseRules.idProofRelated &&
                  singleHotel.houseRules.idProofRelated.localIdsAllowed
                    ? "allowed"
                    : "NOT allowed"}
                </li>
              </div>
              <div className="restrictions">
                <h5>Restricitons</h5>
                <li>
                  Smoking{" "}
                  {singleHotel.houseRules &&
                  singleHotel.houseRules.smokingAllowed
                    ? "allowed"
                    : "NOT allowed"}
                  within the premises
                </li>
                <li>
                  Pets are
                  {singleHotel.houseRules && singleHotel.houseRules.petsAllowed
                    ? "allowed"
                    : "NOT allowed"}{" "}
                  at the property
                </li>
              </div>
            </div> */}
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
            <DemoPaper variant="outlined">
              <Stack flexDirection={"row"} alignItems={"center"} gap={"5px"}>
                <div
                  style={{
                    fontSize: "24px",
                    fontWeight: "600",
                  }}
                >
                  <CurrencyRupeeIcon style={{ marginBottom: "-4px" }} />
                  <span>{Math.ceil(singleHotel.avgCostPerNight)}</span>
                </div>
                <div>
                  <span>
                    +{" "}
                    <CurrencyRupeeIcon
                      fontSize="sm"
                      style={{ marginBottom: "-2px" }}
                    />
                    500 tax / night
                  </span>
                </div>
              </Stack>
              <button className="select-room-btn">Select room</button>
            </DemoPaper>
          </div>
        </Stack>

        <Rooms singleHotel={singleHotel} />
      </main>
    </div>
  );
};

export default HotelDetailsPage;
