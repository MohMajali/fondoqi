import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";
import {
  faBed,
  faCar,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import Buttons from "../Button/Buttons";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import Header_Search_Options from "./Header_Search_Options";
import Header_Search_Date from "./Header_Search_Date";
import Header_Search_Where from "./Header_Search_Where";

const Header = () => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleChange = (type, op) => {
    setOptions((prev) => {
      return {
        ...prev,
        [type]: op === "i" ? options[type] + 1 : options[type] - 1,
      };
    });
  };

  return (
    <div className="header">
      <div className="header-container">
        <div className="header-list">
          <div className="header-list-item active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="header-list-item">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="header-list-item">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className="header-list-item">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className="header-list-item">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
        </div>
        <h1 className="header-title">A lifetime of discounts? It's Genius</h1>
        <p className="header-desc">
          lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
          lorem lorem lorem lorem lorem lorem lorem lorem
        </p>
        <Buttons className={"header-btn"} text={"Sign in / Register"} />
        <div className="header-search">
            
          <Header_Search_Where />

          <Header_Search_Date
            date={date}
            format={format}
            openDate={openDate}
            setOpenDate={setOpenDate}
            setDate={setDate}
          />

          <Header_Search_Options
            handleChange={handleChange}
            openOptions={openOptions}
            options={options}
            setOpenOptions={setOpenOptions}
          />

          <div className="header-search-item">
            <Buttons className={"header-btn"} text={"Search"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
