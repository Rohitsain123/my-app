import Booklink from "@/component/common/Booklink";
import H5heading from "@/component/common/H5heading";
import Para from "@/component/common/Para";
import Para2 from "@/component/common/Para2";
import { leftsurgeryData } from "@/component/helper/Helper";
import Image from "next/image";
import React from "react";

function Surgery() {
  return (
    <>
      <div className="max-w-[1440px] w-[100%] mx-auto">
        {leftsurgeryData.map((item, index) => (
          <div key={index} className="flex flex-wrap md:flex-nowrap">
            <div className="bg-[#fff] w-[100%] md:w-[43%] ps-[32px] sm:ps-[40px] md:ps-[50px] lg:ps-[70px] pe-[32px] md:pe-[60px] mt-[120] md:mt-[-70px] pb-[60px]">
              <div className="max-w-[180px] md:max-w-[350px]">
                <Image
                  src={item.img}
                  width={350}
                  height={346}
                  alt={"surgery"}
                />
              </div>
              <H5heading
                h5Class={
                  "!text-[#494336] !text-[32px] md:!text-4xl lg:1text-5xl roboto mt-[-40px] md:mt-[90px]"
                }
                h5heading={item.title}
              />
              <Para
                pClass={"!text-[#494336] text-base md:text-xl lg:text-[24px]"}
                para={item.subheading}
              />
              <Para2
                paraClass={"text-sm md:text-base lg:text-xl"}
                para2={item.para}
              />
              <Booklink booklink={item.bookbtn} />
            </div>
            <div className="w-[100%] md:w-[57%] bg-[rgba(215,217,221,0.50);] ps-[32px] sm:ps-[40px] md:ps-[50px] lg:ps-[115px] pe-[32px] md:pe-[70px] py-[60px] lg:py-[80px]">
              {item.subdata.map((items, i) => (
                <div
                  key={i}
                  className={`border-b-[1px] pb-[60px] ${
                    i === 0 ? "mt-12" : ""
                  }`}
                >
                  <H5heading
                    h5Class={
                      "!text-[#494336] text-base md:text-xl lg:text-[28px] mt-12"
                    }
                    h5heading={items.title}
                  />
                  <Para2 para2={items.para} />
                  <Booklink booklink={items.learnbtn} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Surgery;
