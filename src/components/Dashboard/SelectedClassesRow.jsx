const SelectedClassesRow = ({ classes, index }) => {
  // const
  // "_id": "648489d4565337579d2945d0",
  // "studentEmail": "stasif08@gmail.com",
  // "classname": " Caterpillar Craft",
  // "instructorName": "Mim",
  // "price": 480,
  // "image": "https://i.ibb.co/R0Phhv7/caterpillar-craft-1.jpg",
  // "ClassId": "64820f060f09b05feb9c33f8",
  // "createdAt": "2023-06-10T14:33:56.119Z"

  return (
    <>
      <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
        <td className="p-3">
          <p>d</p>
        </td>
        <td className="p-3">
          <img src={"image"} className="w-12 h-12" alt="" />
        </td>
        <td className="p-3">
          <p>ff</p>
        </td>
        <td className="p-3">
          <p>fff</p>
        </td>
        <td className="p-3">
          <p>fff</p>
        </td>
        <td className="p-3">
          <p>fffff</p>
        </td>
        <td className="p-3">
          <p>ffffffff</p>
        </td>
        <td>
          {/* <button onClick={() => delletClass(_id)}>dellete</button> */}
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

export default SelectedClassesRow;
