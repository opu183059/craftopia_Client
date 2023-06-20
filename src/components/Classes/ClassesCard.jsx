import { useContext } from "react";
import { Authcontext } from "../Provider/Authprovider";
import Swal from "sweetalert2";

// eslint-disable-next-line react/prop-types
const ClassesCard = ({ classData }) => {
  const { _id, classname, instructorName, price, available, image, student } =
    classData || {};
  const { user, role } = useContext(Authcontext);
  // const [disable, setDisable]=useState(false)
  const remaining = available - student;

  // if(role=="Admin" || role =="Instructor"|| remaining==0){
  //   setDisable(true)
  // }

  const select = () => {
    if (!user) {
      Swal.fire({
        icon: "error",
        title: "Can not select class",
        text: "Please login to select it",
      });
      return;
    }
    const selectedData = {
      studentEmail: user?.email,
      classname: classname,
      instructorName: instructorName,
      price: price,
      image: image,
      ClassId: _id,
    };
    fetch("https://criptofia-server.vercel.app/sellectClass", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(selectedData),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Class Selected",
            text: "You can see it on your dashboard",
          });
        }
      });
  };
  return (
    <>
      <div
        className={`animate__animated animate__zoomIn max-w-xs hover:shadow-xl p-6 rounded-md shadow-md ${
          remaining == 0 ? "bg-red-400 dark:bg-red-600" : "dark:bg-gray-900"
        }  dark:text-gray-50 group`}
      >
        <div className="aspect-square w-full relative overflow-hidden rounded-xl">
          <img
            src={image}
            alt=""
            className="object-cover  w-full rounded-md h-full dark:bg-gray-500 group-hover:scale-110 transition"
          />
        </div>
        <div className="mt-6 mb-2">
          <h2 className="text-xl font-semibold tracking-wide">{classname}</h2>
          <hr />
          <span className="block text-xs mt-2 font-medium tracking-widest uppercase dark:text-violet-400">
            By {instructorName}
          </span>
        </div>
        <div className="mb-4">
          <div className="flex justify-between">
            <p>Price: {price}tk BTD</p>
            <p>Available: {remaining}</p>
          </div>
          <div className="flex justify-between">
            <p>Total sites: {available}</p>
            <p>Total enroled: {student}</p>
          </div>
        </div>
        <button
          disabled={
            remaining == 0 || role == "Instructor" || role == "Admin"
              ? true
              : false
          }
          onClick={select}
          className={`${
            remaining == 0 || role == "Instructor" || role == "Admin"
              ? "bg-gray-700 border-gray-600"
              : "bg-transparent border-blue-600 hover:shadow-lg text-blue-600 hover:bg-blue-700 hover:text-white"
          } rounded shadow  py-1 px-3 border hover:border-transparent`}
        >
          Select
        </button>
      </div>
    </>
  );
};

export default ClassesCard;
