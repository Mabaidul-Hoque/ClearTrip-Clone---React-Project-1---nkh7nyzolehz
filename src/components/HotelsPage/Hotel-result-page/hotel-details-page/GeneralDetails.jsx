import { Rating } from "@mui/material";
import React from "react";

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
        <span>
          <Rating name="read-only" value={singleHotel.rating} readOnly />
        </span>
      </div>
      <div className="breakfast-plan">
        <div>Free breakfast on select plans</div>
        <p>Some plans include free breakfast</p>
      </div>
    </>
  );
};

export default GeneralDetails;
