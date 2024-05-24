import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/main";
import HomePage from "../pages/home/home";
import AllRecipesPage from "../pages/recipes/all-recipes";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "all-recipes",
        element: <AllRecipesPage />,
      },
    ],
  },
]);

export default routes;
