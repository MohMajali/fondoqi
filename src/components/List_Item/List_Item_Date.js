import React from "react";
import { DateRange } from "react-date-range";

const List_Item_Date = ({
  divClassName,
  setOpenDate,
  openDate,
  format,
  date,
  setDate,
}) => {
  return (
    <div className="list-item">
      <label className="">Check-in Date</label>
      <span className="" onClick={() => setOpenDate(!openDate)}>
        {`${format(date[0]?.startDate, "MM/dd/yyy")} to 
        ${format(date[0]?.endDate, "MM/dd/yyy")}`}
      </span>

      {openDate && (
        <DateRange
          minDate={new Date()}
          editableDateInputs={true}
          onChange={(item) => setDate([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={date}
        />
      )}
    </div>
  );
};

export default List_Item_Date;
