import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/main";
import HomePage from "../pages/home/home";
import AllRecipesPage from "../pages/recipes/all-recipes";
import AddRecipePage from "../pages/recipes/add-recipe";
import DetailsRecipePage from "../pages/recipes/details";

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
      {
        path: "add-recipe",
        element: <AddRecipePage />,
      },
      {
        path: "/recipe/:id",
        element: <DetailsRecipePage />,
      },
    ],
  },
]);

export default routes;
