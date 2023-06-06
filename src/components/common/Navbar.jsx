import { useState } from "react";
import { BiAlignLeft } from "react-icons/bi";
import { BsPersonCircle } from "react-icons/bs";
import { BsFillMoonFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [theme, setTheme] = useState(false);
  if (theme) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <>
      <nav className="fixed w-full shadow-md mx-auto bg-slate-50 dark:bg-gray-800 p-4 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <button
              onClick={toggleDropdown}
              className="flex gap-2 text-black dark:text-white focus:outline-none"
            >
              <BiAlignLeft size={24}></BiAlignLeft>
              Menu
            </button>
            {isDropdownOpen && (
              <div className="absolute mt-4 z-10 py-2 w-48 bg-slate-50 dark:bg-gray-800 rounded-lg shadow-lg">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? " text-blue-700 dark:text-blue-400 font-bold block px-4 py-2 hover:bg-gray-200"
                      : "block px-4 py-2 text-gray-800 dark:text-slate-100 dark:hover:text-gray-800 hover:bg-gray-200"
                  }
                  to="/"
                >
                  Home
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? " text-blue-700 dark:text-blue-400 font-bold block px-4 py-2 hover:bg-gray-200"
                      : "block px-4 py-2 text-gray-800 dark:text-slate-100 dark:hover:text-gray-800 hover:bg-gray-200"
                  }
                  to="/login"
                >
                  Login
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? " text-blue-700 dark:text-blue-400 font-bold block px-4 py-2 hover:bg-gray-200"
                      : "block px-4 py-2 text-gray-800 dark:text-slate-100 dark:hover:text-gray-800 hover:bg-gray-200"
                  }
                  to="/instructor"
                >
                  Instructor
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? " text-blue-700 dark:text-blue-400 font-bold block px-4 py-2 hover:bg-gray-200"
                      : "block px-4 py-2 text-gray-800 dark:text-slate-100 dark:hover:text-gray-800 hover:bg-gray-200"
                  }
                  to="/classes"
                >
                  Classes
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? " text-blue-700 dark:text-blue-400 font-bold block px-4 py-2 hover:bg-gray-200"
                      : "block px-4 py-2 text-gray-800 dark:text-slate-100 dark:hover:text-gray-800 hover:bg-gray-200"
                  }
                  to="/dashboard"
                >
                  Dashboard
                </NavLink>
                <div className="darkSwitch md:hidden gap-2">
                  <label
                    htmlFor="Toggle1"
                    className="inline-flex items-center space-x-4 cursor-pointer text-gray-900 dark:text-white"
                  >
                    <span>Light</span>
                    <span className="relative">
                      <input
                        onClick={() => setTheme(!theme)}
                        id="Toggle1"
                        type="checkbox"
                        className="hidden peer"
                      />
                      <div className="w-10 h-6 rounded-full shadow-inner dark:bg-gray-400 bg-gray-400 peer-checked:dark:bg-slate-200 peer-checked:bg-slate-200"></div>
                      <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto dark:bg-gray-800 bg-gray-800"></div>
                    </span>
                    <span>Dark</span>
                  </label>
                  <BsPersonCircle size={30}></BsPersonCircle>
                </div>
              </div>
            )}
          </div>
          <div className="flex items-center gap-2 text-blue-700 dark:text-blue-400 font-bold text-xl">
            <img
              src="https://i.ibb.co/GVKwXgL/Colorful-Cute-Butterfly-and-Paint-Brush-Illustration-Local-Artist-Community-Logo-removebg-preview.png"
              alt=""
              className="w-10 "
            />
            <h1 className="font-akaya text-3xl">CraftoPia</h1>
          </div>
          <div className="darkSwitch hidden md:flex gap-2">
            <BsPersonCircle size={30}></BsPersonCircle>
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
