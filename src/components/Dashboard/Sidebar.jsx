import { Link, NavLink, useNavigate } from "react-router-dom";
import { AiOutlineBars, AiOutlineHome } from "react-icons/ai";
import { BiLogOutCircle } from "react-icons/bi";
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
          className="mobile-menu-button p-4 focus:outline-none focus:border-gray-200"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>

      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden dark:bg-blue-950 bg-blue-500 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div className="text-gray-950 dark:text-gray-50">
          <div>
            <div className="mt-3">
              <p className="font-akaya cursor-default text-3xl mx-2 mb-2">
                Craftopia
              </p>
              <img
                className="border-2 mt-4 w-24 h-24 mx-2 rounded-lg"
                src={user?.photoURL}
                alt=""
                referrerPolicy="no-referrer"
              />

              <h4 className="mx-2 mt-2 cursor-default font-akaya text-2xl">
                {role}
              </h4>
              <h4 className="mx-2 mt-2 cursor-default font-medium ">
                {user?.displayName}
              </h4>
              <p className="mx-2 mt-1 cursor-default text-sm font-medium text-gray-200">
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
                  `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-blue-800 rounded-lg ${
                    isActive ? "bg-blue-800  text-white" : " "
                  }`
                }
              >
                All Users
              </NavLink>
              <NavLink
                to="/dashboard/classes"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-blue-800  rounded-lg ${
                    isActive ? "bg-blue-800  text-white" : " "
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
                  `flex items-center px-4 py-2 mt-5 rounded-lg transition-colors duration-300 transform  hover:bg-blue-800  ${
                    isActive ? "bg-blue-800  text-white" : " "
                  }`
                }
              >
                Add a class
              </NavLink>
              <NavLink
                to="/dashboard/myclass"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-blue-800 rounded-lg ${
                    isActive ? "bg-blue-800  text-white" : " "
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
                  `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-blue-800  rounded-lg ${
                    isActive ? "bg-blue-800  text-white" : " "
                  }`
                }
              >
                My Selected Classes
              </NavLink>
              <NavLink
                to="/dashboard/enroledClasses"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-blue-800 rounded-lg ${
                    isActive ? "bg-blue-800  text-white" : " "
                  }`
                }
              >
                My Enrolled Classes
              </NavLink>
            </>
          )}

          <Link
            to={"/"}
            className="flex w-full items-center px-4 py-2 mt-5  hover:bg-blue-800 text-white rounded-lg transition-colors duration-300 transform"
          >
            <AiOutlineHome></AiOutlineHome>
            <span className="mx-4 font-medium">Home</span>
          </Link>
          <button
            onClick={handleLogout}
            className="flex w-full items-center px-4 py-2 mt-5 hover:bg-blue-800 text-white rounded-lg transition-colors duration-300 transform"
          >
            <BiLogOutCircle></BiLogOutCircle>
            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
