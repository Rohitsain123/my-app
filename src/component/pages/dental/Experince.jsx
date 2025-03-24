import Title from "@/component/common/Title";
import { caredata } from "@/component/helper/Helper";
import React from "react";

function Experince() {
  return (
    <>
      <div className="bg-[rgba(215,217,221,0.50);] py-[60px] lg:py-[80px] ">
        <div className="max-w-[1440px] px-[32px] sm:px-[80px] lg:px-[120px] xl:px-[180px]">
          {caredata.map((item, index) => (
            <div key={index}>
              <h5 className="text-2xl md:text-3xl lg:text-4xl text-[#494336] ">
                {item.title}
              </h5>
              <p className="text-sm md:text-base lg:text-lg mt-[25px]">
                {item.para}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Experince;
