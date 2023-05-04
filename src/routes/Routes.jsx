import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Blog from "../pages/Blog/Blog";
import Login from "../pages/Login/Login";
import Recipes from "../pages/Recipes/Recipes";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () =>
      fetch("https://chef-recipe-hunter-server-chi.vercel.app/chefs"),
    errorElement: <ErrorPage />,
  },
  {
    path: "/recipes/:id",
    element: (
      <PrivateRoute>
        <Recipes></Recipes>
      </PrivateRoute>
    ),
    loader: ({ params }) =>
      fetch(
        `https://chef-recipe-hunter-server-chi.vercel.app/recipes/${params.id}`
      ),
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
