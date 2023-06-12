// import { useContext } from "react";
// // import Swal from "sweetalert2";
// import { Authcontext } from "../Provider/Authprovider";
// import { Navigate, useLocation } from "react-router-dom";

// const Studentroute = ({children}) => {
//     const location = useLocation();

//     const { role, loading } = useContext(Authcontext);
//     if (loading) {
//       return (
//         <div className="flex justify-center items-center min-h-screen">
//           <div className="w-10 h-10 border-b-8 border-r-4 rounded-full animate-spin dark:border-blue-700"></div>
//           <p className="font-bold text-xl text-blue-700 ms-2">Loading....</p>
//         </div>
//       );
//     }
//     if (role = "Admin") {
//       return children;
//     }

//     // if (!user) {
//     //   Swal.fire({
//     //     icon: "warning",
//     //     title: "Oops...",
//     //     text: "You have to login to access this",
//     //   });
//     // }
//     return <Navigate state={{ from: location }} to="/dashboard"></Navigate>;
//   };

// export default Studentroute;
