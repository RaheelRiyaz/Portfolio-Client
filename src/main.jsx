import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Home from "./user/pages/Home.jsx";
import Projects from "./user/pages/Projects.jsx";
import DemoVideo from "./user/pages/DemoVideo.jsx";
import Login from "./user/pages/Login.jsx";

const routes = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      { path: "", element: <Navigate to={"home"} /> },
      { path: "home", element: <Home /> },
      { path: "projects", element: <Projects /> },
      { path: "demo", element: <DemoVideo /> },
      { path: "login", element: <Login /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
