import { useEffect, useState } from "react";
import InstructorPageRow from "./InstructorPageRow";

const InstructorsPage = () => {
  const [instructor, setInstructor] = useState();

  useEffect(() => {
    fetch("http://localhost:5000/instructor")
      .then((res) => res.json())
      .then((result) => {
        setInstructor(result);
      });
  }, []);
  return (
    <div className="pt-24 min-h-screen">
      <div className="container mx-auto flex md:flex-row flex-col">
        <img
          className="rounded-xl mt-5"
          src="https://i.ibb.co/ZVkr676/istockphoto-519362488-612x612.jpg"
          alt=""
        />
        <div className="container mx-auto rounded-md sm:p-4 dark:text-gray-100 dark:bg-transparent">
          <h2 className="mb-5 ms-3 text-2xl font-semibold leading-tight">
            Instructors
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="rounded-t-lg dark:bg-gray-700">
                <tr className="text-right">
                  <th title="Ranking" className="p-3 text-left">
                    ID
                  </th>
                  <th title="Team name" className="p-3 text-left">
                    Email
                  </th>
                  <th title="Wins" className="p-3">
                    Follow
                  </th>
                </tr>
              </thead>
              <tbody>
                {instructor?.map((instructorData) => (
                  <InstructorPageRow
                    instructorData={instructorData}
                    key={instructorData._id}
                  ></InstructorPageRow>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorsPage;
