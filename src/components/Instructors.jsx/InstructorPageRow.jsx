import React from "react";

const InstructorPageRow = ({ instructorData }) => {
  const { _id, email } = instructorData || {};
  return (
    <tr className="text-right border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-800">
      <td className="px-3 py-2 text-left">
        <span>{_id.slice(0, 7)}</span>
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
