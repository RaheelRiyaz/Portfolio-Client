import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { UserRoutes } from "./user/UserRouting.jsx";
import { AdminRoutes } from "./admin/AdminRouting.jsx";

const routes = createBrowserRouter([UserRoutes, AdminRoutes]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
