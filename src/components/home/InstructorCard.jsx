// eslint-disable-next-line react/prop-types
const InstructorCard = ({ instructor }) => {
  const { _id, email, name, photo } = instructor || {};
  return (
    <div className="hover:shadow-xl group dark:hover:shadow-blue-800">
      <div
        className={`max-w-xl p-6 rounded-md shadow-md dark:bg-gray-950 border-[1px] border-blue-600 dark:text-gray-50 dark:group-hover:bg-blue-950 group-hover:bg-blue-50`}
      >
        <img
          src={photo}
          className="group-hover:scale-105 transition-all duration-500 object-cover object-center w-full rounded-md h-60 dark:bg-gray-500"
          alt=""
        />
        <p className="mt-4 text-xl">ID: {_id.slice(0, 7)}</p>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
      </div>
    </div>
  );
};

export default InstructorCard;
