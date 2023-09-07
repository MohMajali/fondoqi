import React from "react";
import OptionsContainer from "./OptionsContainer";

const Options = ({ options, handleChange }) => {
  return (
    <div className="options">
      <div className="options-item">
        <span className="option-text">Adult</span>

        <OptionsContainer
          number={options.adult}
          handleChange={handleChange}
          type={"adult"}
        />
      </div>

      <div className="options-item">
        <span className="option-text">Children</span>
        <OptionsContainer
          number={options.children}
          handleChange={handleChange}
          type={"children"}
        />
      </div>

      <div className="options-item">
        <span className="option-text">Room</span>
        <OptionsContainer
          number={options.room}
          handleChange={handleChange}
          type={"room"}
        />
      </div>
    </div>
  );
};

export default Options;
