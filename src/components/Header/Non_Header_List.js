import React from "react";
import Buttons from "../Button/Buttons";
import Header_Search_Where from "./Header_Search_Where";
import Header_Search_Date from "./Header_Search_Date";
import Header_Search_Options from "./Header_Search_Options";

const Non_Header_List = ({
  date,
  format,
  openDate,
  setOpenDate,
  setDate,
  handleChange,
  openOptions,
  options,
  setOpenOptions,
  handleSreach,
  setDestination,
}) => {
  return (
    <>
      <h1 className="header-title">A lifetime of discounts? It's Genius</h1>
      <p className="header-desc">
        lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
        lorem lorem lorem lorem lorem lorem lorem
      </p>
      <Buttons className={"header-btn"} text={"Sign in / Register"} />
      <div className="header-search">
        <Header_Search_Where onChange={(e) => setDestination(e.target.value)} />

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
          <Buttons
            className={"header-btn"}
            text={"Search"}
            onClick={handleSreach}
          />
        </div>
      </div>
    </>
  );
};

export default Non_Header_List;
