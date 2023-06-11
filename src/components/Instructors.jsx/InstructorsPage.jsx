import { useQuery } from "@tanstack/react-query";
import InstructorPageRow from "./InstructorPageRow";
import axios from "axios";
import { Helmet } from "react-helmet";

const InstructorsPage = () => {
  // const [instructor, setInstructor] = useState();

  // useEffect(() => {
  //   fetch("https://criptofia-server.vercel.app/instructor")
  //     .then((res) => res.json())
  //     .then((result) => {
  //       setInstructor(result);
  //     });
  // }, []);

  const { data: instructor = [] } = useQuery({
    queryKey: ["instructor"],
    queryFn: async () => {
      const res = await axios.get(
        "https://criptofia-server.vercel.app/instructor"
      );
      // console.log(res.data);
      return res.data;
    },
  });

  return (
    <div className="pt-24 min-h-screen">
      <Helmet>
        <title>Craftopia | Instructors</title>
      </Helmet>
      <div className="w-11/12 mx-auto flex md:flex-row flex-col">
        <img
          className="rounded-xl mt-5"
          src="https://i.ibb.co/ZVkr676/istockphoto-519362488-612x612.jpg"
          alt=""
        />
        <div className="w-11/12 mx-auto rounded-md sm:p-4 dark:text-gray-100 dark:bg-transparent">
          <h2 className="mb-5 ms-3 text-2xl font-semibold leading-tight">
            Instructors
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="rounded-t-lg dark:bg-gray-700">
                <tr className="text-right">
                  <th title="Ranking" className="p-3 text-left">
                    Image
                  </th>
                  <th title="Team name" className="p-3 text-left">
                    Instructor Name
                  </th>
                  <th title="Team name" className="p-3 text-left">
                    Email
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
