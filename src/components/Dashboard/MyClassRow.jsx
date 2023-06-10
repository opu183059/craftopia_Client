import Swal from "sweetalert2";
import { BiEdit } from "react-icons/bi";
import { BsFillTrash3Fill } from "react-icons/bs";
import { Link } from "react-router-dom";

const MyClassRow = ({ classes, index }) => {
  const { classname, price, available, image, status, _id, student } =
    classes || {};

  const delletClass = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/classDelete/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <>
      <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900 text-center">
        <td className="p-3">
          <p>{index + 1}</p>
        </td>
        <td className="p-3">
          <img src={image} className="w-12 h-12 rounded-xl" alt="" />
        </td>
        <td className="p-3">
          <p>{classname}</p>
        </td>
        <td className="p-3">
          <p>{price}</p>
        </td>
        <td className="p-3">
          <p>{student}</p>
        </td>
        <td className="p-3">
          <p>{available}</p>
        </td>
        <td className="p-3">
          <p>{status}</p>
        </td>
        <td>
          <button>
            <Link to={`updateclass/${_id}`}>
              <BiEdit size={25}></BiEdit>
            </Link>
          </button>
        </td>
        <td>
          <button onClick={() => delletClass(_id)}>
            <BsFillTrash3Fill size={23}></BsFillTrash3Fill>
          </button>
        </td>
      </tr>
    </>
  );
};

export default MyClassRow;
