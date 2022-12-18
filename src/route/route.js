import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Register from "../pages/Account/Register";
import Home from "../pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
]);
