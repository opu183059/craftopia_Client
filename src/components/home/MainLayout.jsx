import Banner from "./Banner";
import Extrasection from "./Extrasection";
import Instructor from "./Instructor";
import MeetTeam from "./MeetTeam";
import TopClasses from "./TopClasses";

const MainLayout = () => {
  return (
    <div className="min-h-screen pt-24">
      <Banner></Banner>
      <TopClasses></TopClasses>
      <Instructor></Instructor>
      <Extrasection></Extrasection>
      <MeetTeam></MeetTeam>
    </div>
  );
};

export default MainLayout;
