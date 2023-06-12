import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Authcontext } from "../Provider/Authprovider";
import Swal from "sweetalert2";

// eslint-disable-next-line react/prop-types
const Privateroute = ({ children }) => {
  const location = useLocation();

  const { user, loading } = useContext(Authcontext);
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-10 h-10 border-b-8 border-r-4 rounded-full animate-spin border-blue-700"></div>
        <p className="font-bold text-xl text-blue-700 ms-2">Loading....</p>
      </div>
    );
  }
  if (user) {
    return children;
  }
  if (!user) {
    Swal.fire({
      icon: "warning",
      title: "Unauthorised",
      text: "You have to login to access this",
    });
  }
  return <Navigate state={{ from: location }} to="/login"></Navigate>;
};

export default Privateroute;
