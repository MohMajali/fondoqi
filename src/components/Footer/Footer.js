import "./Footer.css";
import Footer_List from "./Footer_List";

const Footer = () => {
  return (
    <div className="footer">
      <div className="f-lists">
        <Footer_List ulClassName={"f-list"} liClassName={"f-list-item"} />
        <Footer_List ulClassName={"f-list"} liClassName={"f-list-item"} />
        <Footer_List ulClassName={"f-list"} liClassName={"f-list-item"} />
        <Footer_List ulClassName={"f-list"} liClassName={"f-list-item"} />
        <Footer_List ulClassName={"f-list"} liClassName={"f-list-item"} />
      </div>
      <div className="f-text">Copyright © 2022 Lamabooking.</div>
    </div>
  );
};

export default Footer;
