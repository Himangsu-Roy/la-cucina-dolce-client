import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Chefs from "../components/Chefs/Chefs";
// import Chefs from "../Chefs/Chefs";
import Main from "../layout/Main";
import Blog from "../pages/Blog/Blog";
import Login from "../pages/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <App></App>,
    element: <App></App>,
    loader: () => fetch("http://localhost:5000/chefs"),
    children: [
      {
        path: "/chefs",
        element: <Chefs></Chefs>,
      },
    ],
  },
  {
    path: "/blog",
    element: <Blog></Blog>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
]);

export default router;
