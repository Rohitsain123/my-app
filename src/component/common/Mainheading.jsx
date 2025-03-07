import React from "react";

function Mainheading({ mainheading }) {
  return (
    <h1 className="text-4xl md:text5xl lg:text-[70px] text-[#D7D9DD] max-w-[511px]">
      {mainheading}
    </h1>
  );
}

export default Mainheading;
