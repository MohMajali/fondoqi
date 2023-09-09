import React from "react";
import Buttons from "../Button/Buttons";

const Hotel_Prices = () => {
  return (
    <div className="hotel-details-prices">
      <h1>Perfect for a 9-night stay!</h1>
      <span>
        Located in the real heart of Krakow, this property has an excellent
        location score of 9.8!
      </span>
      <h2>
        <b>$945</b> (9 nights)
      </h2>
      <Buttons text={"Reserve or Book Now!"} />
    </div>
  );
};

export default Hotel_Prices;
