import { Helmet } from "react-helmet";
import Banner from "./Banner";
import Extrasection from "./Extrasection";
import Instructor from "./Instructor";
import MeetTeam from "./MeetTeam";
import TopClasses from "./TopClasses";
import About from "./About";
import Details from "./Details";
import Review from "./Review";

const MainLayout = () => {
  return (
    <div className="pt-16">
      <Helmet>
        <title>Craftopia | Home</title>
      </Helmet>
      <Banner></Banner>
      <About></About>
      <TopClasses></TopClasses>
      <Details></Details>
      <Instructor></Instructor>
      <Extrasection></Extrasection>
      <MeetTeam></MeetTeam>
      <Review></Review>
    </div>
  );
};

export default MainLayout;
