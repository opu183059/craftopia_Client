import { useEffect, useState } from "react";
import InstructorCard from "./InstructorCard";

const Instructor = () => {
  const [instructor, setInstructor] = useState();

  useEffect(() => {
    fetch("https://criptofia-server.vercel.app/instructor")
      .then((res) => res.json())
      .then((result) => {
        setInstructor(result);
      });
  }, []);

  return (
    <div className="my-5">
      <div className="min-h-screen pt-24">
        <h1 className="font-akaya text-5xl text-center mb-5">
          Top Instructors
        </h1>
        <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
          {instructor?.slice(0, 6)?.map((instructor) => (
            <InstructorCard
              instructor={instructor}
              key={instructor._id}
            ></InstructorCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Instructor;
