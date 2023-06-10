// eslint-disable-next-line react/prop-types
const InstructorCard = ({ instructor }) => {
  const { _id, email, name, photo } = instructor || {};
  return (
    <div>
      <div
        className={`max-w-xl p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50`}
      >
        <img
          src={photo}
          className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
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
