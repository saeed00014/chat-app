import { projects } from "../data/data";
import Project2 from "./project2";

const Projects = () => {
  return (
    <div className="flex flex-col w-full h-full md:gap-16 gap-12 ">
      {projects.map((project) => {
        return (
          <div className="flex w-full h-full" key={project.id}>
            <Project2 project={project} />
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
