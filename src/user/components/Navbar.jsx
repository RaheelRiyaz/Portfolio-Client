import { initFlowbite } from "flowbite";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const routes = [
    {
      text: "Home",
      route: "home",
    },
    {
      text: "Projects",
      route: "projects",
    },
    {
      text: "Skills",
      route: "skills",
    },
    {
      text: "Login",
      route: "login",
    },
  ];

  useEffect(() => {
    initFlowbite();
  }, []);

  return (
    <nav className="bg-gray-600 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NavLink
         to={'home'}
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="src/assets/icons8-r-64.png"
            className="h-8 hover:rotate-3"
            alt="Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-200">
            Rahil Riyaz
          </span>
        </NavLink>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-200 rounded-lg md:hidden cursor-pointer"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {routes.map((route, _) => {
              return (
                <li key={_}>
                  <NavLink
                    to={route.route}
                    className={({ isActive }) =>
                      `block py-2 px-3 hover:text-blue-600 cursor-pointer ${
                        isActive ? "text-blue-500" : "text-gray-200"
                      }`
                    }
                    aria-current="page"
                  >
                    {route.text}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
