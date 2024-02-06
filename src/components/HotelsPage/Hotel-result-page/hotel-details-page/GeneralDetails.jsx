import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { Rating } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#ff6d75",
  },
  "& .MuiRating-iconHover": {
    color: "#ff3d47",
  },
});

const GeneralDetails = ({ singleHotel }) => {
  return (
    <>
      <h1 className="gen-header">{singleHotel.name}</h1>
      <div className="gen-sub-header">
        <span>{singleHotel.rating}-star Hotel</span>
        <span>.</span>
        <span>{singleHotel.location}</span>
      </div>
      <div className="review-rating">
        <span>{singleHotel.rating} / 5</span>
        <StyledRating
          name="customized-color"
          readOnly
          value={singleHotel?.rating ?? " "}
          getLabelText={(value) => `${value} Heart${value !== 1 ? "s" : ""}`}
          precision={0.5}
          icon={<FavoriteIcon fontSize="inherit" />}
          emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
        />
      </div>
      <div className="breakfast-plan">
        <div>Free breakfast on select plans</div>
        <p>Some plans include free breakfast</p>
      </div>
    </>
  );
};

export default GeneralDetails;
