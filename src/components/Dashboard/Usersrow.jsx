import Swal from "sweetalert2";

const Usersrow = ({ user, index }) => {
  const { _id, email, role } = user || {};

  const makeUser = (email) => {
    console.log("clicked" + email);
    Swal.fire({
      icon: "success",
      title: "Congratulations",
      text: "The person is User now",
    });
    const currentUser = {
      role: "User",
    };
    return fetch(`http://localhost:5000/users/${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(currentUser),
    }).then((res) => res.json());
  };
  const makeInstructor = (email) => {
    console.log("clicked" + email);
    Swal.fire({
      icon: "success",
      title: "Congratulations",
      text: "The person is Instructor now",
    });
    const currentUser = {
      role: "Instructor",
    };
    return fetch(`http://localhost:5000/users/${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(currentUser),
    }).then((res) => res.json());
  };
  const makeAdmin = (email) => {
    console.log("clicked" + email);
    Swal.fire({
      icon: "success",
      title: "Congratulations",
      text: "The person is Admin now",
    });
    const currentUser = {
      role: "Admin",
    };
    return fetch(`http://localhost:5000/users/${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(currentUser),
    }).then((res) => res.json());
  };

  const DeleteUser = (email) => {
    // console.log(email);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/deleteUsers/${email}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
            // const restData = myToys.filter((t) => t._id !== _id);
            // setmyToys(restData);
          });
      }
    });
  };

  return (
    <>
      <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
        <td className="p-3">
          <p>{index + 1}</p>
        </td>
        <td className="p-3">
          <p>{email}</p>
        </td>
        <td className="p-3">
          <p>{role}</p>
        </td>
        <td className="p-3 flex gap-1">
          <button
            className="bg-transparent hover:bg-blue-700 text-blue-600 hover:text-white rounded shadow hover:shadow-lg py-1 px-3 border border-blue-600 hover:border-transparent"
            onClick={() => {
              makeUser(email);
            }}
          >
            User
          </button>
          <button
            className="bg-transparent hover:bg-blue-700 text-blue-600 hover:text-white rounded shadow hover:shadow-lg py-1 px-3 border border-blue-600 hover:border-transparent"
            onClick={() => {
              makeInstructor(email);
            }}
          >
            Instructor
          </button>
          <button
            className="bg-transparent hover:bg-blue-700 text-blue-600 hover:text-white rounded shadow hover:shadow-lg py-1 px-3 border border-blue-600 hover:border-transparent"
            onClick={() => {
              makeAdmin(email);
            }}
          >
            Admin
          </button>
        </td>
        <td>
          <button
            onClick={() => {
              DeleteUser(email);
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default Usersrow;
