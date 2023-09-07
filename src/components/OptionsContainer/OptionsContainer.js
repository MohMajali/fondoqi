import React from "react";
import Buttons from "../Button/Buttons";

const OptionsContainer = ({ number, handleChange, type }) => {
  return (
    <div className="options-counter">
      <Buttons
        number={number}
        className={"option-counter-button"}
        text={"-"}
        onClick={() => handleChange(type, "d")}
      />
      <span className="option-counter-number">{number}</span>
      <Buttons
        className={"option-counter-button"}
        text={"+"}
        onClick={() => handleChange(type, "i")}
      />
    </div>
  );
};

export default OptionsContainer;
