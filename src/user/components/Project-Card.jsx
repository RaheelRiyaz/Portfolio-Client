/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import TechCard from "../components/TechCard";
import { environment } from "../../../environments/environment.development";
function ProjectCard({ project }) {
  return (
    <div className="p-4 md:w-1/3">
      <div className="md:h-[30rem] h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <img
          className="lg:h-48 md:h-36 w-full object-cover object-center"
          src={environment.IMAGE_BASE_PATH + project?.project?.filePath}
          alt="project"
        />
        <div className="p-6">
          <h2 className="tracking-widest text-lg title-font font-medium text-gray-100 mb-1">
            {project?.project?.name}
          </h2>
          <h1 className="title-font text-lg font-medium mt-3 text-gray-900 mb-3 flex flex-wrap justify-start items-center gap-1">
            {project?.technologies?.map((_, i) => (
              <TechCard title={_} key={i} />
            ))}
          </h1>
          <p className="leading-relaxed mb-3">
            {project?.project?.description}
          </p>
          <div className="flex items-center flex-wrap ">
            {project?.project?.demoVideoPath ? (
              <NavLink
                to={`/demo?url=${project?.project?.demoVideoPath}`}
                className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
              >
                Watch demo
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </NavLink>
            ) : (
              <NavLink className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                No demo available
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </NavLink>
            )}

            <a
              href={
                project?.project?.githubLink ? project?.project?.githubLink : ""
              }
              target="_blank"
              className="text-gray-800 gap-1 hover:text-gray-900 cursor-pointer mr-3 flex justify-center items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm p-3 py-4 rounded-2xl h-6 bg-gray-200 hover:bg-gray-300"
            >
              <i className="fa-brands fa-github"></i> Github
            </a>
            <span className="inline-flex items-center leading-none text-sm bg-gray-700 hover:bg-gray-800 cursor-pointer p-2 rounded-2xl px-4 text-white">
              Live
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
