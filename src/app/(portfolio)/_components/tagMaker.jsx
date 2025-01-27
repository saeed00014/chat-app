import React from "react";

const TagMaker = ({ tag, index }) => {
  1;
  return (
    <span
      className={`absolute ${
        index == "1"
          ? `${tag == "div" ? "-top-10" : "-top-8"}`
          : `${tag == "/div" ? "-bottom-20" : "-bottom-8"}`
      } ${
        tag == "div" || tag == "/div" ? "md:-left-6" : "md:-left-4"
      } text-g_Text_Shaded opacity-60 font-primary text-2xl`}
    >
      &lt;{tag}&gt;
    </span>
  );
};

export default TagMaker;
