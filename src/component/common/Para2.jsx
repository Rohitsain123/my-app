import React from "react";

function Para2({ para2, paraClass }) {
  return (
    <>
      <p className={`text-sm md:text-lg lg:text-xl mt-[25px] ${paraClass}`}>
        {para2}
      </p>
    </>
  );
}

export default Para2;
