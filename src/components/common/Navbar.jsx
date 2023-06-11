import { useContext, useState } from "react";
import { BiAlignLeft } from "react-icons/bi";
import { BsPersonCircle } from "react-icons/bs";
import { BsFillMoonFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Authcontext } from "../Provider/Authprovider";

const Navbar = () => {
  const { user, logout } = useContext(Authcontext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [theme, setTheme] = useState(false);
  const navigate = useNavigate();
  if (theme) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

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
      <nav className="fixed w-full shadow-md mx-auto bg-slate-50 dark:bg-blue-950 p-4 z-50">
        <div className="w-11/12 mx-auto flex justify-between items-center">
          <div>
            <button
              onClick={toggleDropdown}
              className="flex gap-2 text-black dark:text-white focus:outline-none"
            >
              <BiAlignLeft size={24}></BiAlignLeft>
              Menu
            </button>
            {isDropdownOpen && (
              <div className="absolute mt-4 z-10 py-2 w-48 bg-slate-50 dark:bg-blue-950 rounded-lg shadow-lg">
                <NavLink
                  onClick={toggleDropdown}
                  className={({ isActive }) =>
                    isActive
                      ? " text-blue-700 dark:text-blue-400 font-bold block px-4 py-2 hover:bg-blue-600 hover:text-gray-50"
                      : "block px-4 py-2 text-gray-800 dark:text-slate-100 dark:hover:text-gray-100 hover:bg-blue-600 hover:text-gray-50"
                  }
                  to="/"
                >
                  Home
                </NavLink>
                {!user && (
                  <NavLink
                    onClick={toggleDropdown}
                    className={({ isActive }) =>
                      isActive
                        ? " text-blue-700 dark:text-blue-400 font-bold block px-4 py-2 hover:bg-blue-600 hover:text-gray-50"
                        : "block px-4 py-2 text-gray-800 dark:text-slate-100 dark:hover:text-gray-100 hover:bg-blue-600 hover:text-gray-50"
                    }
                    to="/register"
                  >
                    Registration
                  </NavLink>
                )}
                <NavLink
                  onClick={toggleDropdown}
                  className={({ isActive }) =>
                    isActive
                      ? " text-blue-700 dark:text-blue-400 font-bold block px-4 py-2 hover:bg-blue-600 hover:text-gray-50"
                      : "block px-4 py-2 text-gray-800 dark:text-slate-100 dark:hover:text-gray-100 hover:bg-blue-600 hover:text-gray-50"
                  }
                  to="/instructor"
                >
                  Instructor
                </NavLink>
                <NavLink
                  onClick={toggleDropdown}
                  className={({ isActive }) =>
                    isActive
                      ? " text-blue-700 dark:text-blue-400 font-bold block px-4 py-2 hover:bg-blue-600 hover:text-gray-50"
                      : "block px-4 py-2 text-gray-800 dark:text-slate-100 dark:hover:text-gray-100 hover:bg-blue-600 hover:text-gray-50"
                  }
                  to="/classes"
                >
                  Classes
                </NavLink>
                {user && (
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? " text-blue-700 dark:text-blue-400 font-bold block px-4 py-2 hover:bg-blue-600 hover:text-gray-50"
                        : "block px-4 py-2 text-gray-800 dark:text-slate-100 dark:hover:text-gray-100 hover:bg-blue-600 hover:text-gray-50"
                    }
                    to="/dashboard"
                  >
                    Dashboard
                  </NavLink>
                )}

                <div className="darkSwitch md:hidden gap-2">
                  <label
                    htmlFor="Toggle1"
                    className="inline-flex px-4 items-center space-x-4 cursor-pointer text-gray-900 dark:text-white"
                  >
                    <span className="relative border-[2px] dark:border-slate-100 border-black rounded-md p-1">
                      <input
                        onClick={() => setTheme(!theme)}
                        id="Toggle1"
                        type="checkbox"
                        className="hidden"
                      />
                      {!theme ? (
                        <BsFillMoonFill size={20}></BsFillMoonFill>
                      ) : (
                        <BsFillSunFill size={20}></BsFillSunFill>
                      )}
                    </span>
                  </label>
                </div>
              </div>
            )}
          </div>
          <Link to={"/"}>
            <div className="flex items-center gap-2 text-blue-700 dark:text-blue-400 font-bold text-xl">
              <img
                src="https://i.ibb.co/GVKwXgL/Colorful-Cute-Butterfly-and-Paint-Brush-Illustration-Local-Artist-Community-Logo-removebg-preview.png"
                alt=""
                className="w-10 "
              />
              <h1 className="font-akaya text-3xl">CraftoPia</h1>
            </div>
          </Link>
          <div className="darkSwitch hidden md:flex gap-2">
            {user ? (
              <button className="flex items-center">
                {user.photoURL ? (
                  <div className="">
                    <img
                      src={user.photoURL}
                      alt=""
                      className="w-9 h-9 rounded-full border-blue-600 border-2 mr-2"
                    />
                  </div>
                ) : (
                  <BsPersonCircle size={30} className="mr-2"></BsPersonCircle>
                )}
                <button
                  onClick={handleLogout}
                  className="bg-transparent hover:bg-blue-700 text-blue-600 dark:text-blue-100 hover:text-white rounded shadow hover:shadow-lg py-1 px-3 border border-blue-600 dark:border-blue-400 hover:border-transparent"
                >
                  Logout
                </button>
              </button>
            ) : (
              <Link
                to={"/login"}
                className="bg-transparent hover:bg-blue-700 text-blue-600 dark:text-blue-100 hover:text-white rounded shadow hover:shadow-lg py-1 px-3 border border-blue-600 dark:border-blue-400 hover:border-transparent"
              >
                login
              </Link>
            )}
            <label
              htmlFor="Toggle1"
              className="inline-flex items-center space-x-4 cursor-pointer text-gray-900 dark:text-white"
            >
              <span className="relative border-[2px] dark:border-slate-100 border-black rounded-md p-1">
                <input
                  onClick={() => setTheme(!theme)}
                  id="Toggle1"
                  type="checkbox"
                  className="hidden"
                />
                {!theme ? (
                  <BsFillMoonFill size={20}></BsFillMoonFill>
                ) : (
                  <BsFillSunFill size={20}></BsFillSunFill>
                )}
              </span>
            </label>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
