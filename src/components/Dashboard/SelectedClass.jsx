import { useContext, useEffect, useState } from "react";
import { Authcontext } from "../Provider/Authprovider";
import SelectedClassesRow from "./SelectedClassesRow";

const SelectedClass = () => {
  const { user } = useContext(Authcontext);
  const [mySelectedClasses, setmySelectedClasses] = useState();
  const [noDataFound, setnoDataFound] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5000/selectedClasses/${user?.email}`)
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
      <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="dark:bg-gray-700">
              <tr className="text-left">
                <th className="p-3">#</th>
                <th className="p-3">Image</th>
                <th className="p-3">Name</th>
                <th className="p-3">Price</th>
                <th className="p-3">Enroled</th>
                <th className="p-3">Available</th>
                <th className="p-3">Status</th>
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
    </div>
  );
};

export default SelectedClass;
