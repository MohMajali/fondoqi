import React from "react";

const List_Item_Destination = ({
  divClassName,
  labelClassName,
  destination,
}) => {
  return (
    <div className={divClassName}>
      <label className={labelClassName}>Destination</label>
      <input type="text" placeholder={destination} />
    </div>
  );
};

export default List_Item_Destination;
