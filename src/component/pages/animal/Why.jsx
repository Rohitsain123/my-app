"use client";
import H5heading from "@/component/common/H5heading";
import Para from "@/component/common/Para";
import Para2 from "@/component/common/Para2";
import { animalhealthData } from "@/component/helper/Helper";
import { PlusIcon } from "@/component/helper/Icon";
import React, { useState } from "react";

function Why() {
  const [openIndex, setOpenIndex] = useState(null);
  function toggle(index) {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  }
  return (
    <>
      <div className="bg-[#fff] py-[60px] lg:py-[80px]">
        <div className="max-w-[1440px] px-[32px] sm:px-[80px] lg:px-[120px] xl:px-[180px] mx-auto">
          <H5heading
            h5Class={"!text-[#494336] !text-2xl md:!text-3xl lg:!text-[4xl]"}
            h5heading={"Why Animal Health Checks Matter:"}
          />
          {animalhealthData.map((item, index) => (
            <div key={index}>
              <div className="flex justify-between pt-8">
                <Para pClass={"!text-[#494336] !mt-0 "} para={item.title} />
                <div
                  onClick={() => toggle(index)}
                  className={`transform transition-transform duration-300 max-w-[40px] ${
                    openIndex === index ? "rotate-45" : ""
                  }`}
                >
                  <PlusIcon />
                </div>
              </div>
              {openIndex === index && (
                <Para2 paraClass={"!text-[#494336]"} para2={item.para} />
              )}
              <div className="w-full h-[3px] bg-[linear-gradient(90deg,#FFA280_0%,#8FD9CB_100%)] mt-6"></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Why;
