import Link from "next/link";
import HocWraper from "./(portfolio)/_components/hoc";
import Description from "./(portfolio)/home/description";
import NameAnime from "./(portfolio)/home/NameAnime";

const Home = () => {
  return (
    <HocWraper>
      <section className="flex flex-col w-full max-w-[1400px] h-fit m-auto gap-10 pb-[80px] xl:pl-14 md:pl-12 pl-1">
        <NameAnime />
        <Description />
        <Link
          href="/projects"
          className={`relative flex items-center justify-center md:w-56 md:h-14 w-[40vw] h-[10vw] min-w-[10rem] max-w-[14rem] min-h-[2.8rem] max-h-[3.5rem] md:text-2xl text-clamp3 border-[1px] before:content-['_'] before:absolute before:w-full before:h-full before:bg-g_Background_Shaded before:-left-[108%] hover:before:left-0 before:transition-all before:duration-700 before:z-0 after:content-['_'] after:absolute after:w-20 after:h-full after:bg-g_Background_Shaded after:right-[87%] after:top-5 after:rotate-[50deg] hover:after:-right-12 after:transition-all after:duration-700 after:z-0 overflow-hidden`}
        >
          <span className="absolute z-10">Projects</span>
        </Link>
      </section>
    </HocWraper>
  );
};

export default Home;
