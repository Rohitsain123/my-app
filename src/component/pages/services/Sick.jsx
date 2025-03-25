import Booklink from "@/component/common/Booklink";
import H5heading from "@/component/common/H5heading";
import Para from "@/component/common/Para";
import Para2 from "@/component/common/Para2";
import { leftskinData } from "@/component/helper/Helper";
import Image from "next/image";
import React from "react";

function Sick() {
  return (
    <>
      <div className="max-w-[1440px] w-[100%] mx-auto">
        {leftskinData.map((item, index) => (
          <div key={index} className="flex flex-wrap  md:flex-nowrap">
            <div className="w-[100%] md:w-[43%] ps-[32px] sm:ps-[40px] md:ps-[50px] lg:ps-[70px] bg-[#fff] pe-[32px] md:pe-[60px] pt-[120px] md:pt-[0px] pb-[60px] md:pb-[80px]">
              <div className="max-w-[179px] md:max-w-[360px]">
                <Image src={item.img} width={350} height={300} alt={"sick"} />
              </div>
              <H5heading
                h5Class={
                  "!text-[#494336] text-[32px] md:text-4xl lg:text-5xl mt-[-40px]  md:mt-[30px]"
                }
                h5heading={item.title}
              />
              <Para
                pClass={
                  "!text-[#494336] roboto text-base md:text-xl lg:text-2xl"
                }
                para={item.subheading}
              />
              <Para2
                paraClass={"!text-[#494336] !text-sm md:!text-xl"}
                para2={item.para}
              />
              <Booklink booklink={item.bookbtn} />
            </div>
            <div className="w-[100%] md:w-[57%] bg-[rgba(215,217,221,0.50);] py-[60px] md:py-[80px] ps-[32px] sm:ps-[40px] md:ps-[50px] lg:ps-[115px] pe-[32px] md:pe-[70px]">
              {item.subdata.map((items, i) => (
                <div
                  key={i}
                  className={`border-b-[1px] pb-[60px] ${
                    i === 0 ? "-mt-12" : ""
                  }`}
                >
                  <H5heading
                    h5Class={
                      "text-base md:text-xl lg:text-[28px] !text-[#494336] mt-10"
                    }
                    h5heading={items.title}
                  />
                  <Para2
                    paraClass={"!text-sm md:!text-base lg:!text-xl"}
                    para2={items.para}
                  />
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

export default Sick;
