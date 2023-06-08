import React from "react";

const InstructorCard = ({ instructor }) => {
  const { _id, email } = instructor || {};
  return (
    <div>
      <div
        className={`max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50`}
      >
        <p>ID: {_id.slice(0, 5)}</p>
        <p>Email: {email}</p>
      </div>
    </div>
  );
};

export default InstructorCard;
