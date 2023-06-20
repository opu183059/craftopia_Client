import { useEffect, useState } from "react";
import Swal from "sweetalert2";
// import { BsFillTrash3Fill } from "react-icons/bs";

// eslint-disable-next-line react/prop-types
const AllClassesRow = ({ classdata, index }) => {
  const {
    _id,
    classname,
    instructorName,
    instructoremail,
    price,
    available,
    image,
    status,
    student,
  } = classdata || {};
  const [Apbtn, setApbtn] = useState(false);
  const [Dnbtn, setDnbtn] = useState(false);
  const remaining = available - student;

  useEffect(() => {
    if (status == "Approved") {
      setApbtn(true);
      setDnbtn(false);
    } else {
      setDnbtn(true);
      setApbtn(false);
    }
  }, [status]);

  const Approve = (id, Status) => {
    Swal.fire({
      icon: "success",
      title: `${Status}`,
      text: `The Class is ${Status}`,
    });
    const currentUser = {
      status: Status,
    };
    return fetch(`https://criptofia-server.vercel.app/classApprove/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(currentUser),
    }).then((res) => res.json());
  };

  return (
    <>
      <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
        <td className="p-3">
          <p>{index + 1}</p>
        </td>
        <td className="p-3">
          <div className="avatar rounded">
            <div className="">
              <img src={image} alt="" className="w-10 h-10 rounded-lg" />
            </div>
          </div>
        </td>
        <td className="p-3">
          <p>{classname}</p>
        </td>
        <td className="p-3">
          <p>{instructorName}</p>
        </td>
        <td className="p-3">
          <p>{instructoremail}</p>
        </td>
        <td className="p-3">
          <p>{remaining}</p>
        </td>
        <td className="p-3">
          <p>{price}</p>
        </td>
        <td className="p-3">
          <p>{status}</p>
        </td>
        <td className="p-3 flex flex-col gap-1">
          <button
            disabled={Apbtn}
            className={`bg-transparent ${
              Apbtn
                ? "hover:bg-red-700 bg-red-700 text-gray-500"
                : "hover:bg-blue-700"
            } hover:bg-blue-700 text-blue-600 hover:text-white rounded shadow hover:shadow-lg py-1 px-3 border border-blue-600 hover:border-transparent`}
            onClick={() => {
              Approve(_id, "Approved");
            }}
          >
            Approve
          </button>
          <button
            onClick={() => {
              Approve(_id, "Denied");
            }}
            disabled={Dnbtn}
            className={`bg-transparent ${
              Dnbtn
                ? "hover:bg-red-700 bg-red-700 text-gray-500"
                : "hover:bg-blue-700"
            } hover:bg-blue-700 text-blue-600 hover:text-white rounded shadow hover:shadow-lg py-1 px-3 border border-blue-600 hover:border-transparent`}
          >
            Denied
          </button>
          <button className="bg-transparent hover:bg-blue-700 text-blue-600 dark:text-blue-100 hover:text-white rounded shadow hover:shadow-lg py-1 px-3 border border-blue-600 dark:border-blue-400 hover:border-transparent">
            Feedback
          </button>
        </td>
        {/* <td>
          <button>
            <BsFillTrash3Fill
              size={20}
              className="hover:text-red-600"
            ></BsFillTrash3Fill>
          </button>
        </td> */}
      </tr>
    </>
  );
};

export default AllClassesRow;
