import { useContext } from "react";
import Swal from "sweetalert2";
import { Authcontext } from "../Provider/Authprovider";
import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Adminroute = ({ children }) => {
  const { role, loading } = useContext(Authcontext);
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-10 h-10 border-b-8 border-r-4 rounded-full animate-spin dark:border-blue-700"></div>
        <p className="font-bold text-xl text-blue-700 ms-2">Loading....</p>
      </div>
    );
  }
  if (role == "Admin") {
    return children;
  }

  if (role != "Admin") {
    Swal.fire({
      icon: "warning",
      title: "Warning, unauthorised access",
      text: "You are not Admin, so you can not visit this",
    });
  }

  return <Navigate to="/dashboard"></Navigate>;
};

export default Adminroute;
