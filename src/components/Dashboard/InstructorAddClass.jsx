import { useContext } from "react";
import { Authcontext } from "../Provider/Authprovider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const InstructorAddClass = () => {
  const { user } = useContext(Authcontext);
  //   console.log(user);

  const imageUpload = async (image) => {
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_IMGBB
    }`;
    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    return data;
  };

  const addClass = (event) => {
    event.preventDefault();
    const form = event.target;
    const classname = form.classname.value;
    const instructorName = form.instructorName.value;
    const instructoremail = form.instructoremail.value;
    const price = parseFloat(form.price.value);
    const available = parseInt(form.available.value);
    const description = form.description.value;
    const imageLink = form.image.files[0];

    imageUpload(imageLink)
      .then((data) => {
        // console.log(data.data.display_url);
        const classData = {
          classname,
          instructorName,
          instructoremail,
          price,
          available,
          description,
          image: data.data.display_url,
          status: "pending",
          student: 36,
        };
        fetch("https://criptofia-server.vercel.app/addClass", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(classData),
        })
          .then((res) => res.json())
          .then((result) => {
            // console.log(result);
            if (result.insertedId) {
              Swal.fire({
                icon: "success",
                title: "Class added",
                text: "PLease fill the form again to add more Class",
              });
            }
          });
        //   console.log(classData);
      })
      .catch((error) => {
        console.log(error.message);
      });
    form.reset();
  };

  const img = (img) => {
    console.log(img);
  };

  return (
    <section className="p-6 bg-gray-800 text-gray-50">
      <Helmet>
        <title>Craftopia | Add Class</title>
      </Helmet>
      <form
        onSubmit={addClass}
        noValidate=""
        action=""
        className="w-11/12 flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
      >
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
          <div className="space-y-2 col-span-full lg:col-span-1">
            <p className="font-medium text-lg underline">Class information</p>
            <p className="text-sm">
              Please add the information about your Class. Try to give details
              description to make your Class attractive for the students and
              guardians.
            </p>
          </div>
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="firstname" className="text-sm">
                Class Name
              </label>
              <input
                required
                id="classname"
                name="className"
                type="text"
                placeholder="Class Name"
                className="h-9 ps-3 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 dark:border-gray-700 text-gray-900"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="sellerName" className="text-sm">
                Class Image
              </label>
              <input
                onChange={(event) => {
                  img(event.target.files[0]);
                }}
                type="file"
                name="image"
                className="file-input file-input-bordered w-full max-w-xs"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="sellerName" className="text-sm">
                Instructor Name
              </label>
              <input
                readOnly
                defaultValue={user?.displayName}
                id="instructorName"
                name="instructorName"
                type="text"
                placeholder=" "
                className="w-full h-9 ps-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-border-gray-700 text-gray-900"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="sellerEmail" className="text-sm">
                Instructor Email
              </label>
              <input
                readOnly
                defaultValue={user?.email}
                id="sellerEmail"
                name="instructoremail"
                type="email"
                placeholder=" "
                className="w-full h-9 ps-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 dark:border-gray-700 text-gray-900"
              />
            </div>
            <div className="col-span-full -mt-3 text-sm">
              <p>
                <span className="text-yellow-400">Note:</span> Seller name and
                email will be as your seller profile
              </p>
            </div>

            <div className="col-span-full sm:col-span-2">
              <label htmlFor="Price" className="text-sm">
                Price
              </label>
              <input
                required
                id="price"
                type="number"
                name="price"
                placeholder="Price"
                className="h-9 ps-3 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 dark:border-gray-700 text-gray-900"
              />
            </div>

            <div className="col-span-full sm:col-span-2">
              <label htmlFor="Available" className="text-sm">
                Available
              </label>
              <input
                required
                id="Available"
                name="available"
                type="number"
                placeholder="Total Available"
                className="h-9 ps-3 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 dark:border-gray-700 text-gray-900"
              />
            </div>
            <div className="col-span-full">
              <label htmlFor="description" className="text-sm">
                Description
              </label>
              <textarea
                rows={5}
                id="description"
                name="description"
                type="text"
                placeholder="Description"
                className="textarea w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 dark:border-gray-700 text-gray-900 ps-2"
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
  );
};

export default InstructorAddClass;
