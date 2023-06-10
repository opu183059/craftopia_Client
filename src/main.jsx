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
import Privateroute from "./components/Privateroute/Privateroute.jsx";
import AllClasses from "./components/Classes/AllClasses.jsx";
import InstructorsPage from "./components/Instructors.jsx/InstructorsPage.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SelectedClass from "./components/Dashboard/SelectedClass.jsx";
import TermsAndCondition from "./components/common/TermsAndCondition.jsx";
import InstructorUpdateClass from "./components/Dashboard/InstructorUpdateClass.jsx";

const queryClient = new QueryClient();
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
      {
        path: "/classes",
        element: <AllClasses></AllClasses>,
      },
      {
        path: "/instructor",
        element: <InstructorsPage></InstructorsPage>,
      },
      {
        path: "/termsAndCondition",
        element: <TermsAndCondition></TermsAndCondition>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <Privateroute>
        <Dashboard></Dashboard>
      </Privateroute>
    ),
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
      {
        path: "/dashboard/myclass/updateclass/:id",
        element: <InstructorUpdateClass></InstructorUpdateClass>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/classSearch/${params.id}`),
      },
      {
        path: "/dashboard/selectedClasses",
        element: <SelectedClass></SelectedClass>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Authprovider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Authprovider>
  </React.StrictMode>
);
