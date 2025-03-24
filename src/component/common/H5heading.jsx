import React from "react";

function H5heading({ h5heading, h5Class }) {
  return (
    <>
      <h5
        className={`text-base md:text-xl lg:text-2xl text-[#D7D9DD] ${h5Class}`}
      >
        {h5heading}
      </h5>
    </>
  );
}

export default H5heading;
