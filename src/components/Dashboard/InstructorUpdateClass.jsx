import { useContext } from "react";
import { Authcontext } from "../Provider/Authprovider";
import { useLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const InstructorUpdateClass = () => {
  const { user } = useContext(Authcontext);
  // console.log(user);
  const classData = useLoaderData();
  const {
    _id,
    classname,
    instructorName,
    instructoremail,
    description,
    price,
    available,
  } = classData || {};

  // ----------------------------------
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch(`https://criptofia-server.vercel.app/classUpdate/${_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);
        if (result.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Data Updated successfully",
          });
        }
      });
    // console.log(data);
  };

  return (
    <div className="pt-5">
      <Helmet>
        <title>Craftopia | Update Class</title>
      </Helmet>
      <section className="p-6 bg-gray-800 text-gray-900 dark:text-gray-50">
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate=""
          action=""
          className="w-11/12 flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
        >
          <fieldset className=" w-11/12 md:8/12 lg:7/12 mx-auto p-6 rounded-md shadow-sm dark:bg-gray-900">
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full flex text-gray-100">
                <h1 className="font-medium  text-lg underline">
                  Updating Class:
                </h1>
                <h1 className="font-medium text-lg ml-2">{classname}</h1>
              </div>
              <div className="col-span-full sm:col-span-3 text-gray-100">
                <label htmlFor="classname" className="text-sm">
                  Class Name
                </label>
                <input
                  defaultValue={classname}
                  {...register("classname")}
                  id="classname"
                  type="text"
                  className="h-9 ps-3 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 dark:border-gray-700 dark:text-gray-900"
                />
              </div>

              <div className="col-span-full text-gray-100 sm:col-span-3">
                <label htmlFor="instructorName" className="text-sm">
                  Instructor Name
                </label>
                <input
                  readOnly
                  defaultValue={instructorName}
                  {...register("sellerName")}
                  id="instructorName"
                  type="text"
                  className="w-full h-9 ps-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 dark:border-gray-700 dark:text-gray-900"
                />
              </div>

              <div className="col-span-full text-gray-100 sm:col-span-3">
                <label htmlFor="instructoremail" className="text-sm">
                  Instructor Email
                </label>
                <input
                  readOnly
                  defaultValue={instructoremail}
                  {...register("instructoremail")}
                  id="instructoremail"
                  type="email"
                  className="w-full h-9 ps-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full -mt-3 text-sm">
                <p className="text-red-500">
                  <span className="text-yellow-400">Note:</span> Can not update
                  Instructor name and email, it will be as same as your profile.
                </p>
              </div>
              <div className="col-span-full text-gray-100 sm:col-span-2">
                <label htmlFor="price" className="text-sm">
                  price
                </label>
                <input
                  defaultValue={price}
                  {...register("price")}
                  id="price"
                  type="text"
                  className="h-9 ps-3 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full text-gray-100 sm:col-span-2">
                <label htmlFor="available" className="text-sm">
                  available sits
                </label>
                <input
                  defaultValue={available}
                  {...register("available")}
                  id="available"
                  type="text"
                  placeholder=""
                  className="h-9 ps-3 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full">
                <label htmlFor="description" className="text-sm">
                  description
                </label>
                <textarea
                  defaultValue={description}
                  {...register("description")}
                  id="description"
                  type="text"
                  placeholder="description"
                  className="textarea w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 dark:border-gray-700 text-gray-100 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full w-full text-right mt-3">
                <input
                  type="submit"
                  placeholder="Add Class"
                  className="bg-transparent hover:bg-blue-700 text-gray-300 hover:text-white rounded shadow hover:shadow-lg py-1 px-3 border border-gray-200 hover:border-transparent"
                />
              </div>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default InstructorUpdateClass;
