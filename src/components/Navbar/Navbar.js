import Buttons from "../Button/Buttons";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-container">
        <span className="logo">FONDOQI</span>
        <div className="nav-items">
          <Buttons className={"nav-button"} text={"Register"} />
          <Buttons className={"nav-button"} text={"Login"} />
        </div>
      </div>
    </div>
  );
};
