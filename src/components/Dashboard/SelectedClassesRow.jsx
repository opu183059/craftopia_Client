import Swal from "sweetalert2";
import { BsFillTrash3Fill } from "react-icons/bs";

// eslint-disable-next-line react/prop-types
const SelectedClassesRow = ({ classes, index }) => {
  const { _id, classname, instructorName, price, image } = classes || {};

  const deleteSellectedClass = (id) => {
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
        fetch(
          `https://criptofia-server.vercel.app/selectedClasses/selectedClassesDelete/${id}`,
          {
            method: "DELETE",
          }
        )
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
      <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
        <td className="p-3">
          <p>{index + 1}</p>
        </td>
        <td className="p-3">
          <img src={image} className="w-12 h-12" alt="" />
        </td>
        <td className="p-3">
          <p>{classname}</p>
        </td>
        <td className="p-3">
          <p>{instructorName}</p>
        </td>
        <td className="p-3">
          <p>{price}</p>
        </td>
        <td className="p-3 flex gap-3">
          <button onClick={() => deleteSellectedClass(_id)}>
            <BsFillTrash3Fill
              size={20}
              className="hover:text-red-600"
            ></BsFillTrash3Fill>
          </button>
          <button className="bg-transparent hover:text-white hover:bg-blue-600 border border-sky-300 rounded-lg px-3 py-2">
            Pay Fee
          </button>
        </td>
      </tr>
    </>
  );
};

export default SelectedClassesRow;
