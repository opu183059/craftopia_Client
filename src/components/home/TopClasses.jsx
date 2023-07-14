import { useEffect, useState } from "react";
import TopClassCard from "./TopClassCard";

const TopClasses = () => {
  const [Classes, setClasses] = useState();
  useEffect(() => {
    fetch("https://criptofia-server.vercel.app/allClasses")
      .then((res) => res.json())
      .then((result) => {
        setClasses(result);
      });
  }, []);

  Classes?.sort((a, b) => b.student - a.student);

  return (
    <div className="my-5">
      <div className="min-h-screen pt-24">
        <h1 className="font-akaya text-5xl text-center mb-5 text-blue-700 dark:text-blue-500">
          Our Top Classes
        </h1>
        <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-4 gap-5">
          {Classes?.slice(0, 8)?.map((classData) => (
            <TopClassCard
              classData={classData}
              key={classData._id}
            ></TopClassCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopClasses;
