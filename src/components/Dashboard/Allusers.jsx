import { useEffect, useState } from "react";
import Usersrow from "./Usersrow";
import { Helmet } from "react-helmet";

const Allusers = () => {
  const [newUser, setNewuser] = useState();
  const [noUserFound, setNoUserFound] = useState("");

  useEffect(() => {
    fetch("https://criptofia-server.vercel.app/allusers")
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
      <Helmet>
        <title>Craftopia | All Users</title>
      </Helmet>

      {newUser && Array.isArray(newUser) && newUser.length > 0 ? (
        <>
          <div className="w-auto p-2 mx-auto sm:p-4 dark:text-gray-100">
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
                    <Usersrow
                      user={user}
                      key={user._key}
                      index={index}
                    ></Usersrow>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <h1 className="text-red-700 text-center font-semibold text-lg mt-5">
            {noUserFound}
          </h1>
        </>
      ) : (
        <h1 className="text-red-700 text-center font-semibold text-lg mt-5">
          No Data
        </h1>
      )}
    </div>
  );
};

export default Allusers;
