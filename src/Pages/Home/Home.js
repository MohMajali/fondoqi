import "./Home.css";
import Featured from "../../components/Featured/Featured";
import Header from "../../components/Header/Header";
import ProertyList from "../../components/ProertyList/ProertyList";
import FeaturedProperities from "../../components/FeaturedProperities/FeaturedProperities";
import MailList from "../../components/MailList/MailList";

export const Home = () => {
  return (
    <div>
      <Header />
      <div className="home-container">
        <Featured />
        <h1 className="home-title">Browse by property type</h1>
        <ProertyList />
        <h1 className="home-title">Homes guests love</h1>
        <FeaturedProperities />
        <MailList />
      </div>
    </div>
  );
};
