import H5heading from "@/component/common/H5heading";
import Para2 from "@/component/common/Para2";
import { servicenebulaData } from "@/component/helper/Helper";
import React from "react";

function Experience() {
  return (
    <>
      <div className="bg-[rgba(215,217,221,0.50);] py-[60px] lg:py-[80px]">
        <div className="max-w-[1440px] px-[32px] sm:px-[80px] lg:px-[120px] xl:px-[180px] mx-auto">
          {servicenebulaData.map((item, index) => (
            <div key={index}>
              <H5heading
                h5Class={"!text-[#494336] text-2xl md:text-3xl lg:text-4xl"}
                h5heading={item.title}
              />
              <Para2
                paraClass={"!text-[#494336] !text-sm md:!text-base lg:!text-lg"}
                para2={item.para}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Experience;
