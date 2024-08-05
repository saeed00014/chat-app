import Image from "next/image";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";

const Project2 = ({ project }) => {
  return (
    <article className="flex lg:flex-row flex-col-reverse w-full h-fit justify-around gap-4">
      <div className="flex flex-col justify-center lg:w-[50%] w-full gap-4">
        <div className="flex md:flex-row flex-col md:items-center md:gap-6 gap-4">
          <h2 className="text-2xl font-semibold">{project.name}</h2>
          <div className="flex gap-4">
            {project.Link.map((link) => {
              return (
                <a
                  key={project.link}
                  href={link.path}
                  target="_blank"
                  className="flex items-center justify-center bg-gray-900 rounded-full cursor-pointer"
                >
                  {link.name == "Github" ? (
                    <div className="flex items-center gap-2">
                      <FaGithub className="text-[1.5rem]" />
                      <span>GitHub</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <GoArrowUpRight className="text-[1.4rem]" />
                      <span>website</span>
                    </div>
                  )}
                </a>
              );
            })}
          </div>
        </div>
        <p>{project.dis}</p>
        <ul className="flex flex-wrap gap-2">
          {project.skill.map((skill) => {
            return (
              <li
                className="px-2 py-1 w-fit h-fit rounded-full bg-g_Background_Shaded"
                key={skill.id}
              >
                {skill.name}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="relative flex flex-col items-center justify-center min-w-max lg:h-full h-fit gap-4">
        {!project.video && (
          <div className="relative flex h-fit w-fit">
            <Image
              width={300}
              height={200}
              src={project.img}
              alt={`${project.name}'s image`}
              className="object-contain lg:w-[400px] w-[300px] rounded-[.4rem]"
            />
          </div>
        )}
        {project.video && (
          <video
            controls
            className="object-contain lg:w-[400px] md:w-[350px] w-[300px] rounded-[.4rem]"
            src={project.video}
          ></video>
        )}
      </div>
    </article>
  );
};

export default Project2;
