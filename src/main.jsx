import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";
import AuthContext from "./context/auth-context.jsx";
import { ReduxProvider } from "./redux/ReduxProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <ReduxProvider>
        <AuthContext>
          <App />
        </AuthContext>
      </ReduxProvider>
    </HelmetProvider>
  </React.StrictMode>
);
