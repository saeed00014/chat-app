import Title from "./title";
import HocWraper from "../_components/hoc";
import Projects from "./projects";

const ProjectPage = () => {
  return (
    <HocWraper>
      <section className="flex flex-col w-full max-w-[1400px] h-full md:pt-[40px] pt-[20px] md:gap-20 gap-8 overflow-y-auto">
        <Title />
        <Projects />
      </section>
    </HocWraper>
  );
};

export default ProjectPage;
