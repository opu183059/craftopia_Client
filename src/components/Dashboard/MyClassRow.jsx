const MyClassRow = ({ classes, index }) => {
  const { classname, price, available, image, status } = classes || {};

  return (
    <>
      <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
        <td className="p-3">
          <p>{index + 1}</p>
        </td>
        <td className="p-3">
          <p>{classname}</p>
        </td>
        <td className="p-3">
          <p>{price}</p>
        </td>
        <td className="p-3">
          <p>{available}</p>
        </td>
        <td className="p-3">
          <p>{status}</p>
        </td>
        <td>
          <button>dellete</button>
          {/* <button
            onClick={() => {
              DeleteUser(email);
            }}
          >
            Delete
          </button> */}
        </td>
      </tr>
    </>
  );
};

export default MyClassRow;
