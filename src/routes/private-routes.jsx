/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AppContext } from "../context/auth-context";
import { Navigate, useLocation } from "react-router-dom";
import { paths } from "../layouts/paths";

const PrivateRoutes = ({ children }) => {
  const { user, isLoading } = useContext(AppContext);

  const location = useLocation();

  //   const from = location.state?.form?.pathname || "/";

  if (user && user.uid) {
    return children;
  }

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  return <Navigate to={paths.root} state={{ from: location }} replace />;
};

export default PrivateRoutes;
