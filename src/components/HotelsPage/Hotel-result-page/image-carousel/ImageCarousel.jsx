import React, { useState } from "react";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import { useNavigate } from "react-router-dom";

const ImageCarousel = ({ hotel, handleSingleHotelClick }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const navigate = useNavigate();

  const goToPreviousImage = (images) => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const goToNextImage = (images) => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="result-carosel">
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
    </div>
  );
};

export default ImageCarousel;
