import React from "react";
import Buttons from "../Button/Buttons";

const Search_Item_Details = () => {
  return (
    <div className="search-item-details">
      <div className="search-item-rating">
        <span className="">Excellent</span>
        <Buttons text={"8.9"} />
      </div>
      <div className="search-item-details-texts">
        <span className="search-item-details-texts-price">$123</span>
        <span className="search-item-details-texts-taxiOp">
          Includes taxes and fees
        </span>
        <Buttons
          text={"See availability"}
          className={"search-item-check-button"}
        />
      </div>
    </div>
  );
};

export default Search_Item_Details;
