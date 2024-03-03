import Admin from "./Admin";
import AdminHome from "./pages/Home";
import AdminProjects from "./pages/Projects";

export const AdminRoutes = {
  path: "admin",
  element: <Admin />,
  children: [
    { path: "", element: <AdminHome /> },
    { path: "projects", element: <AdminProjects /> },
  ],
};
