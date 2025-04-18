"use client";
import Para2 from "@/component/common/Para2";
import { accordianData } from "@/component/helper/Helper";
import { PlusIcon } from "@/component/helper/Icon";
import React, { useState } from "react";

function Accordian() {
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
        <div className="max-w-[1440px] px-[32px] sm:px-[80px] lg:px-[120px] xl:px-[180px]">
          {accordianData.map((item, index) => (
            <div key={index}>
              <div className="flex flex-row items-center justify-between mt-7">
                <Para2 paraClass={"!mt-0"} para2={item.title} />
                <div
                  onClick={() => toggle(index)}
                  className={`transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : ""
                  }`}
                >
                  <PlusIcon />
                </div>
              </div>
              {openIndex === index && (
                <Para2 paraClass={"!text-lg"} para2={item.para} />
              )}
              <div className="w-full h-[3px] bg-[linear-gradient(90deg,#FFA280_0%,#8FD9CB_100%)] mt-6"></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Accordian;
