import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";
import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import Buttons from "../Button/Buttons";
import { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";

const Header = () => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

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
          <div className="header-search-item">
            <FontAwesomeIcon icon={faBed} className="header-icon" />
            <input
              type="text"
              placeholder="where are you going"
              className="header-search-input"
            />
          </div>

          <div className="header-search-item">
            <FontAwesomeIcon icon={faCalendarDays} className="header-icon" />
            <span
              onClick={() => setOpenDate(!openDate)}
              className="header-search-text"
            >{`${format(date[0]?.startDate, "MM/dd/yyy")} to ${format(
              date[0]?.endDate,
              "MM/dd/yyy"
            )}`}</span>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="date"
              />
            )}
          </div>

          <div className="header-search-item">
            <FontAwesomeIcon icon={faPerson} className="header-icon" />
            <span className="header-search-text">
              2 adults 2 children 1 room
            </span>
          </div>

          <div className="header-search-item">
            <Buttons className={"header-btn"} text={"Search"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
