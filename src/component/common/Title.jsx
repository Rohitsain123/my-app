import React from "react";

function Title({ heading, className }) {
  return (
    <h4
      className={`text-base md:text-xl lg:text-[28px] text-[#494336] roboto ${className}`}
    >
      {heading}
    </h4>
  );
}

export default Title;
