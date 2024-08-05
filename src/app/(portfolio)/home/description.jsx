import React from "react";
import TagMaker from "../_components/tagMaker";

const Description = () => {
  return (
    <div className="relative flex flex-col md:gap-2 gap-1">
      <TagMaker tag="p" index="1" />
      <p className="md:text-2xl text-clamp2">
        Im a frontend Web Developer .
      </p>
      <p className="md:text-2xl text-clamp2">
        You Can Browse my Portfolio to know Me Better.
      </p>
    </div>
  );
};

export default Description;
