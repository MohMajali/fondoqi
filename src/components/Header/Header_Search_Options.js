import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Options from "../OptionsContainer/Options";
import { faPerson } from "@fortawesome/free-solid-svg-icons";

const Header_Search_Options = ({
  setOpenOptions,
  openOptions,
  options,
  handleChange,
}) => {
  return (
    <div className="header-search-item">
      <FontAwesomeIcon icon={faPerson} className="header-icon" />
      <span
        onClick={() => {
          setOpenOptions(!openOptions);
        }}
        className="header-search-text"
      >
        {`${options.adult} adult . ${options.children} children . ${options.room} room`}
      </span>

      {openOptions && <Options options={options} handleChange={handleChange} />}
    </div>
  );
};

export default Header_Search_Options;
