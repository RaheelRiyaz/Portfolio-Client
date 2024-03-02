import { useEffect, useState } from "react";
import { BASE_SERVICE } from "../../services/baseService";
import { HttpStatusCode } from "axios";
import { environment } from "../../../environments/environment.development";
import { NavLink } from "react-router-dom";

function Hero() {
  const [resume, setResume] = useState(null);

  useEffect(() => {
    BASE_SERVICE.Fetch("resume").then((response) => {
      if (response.status === HttpStatusCode.Ok) {
        setResume(response.data.result);
      }
    });
  }, []);

  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:text-left mb-16 md:mb-0">
          <h1 className="title-font text-xl font-medium text-blue-400 text-start">
            HELLO, I AM
            <br />
            <span className="text-4xl text-gray-200">Rahil Riyaz</span>
          </h1>
          <p className="mb-8 mt-3 leading-relaxed text-gray-300">
            I am passionate about creating experiences that are easy to use,
            <br className="md:block hidden" />
            accessible, and that meet the user&apos;s needs.
          </p>
          <div className="flex justify-start">
            <NavLink to={'/projects'} className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-3xl text-lg">
              Projects
            </NavLink>
            <a
              href={environment.IMAGE_BASE_PATH + resume?.filePath}
              target="_blank"
              className="ml-4 flex justify-center items-center gap-2 text-white bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded-3xl text-lg"
            >
              Resume <i className="fa-solid fa-download"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
