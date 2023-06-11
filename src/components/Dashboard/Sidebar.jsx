import { Link, NavLink, useNavigate } from "react-router-dom";
import { GrLogout } from "react-icons/gr";
import { AiOutlineBars, AiOutlineHome } from "react-icons/ai";
// import HostMenu from "./HostMenu";
// import GuestMenu from "./GuestMenu";
import { useContext, useState } from "react";
import { Authcontext } from "../Provider/Authprovider";
const Sidebar = () => {
  const { user, role, logout } = useContext(Authcontext);
  const [isActive, setActive] = useState("false");
  const navigate = useNavigate();
  const handleToggle = () => {
    setActive(!isActive);
  };
  // console.log(role);

  const handleLogout = () => {
    logout()
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="bg-blue-500 text-gray-100 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold"></div>
        </div>
        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>

      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className="flex flex-col items-center mt-6 -mx-2">
              <img
                className="object-cover w-24 h-24 mx-2 rounded-full"
                src={user?.photoURL}
                alt=""
                referrerPolicy="no-referrer"
              />

              <h4 className="mx-2 mt-2 font-medium text-gray-800">{role}</h4>
              <h4 className="mx-2 mt-2 font-medium text-gray-800 ">
                {user?.displayName}
              </h4>

              <p className="mx-2 mt-1 text-sm font-medium text-gray-600">
                {user?.email}
              </p>
            </div>
          </div>

          {/* Nav Items */}
        </div>

        <div>
          <hr />
          {role == "Admin" && (
            <>
              <NavLink
                to="/dashboard/allusers"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                  }`
                }
              >
                All Users
              </NavLink>
              <NavLink
                to="/dashboard/classes"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                  }`
                }
              >
                Manage Class
              </NavLink>
            </>
          )}
          {role == "Instructor" && (
            <>
              <NavLink
                to="/dashboard/addClass"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                  }`
                }
              >
                Add a class
              </NavLink>
              <NavLink
                to="/dashboard/myclass"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                  }`
                }
              >
                My Classes
              </NavLink>
            </>
          )}
          {role == "Student" && (
            <>
              <NavLink
                to="/dashboard/selectedClasses"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                  }`
                }
              >
                My Selected Classes
              </NavLink>
              <NavLink
                to="/dashboard/enroledClasses"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                  }`
                }
              >
                My Enrolled Classes
              </NavLink>
            </>
          )}

          <Link
            to={"/"}
            className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform"
          >
            <AiOutlineHome className="w-5 h-5" />
            <span className="mx-4 font-medium">Home</span>
          </Link>
          <button
            onClick={handleLogout}
            className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform"
          >
            <GrLogout className="w-5 h-5" />
            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
