import ClassesCard from "./ClassesCard";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import { useEffect } from "react";

const AllClasses = () => {
  // const [Classes, setClasses] = useState();
  // const [noDataMessage, setNoDataMessage] = useState();
  // useEffect(() => {
  //   fetch("https://criptofia-server.vercel.app/allApprovedClasses")
  //     .then((res) => res.json())
  //     .then((result) => {
  //       setClasses(result);
  //       if (result.length == 0) {
  //         setNoDataMessage("No data found, Please try again");
  //       } else {
  //         setNoDataMessage(" ");
  //       }
  //     });
  // }, [Classes]);

  const { data: Classes = [] } = useQuery({
    queryKey: ["allApprovedClasses"],
    queryFn: async () => {
      const res = await axios.get(
        "https://criptofia-server.vercel.app/allApprovedClasses"
      );
      // console.log(res.data);
      return res.data;
    },
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-24">
      <Helmet>
        <title>Craftopia | Classes</title>
      </Helmet>
      <h1 className="font-akaya text-5xl text-center mb-5">All our classes</h1>
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
        {Classes?.map((classData) => (
          <ClassesCard classData={classData} key={classData._id}></ClassesCard>
        ))}
      </div>
      <h1 className="text-blue-700 text-center font-semibold text-lg mt-5">
        {/* {noDataMessage} */}
      </h1>
    </div>
  );
};

export default AllClasses;
