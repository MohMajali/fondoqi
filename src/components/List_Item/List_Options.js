import React from "react";
import List_Item_Options from "./List_Item_Options";

const List_Options = ({ options }) => {
  return (
    <div className="list-item">
      <label>Option</label>

      <div className="list-options">
        <List_Item_Options
          divClassName={"list-options-item"}
          spanClassName={"list-option-text"}
          text={"Min price"}
          placeHolder={""}
        />

        <List_Item_Options
          divClassName={"list-options-item"}
          spanClassName={"list-option-text"}
          text={"Max price"}
          placeHolder={""}
        />

        <List_Item_Options
          divClassName={"list-options-item"}
          spanClassName={"list-option-text"}
          text={"Adult"}
          minNumber={"1"}
          placeHolder={options.adult}
        />

        <List_Item_Options
          divClassName={"list-options-item"}
          spanClassName={"list-option-text"}
          text={"Children"}
          minNumber={"0"}
          placeHolder={options.children}
        />

        <List_Item_Options
          divClassName={"list-options-item"}
          spanClassName={"list-option-text"}
          text={"Room"}
          minNumber={"1"}
          placeHolder={options.room}
        />
      </div>
    </div>
  );
};

export default List_Options;
