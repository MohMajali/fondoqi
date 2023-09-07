import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { DateRange } from "react-date-range";

const Header_Search_Date = ({ format, date, openDate, setOpenDate, setDate }) => {
  return (
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
  );
};

export default Header_Search_Date;
