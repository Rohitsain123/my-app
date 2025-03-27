import React from "react";

function Para({ para, pClass }) {
  return (
    <p
      className={`text-base md:text-xl lg:text-[28px] text-[#D7D9DD]  mt-[15px] lg:mt-[25px] ${pClass}`}
    >
      {para}
    </p>
  );
}

export default Para;
