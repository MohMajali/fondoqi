import "./Hotel.css";
import Header from "../../components/Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Buttons from "../../components/Button/Buttons";
import MailList from "../../components/MailList/MailList";
import Footer from "../../components/Footer/Footer";
import Hotel_Texts from "../../components/Hotel/Hotel_Texts";
import Hotel_Prices from "../../components/Hotel/Hotel_Prices";
import Hotel_Images from "../../components/Hotel/Hotel_Images";

export const Hotel = () => {
  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ];
  return (
    <div>
      <Header type={"list"} />
      <div className="hotel-container">
        <div className="hotel-wrapper">
          <Buttons text={"Reserve or Book Now!"} className={"book-now"} />
          <h1 className="hotel-title">Grand Hotel</h1>
          <div className="hotel-address">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Eltion St 125 New york</span>
          </div>
          <span className="hotel-distance">
            Excellent location - 500m from center
          </span>
          <span className="hotel-price-highlight">
            Book a stay over $11 at this property and get a free airport taxi
          </span>

          <Hotel_Images photos={photos} />

          <div className="hotel-details">
            <Hotel_Texts />

            <Hotel_Prices />
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};
