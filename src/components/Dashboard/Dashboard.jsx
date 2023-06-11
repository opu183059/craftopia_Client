import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { Helmet } from "react-helmet";

const Dashboard = () => {
  return (
    <div className="relative min-h-screen md:flex">
      <Helmet>
        <title>Craftopia | Dashboard</title>
      </Helmet>
      <Sidebar />
      <div className="flex-1  md:ml-64">
        <div className="p-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
