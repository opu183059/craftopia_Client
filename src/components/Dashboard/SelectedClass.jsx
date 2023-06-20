import { useContext, useEffect, useState } from "react";
import { Authcontext } from "../Provider/Authprovider";
import SelectedClassesRow from "./SelectedClassesRow";
import { Helmet } from "react-helmet";

const SelectedClass = () => {
  const { user } = useContext(Authcontext);
  const [mySelectedClasses, setmySelectedClasses] = useState();
  const [noDataFound, setnoDataFound] = useState("");

  useEffect(() => {
    fetch(
      `https://criptofia-server.vercel.app/selectedClasses/${user?.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accesss-token")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((result) => {
        setmySelectedClasses(result);
        if (result.length == 0) {
          setnoDataFound("No data found, Please try again");
        } else {
          setnoDataFound(" ");
        }
      });
  }, [mySelectedClasses]);

  return (
    <div className="pt-20">
      <Helmet>
        <title>Craftopia | Selected Classes</title>
      </Helmet>

      {mySelectedClasses &&
      Array.isArray(mySelectedClasses) &&
      mySelectedClasses.length > 0 ? (
        <>
          <div className="w-11/12 p-2 mx-auto sm:p-4 dark:text-gray-100">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="dark:bg-gray-700">
                  <tr className="text-left">
                    <th className="p-3">#</th>
                    <th className="p-3">Image</th>
                    <th className="p-3">Class Name</th>
                    <th className="p-3">Ins Name</th>
                    <th className="p-3">Price</th>
                    <th className="p-3">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {mySelectedClasses?.map((classes, index) => (
                    <SelectedClassesRow
                      classes={classes}
                      key={index}
                      index={index}
                    ></SelectedClassesRow>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <h1 className="text-red-700 text-center font-semibold text-lg mt-5">
            {noDataFound}
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

export default SelectedClass;
