import { Navigate } from "react-router-dom";
import App from "../App";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import DemoVideo from "./pages/DemoVideo";
import SkillSet from "./pages/SkillSet";
import Login from "./pages/Login";
import Experiences from "./pages/Experiences";

export const UserRoutes = {
  path: "",
  element: <App />,
  children: [
    { path: "", element: <Navigate to={"home"} /> },
    { path: "home", element: <Home /> },
    { path: "projects", element: <Projects /> },
    { path: "demo", element: <DemoVideo /> },
    { path: "skills", element: <SkillSet /> },
    { path: "login", element: <Login /> },
    { path: "experiences", element: <Experiences /> },
  ],
};
