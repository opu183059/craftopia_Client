import { useContext } from "react";
import { Authcontext } from "../Provider/Authprovider";
import Swal from "sweetalert2";

// eslint-disable-next-line react/prop-types
const ClassesCard = ({ classData }) => {
  const { _id, classname, instructorName, price, available, image, student } =
    classData || {};
  const { user } = useContext(Authcontext);
  const remaining = available - student;

  const select = () => {
    if (!user) {
      Swal.fire({
        icon: "error",
        title: "Not Loged in",
        text: "Please login to select it",
      });
    }
  };
  return (
    <>
      <div
        className={`max-w-xs p-6 rounded-md shadow-md ${
          remaining == 0 ? "bg-red-400 dark:bg-red-600" : "dark:bg-gray-900"
        }  dark:text-gray-50`}
      >
        <img
          src={image}
          alt=""
          className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <h2 className="text-xl font-semibold tracking-wide">{classname}</h2>
          <hr />
          <span className="block text-xs mt-2 font-medium tracking-widest uppercase dark:text-violet-400">
            By {instructorName}
          </span>
        </div>
        <div className="mb-4">
          <div className="flex justify-between">
            <p>Price: {price}</p>
            <p>Remaining: {remaining}</p>
          </div>
          <div className="flex justify-between">
            <p>Total sites: {available}</p>
            <p>Total enroled: {student}</p>
          </div>
        </div>
        <button
          onClick={select}
          className={`bg-transparent hover:bg-blue-700 text-blue-600 hover:text-white rounded shadow hover:shadow-lg py-1 px-3 border border-blue-600 hover:border-transparent`}
        >
          Select
        </button>
      </div>
    </>
  );
};

export default ClassesCard;
