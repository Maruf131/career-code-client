import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/home/Home";
import Resister from "../pages/resister/Resister";
import SignIn from "../pages/signIn/SignIn";

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
            path: "/resister",
            Component: Resister
        },
        {
            path: "//login",
            Component: SignIn
        }
    ]
  },
]);

export default router;