import Admin from "./Admin";
import AdminHome from "./pages/Home";
import AdminProjects from "./pages/Projects";
import Techs from "./pages/Techs";
import Skills from "./pages/Skills";
import AddSkill from "./pages/AddSkill";
import Experiences from "./pages/Experiences";
import AddExp from "./pages/AddExp";
import Resume from "./pages/Resume";
import AddProject from "./pages/AddProject";

export const AdminRoutes = {
  path: "admin",
  element: <Admin />,
  children: [
    { path: "", element: <AdminHome /> },
    {
      path: "experiences",
      children: [
        { path: "", element: <Experiences /> },
        { path: "add", element: <AddExp /> },
      ],
    },
    {
      path: "projects",
      children: [
        { path: "", element: <AdminProjects /> },
        { path: "add", element: <AddProject /> },
      ],
    },
    { path: "resume", element: <Resume /> },
    {
      path: "skills",
      children: [
        { path: "", element: <Skills /> },
        { path: "add", element: <AddSkill /> },
      ],
    },
    { path: "projects/techs/:id", element: <Techs /> },
  ],
};
