import { useEffect, useState } from "react";
import { BASE_SERVICE } from "../../services/baseService";
import { HttpStatusCode } from "axios";
import Spinner from "../components/Spinner";
import { NavLink } from "react-router-dom";

function Experiences() {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    BASE_SERVICE.Fetch("experiences")
      .then((response) => {
        if (response.status === HttpStatusCode.Ok)
          setExperiences(response.data?.result);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Spinner />;
  else
    return (
      <main>
        <NavLink to={"add"} className="bg-gray-100 p-2 rounded-lg">
          Add Experience +
        </NavLink>
        <div className="flex justify-start items-center flex-wrap gap-3 mt-3">
          {experiences.map((_) => {
            return (
              <a
                key={_.id}
                className="block max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {_.company}
                </h5>
                <strong>({_.designation})</strong>
                <h5 className="mb-2 text-sm tracking-tight text-gray-900 dark:text-white mt-2">
                  {_.from} - {_.to}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  {_.description}
                </p>
              </a>
            );
          })}
        </div>
      </main>
    );
}

export default Experiences;
