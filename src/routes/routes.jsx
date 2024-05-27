import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/main";
import HomePage from "../pages/home/home";
import AllRecipesPage from "../pages/recipes/all-recipes";
import AddRecipePage from "../pages/recipes/add-recipe";
import DetailsRecipePage from "../pages/recipes/details";
import PurchaseCoinPage from "../pages/purchase/purchase";
import PaymentPage from "../pages/purchase/payment";
import PrivateRoutes from "./private-routes";

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
        element: (
          <PrivateRoutes>
            <AddRecipePage />
          </PrivateRoutes>
        ),
      },
      {
        path: "/recipe/:id",
        element: (
          <PrivateRoutes>
            <DetailsRecipePage />
          </PrivateRoutes>
        ),
      },
      {
        path: "/purchase",
        element: <PurchaseCoinPage />,
      },
      {
        path: "/payment/:id",
        element: <PaymentPage />,
      },
    ],
  },
]);

export default routes;
