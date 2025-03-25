import Booklink from "@/component/common/Booklink";
import H5heading from "@/component/common/H5heading";
import Para from "@/component/common/Para";
import Para2 from "@/component/common/Para2";
import { leftData } from "@/component/helper/Helper";
import Image from "next/image";
import React from "react";

function Preventivecare() {
  return (
    <>
      <div className="max-w-[1440px]  mx-auto">
        {leftData.map((item, index) => (
          <div key={index} className="flex flex-wrap">
            <div className="bg-[#fff] md:w-[43%] w-[100%] ps-[32px] sm:ps-[40px] lg:ps-[50px] lg:ps-[70px] pe-[40px] py-[60px] lg:py-[80px]">
              <div className="max-w-[218px] md:max-w-[376px]">
                <Image
                  className="w-full"
                  src={item.img}
                  width={376}
                  height={304}
                  alt={"icon"}
                />
              </div>
              <H5heading
                h5Class={
                  "!text-[#494336] !text-[32px] md:!text-4xl lg:!text-5xl mt-[-40px] md:mt-[0px]"
                }
                h5heading={item.title}
              />
              <Para
                pClass={"!text-[#494336] text-base md:text-xl lg:text-2xl"}
                para={item.subheading}
              />
              <Para2
                paraClass={"text-sm md:text-base lg:text-xl"}
                para2={item.para}
              />
              <Booklink booklink={item.bookbtn} />
            </div>
            <div className="bg-[rgba(215,217,221,0.50);] md:w-[57%] w-[100%] ps-[32px]  md:px-[70px] lg:ps-[115px] pe-[32px] py-[60px] lg:py-[80px] ">
              {item.subdata.map((items, i) => (
                <div
                  key={i}
                  className={`border-b-[1px] pb-[60px] ${
                    i === 0 ? "-mt-15" : ""
                  }`}
                >
                  {" "}
                  <H5heading
                    h5Class={
                      "text-base md:text-2xl lg:text-[28px] !text-[#494336] mt-[60px] "
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

export default Preventivecare;
