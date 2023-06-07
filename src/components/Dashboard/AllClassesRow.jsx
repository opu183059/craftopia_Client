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
  } = classdata || {};

  const pending = () => {
    console.log("pending");
  };

  return (
    <>
      <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
        <td className="p-3">
          <p>{index + 1}</p>
        </td>
        <td className="p-3">
          <div className="avatar rounded">
            <div className="mask mask-squircle w-12 h-12">
              <img src={image} alt="" />
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
          <p>{available}</p>
        </td>
        <td className="p-3">
          <p>{price}</p>
        </td>
        <td className="p-3">
          <p>{status}</p>
        </td>
        <td className="p-3">
          <select name="" id="">
            <option
              onSelect={() => {
                pending();
              }}
              value="pending"
            >
              Pending
            </option>
            <option value="Approved">Approved</option>
            <option value="Denied">Denied</option>
          </select>
        </td>
        <td>
          <button>delete</button>
        </td>
      </tr>
    </>
  );
};

export default AllClassesRow;
