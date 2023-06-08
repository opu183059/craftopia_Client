import React from "react";

const InstructorCard = ({ instructor }) => {
  const { _id, email } = instructor || {};
  return (
    <div>
      <div
        className={`max-w-xl p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50`}
      >
        <img
          src="https://th.bing.com/th/id/R.259dde4cc7812cdf0a9ece3978803f9c?rik=r2hpi7ZZJ%2bcadw&pid=ImgRaw&r=0"
          className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
          alt=""
        />
        <p className="mt-4 text-xl">ID: {_id.slice(0, 7)}</p>
        <p>Email: {email}</p>
      </div>
    </div>
  );
};

export default InstructorCard;
