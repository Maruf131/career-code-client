import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/home/Home";
import Resister from "../pages/resister/Resister";
import SignIn from "../pages/signIn/SignIn";
import JobDetails from "../pages/jobDetails/JobDetails";
import PrivateRoute from "../routes/PrivateRoute";
import JobApply from "../pages/JobApply/JobApply";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children:[
        {
            index: true,
            Component: Home
        },
        {
          path : "/jobs/:id",
          Component: JobDetails,
          loader:({params}) => fetch(`http://localhost:5000/jobs/${params.id}`)
        },
        {
          path: "/jobApply/:id",
          element:<PrivateRoute><JobApply></JobApply></PrivateRoute>
        },
        {
            path: "/resister",
            Component: Resister
        },
        {
            path: "/login",
            Component: SignIn
        }
    ]
  },
]);

export default router;