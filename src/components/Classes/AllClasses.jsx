import { useEffect, useState } from "react";
import ClassesCard from "./ClassesCard";

const AllClasses = () => {
  const [Classes, setClasses] = useState();
  const [noDataMessage, setNoDataMessage] = useState();
  useEffect(() => {
    fetch("http://localhost:5000/allClasses")
      .then((res) => res.json())
      .then((result) => {
        setClasses(result);
        if (result.length == 0) {
          setNoDataMessage("No data found, Please try again");
        } else {
          setNoDataMessage(" ");
        }
      });
  }, []);

  return (
    <div className="min-h-screen pt-24">
      <h1 className="font-akaya text-5xl text-center mb-5">All our classes</h1>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
        {Classes?.map((classData) => (
          <ClassesCard classData={classData} key={classData._id}></ClassesCard>
        ))}
      </div>
      <h1 className="text-blue-700 text-center font-semibold text-lg mt-5">
        {noDataMessage}
      </h1>
    </div>
  );
};

export default AllClasses;
