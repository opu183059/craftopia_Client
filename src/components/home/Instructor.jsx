import React, { useEffect, useState } from "react";
import InstructorCard from "./InstructorCard";

const Instructor = () => {
  const [instructor, setInstructor] = useState();

  useEffect(() => {
    fetch("http://localhost:5000/instructor")
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
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          {instructor?.map((instructor) => (
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
