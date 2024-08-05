import React from "react";
import { skill } from "../data/data";
import Image from "next/image";

const Skills = () => {
  return (
    <ul className="flex flex-wrap justify-center items-center md:w-[40rem] w-full h-fit gap-4">
      {skill.map((skill) => {
        return (
          <li
            key={skill.skill}
            className="group relative flex items-center justify-center xl:p-5 md:p-4 p-2 bg-g_Background_Shaded rounded-2xl"
          >
            <Image
              width={48}
              height={48}
              src={skill.img}
              alt={skill.name}
              className="object-contain xl:scale-110"
            />
            <span className="group absolute -top-7 px-2 rounded-[.4rem] bg-g_Border_Shaded hidden group-hover:flex transition-all duration-300">
              {skill.name}
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export default Skills;
