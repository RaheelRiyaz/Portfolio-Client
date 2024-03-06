import { useContext, useEffect } from "react";
import { useState } from "react";
import { BASE_SERVICE } from "../../services/baseService";
import { HttpStatusCode } from "axios";
import Spinner from "../components/Spinner";
import { environment } from "../../../environments/environment.development";
import { context } from "../context/Context";
import { useNavigate } from "react-router-dom";
function Projects() {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  const navigateTo = useNavigate();

  const { setTechs } = useContext(context);

  function handleTechs(project) {
    setTechs(project?.technologies);
    navigateTo(`techs/${project?.project?.id}`);
  }

  useEffect(() => {
    BASE_SERVICE.Fetch("projects")
      .then((response) => {
        if (response.status === HttpStatusCode.Ok)
          setProjects(response?.data?.result);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Spinner />;
  else
    return (
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th>Avatar</th>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Github
              </th>
              <th scope="col" className="px-6 py-3">
                Live
              </th>
              <th className="px-6 py-3">Techs</th>
            </tr>
          </thead>
          <tbody>
            {projects?.map((_) => {
              return (
                <tr
                  key={_.project?.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th>
                    <img
                      className="h-16 object-cover w-16 rounded-full"
                      src={environment.IMAGE_BASE_PATH + _.project?.filePath}
                      alt="avatar"
                    />
                  </th>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {_.project?.name}
                  </th>
                  <td className="px-6 py-4">
                    <a
                      className="bg-gray-300 rounded-lg cursor-pointer hover:bg-gray-400 p-2"
                      target="_blank"
                      href={_.project?.githubLink}
                    >
                      View
                    </a>
                  </td>
                  <td className="px-6 py-4">
                    <a
                      className="bg-green-100 rounded-lg cursor-pointer hover:bg-green-200 p-2"
                      target="_blank"
                      href={_.project?.liveLink}
                    >
                      View
                    </a>
                  </td>
                  <td>
                    <button
                      className="bg-teal-200 rounded-lg p-2"
                      onClick={() => handleTechs(_)}
                    >
                      Techs
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
}

export default Projects;
