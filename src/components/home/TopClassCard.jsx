import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const TopClassCard = ({ classData }) => {
  const { classname, instructorName, price, available, image, student } =
    classData || {};
  const remaining = available - student;

  const navigate = useNavigate();
  const select = () => {
    Swal.fire({
      icon: "info",
      title: "Classes Page",
      text: "You are redirected to classes page where you can find your required classes",
    });
    navigate("/classes");
  };
  return (
    <>
      <div
        className={`max-w-xl p-6 hover:shadow-xl rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50`}
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
          className={`bg-transparent hover:bg-blue-700 text-blue-600 dark:text-blue-100 hover:text-white rounded shadow hover:shadow-lg py-1 px-3 border border-blue-600 dark:border-blue-400 hover:border-transparent`}
        >
          Select
        </button>
      </div>
    </>
  );
};

export default TopClassCard;
