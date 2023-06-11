import { useEffect, useState } from "react";
import Usersrow from "./Usersrow";

const Allusers = () => {
  const [newUser, setNewuser] = useState();
  const [noUserFound, setNoUserFound] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/allusers")
      .then((res) => res.json())
      .then((result) => {
        setNewuser(result);
        // console.log(result);
        if (result.length == 0) {
          setNoUserFound("No data found, Please try again");
        } else {
          setNoUserFound(" ");
        }
      });
  }, [newUser]);

  //   console.log(newUser);
  return (
    <div className="pt-10">
      <div className="w-11/12 p-2 mx-auto sm:p-4 dark:text-gray-100">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="dark:bg-gray-700">
              <tr className="text-left">
                <th className="p-3">ID</th>
                <th className="p-3">Photo</th>
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Role</th>
                <th className="p-3">Change Role</th>
              </tr>
            </thead>
            <tbody>
              {newUser?.map((user, index) => (
                <Usersrow user={user} key={user._key} index={index}></Usersrow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <h1 className="text-red-700 text-center font-semibold text-lg mt-5">
        {noUserFound}
      </h1>
    </div>
  );
};

export default Allusers;
