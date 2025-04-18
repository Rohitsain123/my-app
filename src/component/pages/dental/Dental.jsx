"use client";
import H5heading from "@/component/common/H5heading";
import Para from "@/component/common/Para";
import Para2 from "@/component/common/Para2";
import { dentaldata } from "@/component/helper/Helper";
import { PlusIcon } from "@/component/helper/Icon";
import React, { useState } from "react";

function Dental() {
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
            h5Class={"!text-[#494336] text-2xl md:text-3xl lg:text-4xl"}
            h5heading={"Why Choose Nebula Vets for Dental Care:"}
          />
          {dentaldata.map((item, index) => (
            <div key={index}>
              <div className="flex items-center justify-between mt-8">
                <Para pClass={"!text-[#494336] !mt-0"} para={item.title} />
                <div
                  onClick={() => toggle(index)}
                  className={`transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : ""
                  }`}
                >
                  <PlusIcon />
                </div>
              </div>
              {openIndex === index && <Para2 para2={item.para} />}
              <div className="w-full h-[3px] bg-[linear-gradient(90deg,#FFA280_0%,#8FD9CB_100%)] mt-8"></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Dental;
