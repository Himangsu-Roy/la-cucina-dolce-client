import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Chefs from "../components/Chefs/Chefs";
import ErrorPage from "../components/ErrorPage/ErrorPage";
// import Chefs from "../Chefs/Chefs";
import Main from "../layout/Main";
import Blog from "../pages/Blog/Blog";
import Login from "../pages/Login/Login";
import Recipes from "../pages/Recipes/Recipes";
import Register from "../pages/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch("http://localhost:5000/chefs"),
    errorElement: <ErrorPage />,
  },
  {
    path: "/recipes/:id",
    element: <Recipes></Recipes>,
  },
  {
    path: "/blog",
    element: <Blog></Blog>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);

export default router;
