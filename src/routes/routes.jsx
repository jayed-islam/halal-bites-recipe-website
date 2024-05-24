import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/main";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
      },
    ],
  },
]);

export default routes;
