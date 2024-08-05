const Description = () => {
  return (
    <div className="flex flex-col w-full h-fit md:gap-6 gap-[2vw]">
      <h1 className="md:text-5xl text-3xl font-[600]">Get to know me</h1>
      <p className="md:text-2xl text-[1rem] text-justify">
        Professional and creative front-end developer with one year of
        experience at developing attractive and efficient websites. Capable of
        modern technologies and using the best tools to create an advanced user
        interface and experience. Ability to communicate effectively with team
        members and the back-end group and customers to ensure optimal and
        enjoyable user interface and experience. Interested in continuous
        learning and being up-to-date and using the team&apos;s experience to do
        the work in the best possible way.
      </p>
      <a
        href="/resume.pdf"
        download
        className="relative md:flex hidden items-center justify-center md:w-56 md:h-14 w-[40vw] h-[10vw] min-w-[10rem] max-w-[14rem] min-h-[2.8rem] max-h-[3.5rem] md:text-2xl text-clamp3 border-[1px] before:content-['_'] before:absolute before:w-full before:h-full before:bg-g_Background_Shaded before:-left-[108%] hover:before:left-0 before:transition-all before:duration-700 before:z-0 after:content-['_'] after:absolute after:w-20 after:h-full after:bg-g_Background_Shaded after:right-[87%] after:top-5 after:rotate-[50deg] hover:after:-right-12 after:transition-all after:duration-700 after:z-0 overflow-hidden"
      >
        <span className="absolute z-10">Resume</span>
      </a>
    </div>
  );
};

export default Description;
