"use client";
import Link from "next/link";
import { useState } from "react";
import { navLinks } from "../../data/data";
import HambIcon from "./hambIcon";

const HambMenue = () => {
  const [hamb, setHamb] = useState(false);

  return (
    <div className="md:hidden flex justify-end w-full">
      <HambIcon setHamb={setHamb} hamb={hamb} />
      <ul
        className={`fixed md:top-[80px] top-[65px] bottom-0 md:hidden flex ${
          hamb ? "right-0" : "-right-full"
        } transition-all duration-500 flex-col items-end w-full bg-g_Background_Element md:pt-28 pt-20 gap-16 overflow-y-auto`}
      >
        {navLinks.map((link) => {
          return (
            <li
              key={link.name}
              className="flex w-full items-center justify-center gap-4"
            >
              <Link
                href={link.link}
                onClick={() => setHamb(false)}
                className="relative flex items-center justify-center h-8 text-g_Text_Black font-[600] text-4xl"
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HambMenue;
