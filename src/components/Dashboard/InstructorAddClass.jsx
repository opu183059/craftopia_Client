import { useContext } from "react";
import { Authcontext } from "../Provider/Authprovider";

const InstructorAddClass = () => {
  const { user } = useContext(Authcontext);
  console.log(user);
  return (
    <section className="p-6 bg-gray-800 text-gray-50">
      <form
        noValidate=""
        action=""
        className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
      >
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
          <div className="space-y-2 col-span-full lg:col-span-1">
            <p className="font-medium text-lg underline">Toy information</p>
            <p className="text-sm">
              Please add the information about your toy. Try to give details
              description to make your toy attractive.
            </p>
          </div>
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="firstname" className="text-sm">
                Class Name
              </label>
              <input
                required
                id="toyname"
                type="text"
                placeholder="Toy Name"
                className="h-9 ps-3 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 dark:border-gray-700 text-gray-900"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="sellerName" className="text-sm">
                Class Image
              </label>
              <input
                type="file"
                className="file-input file-input-bordered w-full max-w-xs"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="sellerName" className="text-sm">
                Seller Name
              </label>
              <input
                readOnly
                defaultValue={user?.displayName}
                id="sellerName"
                type="text"
                placeholder="Seller Name"
                className="w-full h-9 ps-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-border-gray-700 text-gray-900"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="sellerEmail" className="text-sm">
                Seller Email
              </label>
              <input
                readOnly
                defaultValue={user?.email}
                id="sellerEmail"
                type="email"
                placeholder="Seller Email "
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
                id="Price"
                type="number"
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
                type="text"
                placeholder="Description"
                className="textarea w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 dark:border-gray-700 text-gray-900 ps-2"
              />
            </div>
            <div className="col-span-full w-full text-right mt-3">
              <input
                type="submit"
                placeholder="Add Class"
                className="bg-transparent hover:bg-blue-700 text-blue-600 hover:text-white rounded shadow hover:shadow-lg py-1 px-3 border border-blue-600 hover:border-transparent"
              />
            </div>
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default InstructorAddClass;
