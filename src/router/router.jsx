import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/home/Home";
import Resister from "../pages/resister/Resister";
import SignIn from "../pages/signIn/SignIn";
import JobDetails from "../pages/jobDetails/JobDetails";
import PrivateRoute from "../routes/PrivateRoute";
import JobApply from "../pages/JobApply/JobApply";
import MyApplications from "../pages/MyApplications/MyApplications";
import AddJob from "../AddJob/AddJob";
import MyPostedJobs from "../pages/MyPostedJobs/MyPostedJobs";
import ViewApplications from "../pages/ViewApplications/ViewApplications";

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
          loader:({params}) => fetch(`http://localhost:5001/jobs/${params.id}`)
        },
        {
          path: "/jobApply/:id",
          element:<PrivateRoute><JobApply></JobApply></PrivateRoute>
        },
        {
          path: "/myApplications",
          element: <PrivateRoute><MyApplications></MyApplications></PrivateRoute>
        },
        {
          path: "/addJob",
          element: <PrivateRoute><AddJob></AddJob></PrivateRoute>
        },
        {
          path: '/myPostedJobs',
          element: <PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>
        },
        {
          path: '/applications/:job_id',
          element: <PrivateRoute><ViewApplications></ViewApplications> </PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5001/applications/job/${params.job_id}`)
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