import React from "react";
import { namesIntro } from "../data/data";

const NameAnime = () => {
  const LetterMaker = ({ letter }) => {
    return (
      <span className="flex md:text-7xl text-clamp md:h-[initial] h-[14.5vw] !font-medium hover:scale-125 transition-all duration-160 hover:text-g_Background_Shaded">
        {letter.name}
      </span>
    );
  };

  return (
    <div className="relative">
      <div className="flex flex-col gap-4 -mb-1">
        <span className="md:-ml-[3rem] text-g_Text_Shaded opacity-60 font-primary text-2xl">
          &lt;div&gt;
        </span>
        <span className="md:-ml-[1.3rem] text-g_Text_Shaded opacity-60 font-primary text-2xl">
          &lt;h1&gt;
        </span>
      </div>

      <h1 className="flex lg:flex-row flex-col">
        <div className="flex gap-1">
          <div className="flex">
            {namesIntro.nameOne.map((letter) => {
              return (
                <div key={letter.id}>
                  <LetterMaker letter={letter} />
                </div>
              );
            })}
          </div>
          <div className="flex">
            {namesIntro.nameTwo.map((letter) => {
              return (
                <div key={letter.id}>
                  <LetterMaker letter={letter} />
                </div>
              );
            })}
          </div>
          <div className="flex">
            {namesIntro.nameThree.map((letter) => {
              return (
                <div key={letter.id}>
                  <LetterMaker letter={letter} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex gap-1">
          <div className="flex">
            {namesIntro.nameFour.map((letter) => {
              return (
                <div key={letter.id}>
                  <LetterMaker letter={letter} />
                </div>
              );
            })}
          </div>
          <div className="flex">
            {namesIntro.nameFive.map((letter) => {
              return (
                <div key={letter.id}>
                  <LetterMaker letter={letter} />
                </div>
              );
            })}
          </div>
        </div>
      </h1>
      
    </div>
  );
};

export default NameAnime;
