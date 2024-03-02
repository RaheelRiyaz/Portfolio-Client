import { useEffect, useState } from "react";
import Heading from "../components/Heading";
import ProjectCard from "../components/Project-Card";
import { BASE_SERVICE } from "../../services/baseService";
import { HttpStatusCode } from "axios";
import Skelton from "../components/Skelton";

function Projects() {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    BASE_SERVICE.Fetch("projects")
      .then((response) => {
        if (response.status === HttpStatusCode.Ok)
          setProjects(response?.data?.result);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <section className="text-gray-600 body-font mt-10 md:ml-8">
      <div className="p-5">
        <Heading title="Projects" />
      </div>
      <div className="container">
        <div className="flex flex-wrap justify-start items-center mt-4">
          {loading
            ? Array(6).fill(0).map((_, i) => {
                return <Skelton key={i} />;
              })
            : projects?.map((_, i) => {
                return <ProjectCard key={i} project={_} />;
              })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
