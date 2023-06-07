import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import MainLayout from "./components/home/MainLayout.jsx";
import Login from "./components/Login/Login.jsx";
import Register from "./components/Registration/Register.jsx";
import Authprovider from "./components/Provider/Authprovider.jsx";
import ErrorPage from "./components/common/ErrorPage.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import Allusers from "./components/Dashboard/Allusers.jsx";
import Classes from "./components/Dashboard/Classes.jsx";
import InstructorAddClass from "./components/Dashboard/InstructorAddClass.jsx";
import InstructorMyClass from "./components/Dashboard/InstructorMyClass.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <MainLayout></MainLayout>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "/dashboard/allusers",
        element: <Allusers></Allusers>,
      },
      {
        path: "/dashboard/classes",
        element: <Classes></Classes>,
      },
      {
        path: "/dashboard/addClass",
        element: <InstructorAddClass></InstructorAddClass>,
      },
      {
        path: "/dashboard/myclass",
        element: <InstructorMyClass></InstructorMyClass>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Authprovider>
      <RouterProvider router={router} />
    </Authprovider>
  </React.StrictMode>
);
