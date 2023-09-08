import "./List.css";
import Header from "../../components/Header/Header";
import { format } from "date-fns";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import Buttons from "../../components/Button/Buttons";
import List_Item_Destination from "../../components/List_Item/List_Item_Destination";
import List_Item_Date from "../../components/List_Item/List_Item_Date";
import List_Options from "../../components/List_Item/List_Options";
import Search_Item from "../../components/SearchItem/Search_Item";

export const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [options, setOptions] = useState(location.state.options);
  const [date, setDate] = useState(location.state.date);

  const [openDate, setOpenDate] = useState(false);

  return (
    <div>
      <Header type={"list"} />
      <div className="list-container">
        <div className="list-wrapper">
          <div className="list-search">
            <h1 className="list-title">Search</h1>

            <List_Item_Destination
              divClassName={"list-item"}
              labelClassName={""}
              destination={destination}
            />

            <List_Item_Date
              date={date}
              divClassName={"list-item"}
              format={format}
              openDate={openDate}
              setDate={setDate}
              setOpenDate={setOpenDate}
            />

            <List_Options options={options} />

            <Buttons text={"Search"} />
          </div>
          <div className="list-result">
            <Search_Item />
            <Search_Item />
            <Search_Item />
            <Search_Item />
            <Search_Item />
            <Search_Item />
          </div>
        </div>
      </div>
    </div>
  );
};
