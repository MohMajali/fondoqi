import React from "react";

const Footer_List = ({ ulClassName, liClassName }) => {
  return (
    <ul className={ulClassName}>
      <li className={liClassName}>Countries</li>
      <li className={liClassName}>Regions</li>
      <li className={liClassName}>Cities</li>
      <li className={liClassName}>Districts</li>
      <li className={liClassName}>Airports</li>
      <li className={liClassName}>Hotels</li>
    </ul>
  );
};

export default Footer_List;
