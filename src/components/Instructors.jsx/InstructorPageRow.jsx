import React from "react";

const InstructorPageRow = ({ instructorData }) => {
  const { _id, email, name, photo } = instructorData || {};
  return (
    <tr className="text-right border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-800">
      <td>
        {" "}
        <img src={photo} className="w-12 h-12 rounded-xl" alt="" />
      </td>
      <td className="px-3 py-2 text-left">
        {/* <span>{_id.slice(0, 7)}</span> */}
        <p>{name}</p>
      </td>
      <td className="px-3 py-2 text-left">
        <span>{email}</span>
      </td>
      <td className="px-3 py-2">
        <span>
          <input type="checkbox" className="checkbox checkbox-success" />
        </span>
      </td>
    </tr>
  );
};

export default InstructorPageRow;
