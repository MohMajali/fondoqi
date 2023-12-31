import { faBed } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Header_Search_Where = ({ onChange }) => {
  return (
    <div className="header-search-item">
      <FontAwesomeIcon icon={faBed} className="header-icon" />
      <input
        type="text"
        placeholder="where are you going"
        className="header-search-input"
        onChange={onChange}
      />
    </div>
  );
};

export default Header_Search_Where;
