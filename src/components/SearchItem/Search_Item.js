import "./Search_Item.css";
import Search_Item_Desc from "./Search_Item_Desc";
import Search_Item_Details from "./Search_Item_Details";

const Search_Item = () => {
  return (
    <div className="search_item">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
        alt="img"
        className="search-item_image"
      />

      <Search_Item_Desc />

      <Search_Item_Details />
    </div>
  );
};

export default Search_Item;
