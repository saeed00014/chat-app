import Link from "next/link";
import { navLinks } from "../../data/data";

const MenueList = () => {
  return (
    <ul className="hidden md:flex justify-between w-full max-w-[400px]">
      {navLinks.map((link) => {
        return (
          <li
            key={link.name}
            className={`relative flex items-center justify-center text-[20px] text-g_Text_White after:content-['_'] after:absolute after:-bottom-1 after:flex after:h-[1px] after:w-0 hover:after:w-full after:transition-all after:duration-200 after:bg-g_Button_Active`}
          >
            <Link href={`${link.link}`}>{link.name}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MenueList;
