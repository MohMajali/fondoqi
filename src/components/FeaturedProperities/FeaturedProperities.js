import "./FeaturedProperities.css";
import Buttons from "../Button/Buttons";

const FeaturedProperities = () => {
  return (
    <div className="fp">
      <div className="fp-item">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
          alt="img"
          className="fp-image"
        />
        <span className="fp-name">Aparthotel stare miasto</span>
        <span className="fp-city">Jordan, Amman</span>
        <span className="fp-price">199.45$</span>
        <div className="fp-rating">
          <Buttons className={""} text={"8.9"} />
          <span>Excellent</span>
        </div>
      </div>

      <div className="fp-item">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
          alt="img"
          className="fp-image"
        />
        <span className="fp-name">Aparthotel stare miasto</span>
        <span className="fp-city">Jordan, Amman</span>
        <span className="fp-price">199.45$</span>
        <div className="fp-rating">
          <Buttons className={""} text={"8.9"} />
          <span>Excellent</span>
        </div>
      </div>

      <div className="fp-item">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
          alt="img"
          className="fp-image"
        />
        <span className="fp-name">Aparthotel stare miasto</span>
        <span className="fp-city">Jordan, Amman</span>
        <span className="fp-price">199.45$</span>
        <div className="fp-rating">
          <Buttons className={""} text={"8.9"} />
          <span>Excellent</span>
        </div>
      </div>
      
    </div>
  );
};

export default FeaturedProperities;
