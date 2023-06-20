import { useContext, useEffect, useState } from "react";
import { Authcontext } from "../Provider/Authprovider";
import MyClassRow from "./MyClassRow";
import { Helmet } from "react-helmet";

const InstructorMyClass = () => {
  const { user } = useContext(Authcontext);
  //   console.log(user);
  const [myClass, setmyClass] = useState();

  useEffect(() => {
    fetch(`https://criptofia-server.vercel.app/myClass/${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accesss-token")}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setmyClass(result);
      });
  }, [myClass]);

  return (
    <div className="pt-10">
      <Helmet>
        <title>Craftopia | My Class</title>
      </Helmet>
      {myClass && Array.isArray(myClass) && myClass.length > 0 ? (
        <>
          <div className="w-11/12 p-2 mx-auto sm:p-4 dark:text-gray-100">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="dark:bg-gray-700">
                  <tr className="text-center">
                    <th className="p-3">#</th>
                    <th className="p-3">Image</th>
                    <th className="p-3">Name</th>
                    <th className="p-3">Price</th>
                    <th className="p-3">Enroled</th>
                    <th className="p-3">Available</th>
                    <th className="p-3">Status</th>
                    <th className="p-3">Feedback</th>
                    <th className="p-3">Edit</th>
                    <th className="p-3">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {myClass?.map((classes, index) => (
                    <MyClassRow
                      classes={classes}
                      key={index}
                      index={index}
                    ></MyClassRow>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      ) : (
        <h1 className="text-red-700 text-center font-semibold text-lg mt-5">
          No Data Found
        </h1>
      )}
    </div>
  );
};

export default InstructorMyClass;
