import React, { useEffect, useState } from "react";
import AllClassesRow from "./AllClassesRow";
import { Helmet } from "react-helmet";

const Classes = () => {
  const [allClasses, setallClasses] = useState();
  const [noUserFound, setNoUserFound] = useState("");

  useEffect(() => {
    fetch("https://criptofia-server.vercel.app/allClasses")
      .then((res) => res.json())
      .then((result) => {
        setallClasses(result);
        if (result.length == 0) {
          setNoUserFound("No data found, Please try again");
        } else {
          setNoUserFound(" ");
        }
      });
  }, [allClasses]);

  //   console.log(newUser);
  return (
    <div className="pt-10">
      <Helmet>
        <title>Craftopia | Manage Class</title>
      </Helmet>
      <div className="w-11/12 p-2 mx-auto sm:p-4 dark:text-gray-100">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="dark:bg-gray-700">
              <tr className="text-left">
                <th className="p-3">#</th>
                <th className="p-3">Image</th>
                <th className="p-3">Name</th>
                <th className="p-3">Inst Name</th>
                <th className="p-3">Inst Email</th>
                <th className="p-3">Available</th>
                <th className="p-3">Price</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {allClasses?.map((classdata, index) => (
                <AllClassesRow
                  classdata={classdata}
                  key={classdata._key}
                  index={index}
                ></AllClassesRow>
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

export default Classes;
