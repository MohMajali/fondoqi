import Buttons from "../components/Button/Buttons";
import "./MailList.css";

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mail-title">Save time, save money!</h1>
      <span className="mail-desc">
        Sign up and we'll send the best deals to you
      </span>
      <div className="mail-input-container">
        <input type="text" placeholder="your Email" />
        <Buttons text={"Subscribe"} className={""}/>
      </div>
    </div>
  );
};

export default MailList;
