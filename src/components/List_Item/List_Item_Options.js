import React from "react";

const List_Item_Options = ({
  divClassName,
  spanClassName,
  text,
  placeHolder,
  minNumber,
}) => {
  return (
    <div className={divClassName}>
      <span className={spanClassName}>
        {`${text} `}
        {text === "Adult" || text === "Children" || text === "Room" ? (
          <></>
        ) : (
          <small>per night</small>
        )}
      </span>
      <input
        type="number"
        min={minNumber}
        className="list-option-input"
        placeholder={placeHolder}
      />
    </div>
  );
};

export default List_Item_Options;
