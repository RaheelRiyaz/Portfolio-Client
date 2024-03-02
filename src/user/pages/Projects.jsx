import Heading from "../components/Heading";
import ProjectCard from "../components/Project-Card";

function Projects() {
  return (
    <section className="text-gray-600 body-font mt-10">
      <div className="p-5">
        <Heading title="Projects" />
      </div>
      <div className="container">
        <div className="flex flex-wrap justify-center items-center mt-4">
          {[1, 2, 3].map((_, i) => {
            return <ProjectCard key={i} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
