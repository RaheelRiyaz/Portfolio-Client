import { initFlowbite } from "flowbite";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  useEffect(() => {
    initFlowbite();
  }, []);

  return (
    <nav className="bg-gray-600 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NavLink
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
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
            <li>
              <NavLink
                to={"home"}
                className={({ isActive }) =>
                  `block py-2 px-3 hover:text-blue-600 cursor-pointer ${
                    isActive ? "text-blue-500" : "text-gray-200"
                  }`
                }
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"projects"}
                className={({ isActive }) =>
                  `block py-2 px-3 hover:text-blue-600 cursor-pointer ${
                    isActive ? "text-blue-500" : "text-gray-200"
                  }`
                }
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
              to={"skills"}
                className={({ isActive }) =>
                  `block py-2 px-3 hover:text-blue-600 cursor-pointer ${
                    isActive ? "text-blue-500" : "text-gray-200"
                  }`
                }
              >
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink
              to={'resume'}
                className={({ isActive }) =>
                  `block py-2 px-3 hover:text-blue-600 cursor-pointer ${
                    isActive ? "text-blue-500" : "text-gray-200"
                  }`
                }
              >
                Resume
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
