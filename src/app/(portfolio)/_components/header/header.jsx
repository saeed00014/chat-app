import HambMenue from "./hambMenue";
import Logo from "./logo";
import MenueList from "./menueList";

const Header = () => {
  return (
    <header className="sticky top-0 left-0 right-0 flex justify-center xl:px-4 md:h-[80px] h-[65px] w-full z-50 bg-g_Background_Black [&>*]:text-white [&>*]:bg-g_Background_Black [&>*]:font-secondary">
      <nav className="flex items-center justify-between w-full h-full max-w-[1400px] xl:px-0 md:px-4 px-2 py-5">
        <Logo />
        <MenueList />
        <HambMenue />
      </nav>
    </header>
  );
};

export default Header;
