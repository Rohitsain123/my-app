import H5heading from "@/component/common/H5heading";
import Para from "@/component/common/Para";
import Para2 from "@/component/common/Para2";
import {
  adultdogData,
  kittenData,
  puppiesData,
} from "@/component/helper/Helper";
import { CatIcon, DogIcon } from "@/component/helper/Icon";
import Image from "next/image";
import React from "react";

function Vaccinate() {
  return (
    <>
      <div className="bg-[#fff] pb-[60px] lg:pb-[80px]">
        <div className="max-w-[1440px] px-[32px] sm:px-[80px] lg:px-[120px] xl:px-[180px] mx-auto">
          <H5heading
            h5Class={"!text-[#494336] !text-2xl md:!text-4xl lg:!text-5xl"}
            h5heading={"When to vaccinate?"}
          />
          <div className="flex gap-[20px] mt-[40px]">
            {puppiesData.map((item, index) => (
              <div className="bg-[#494336] pt-[29px] lg:pt-[34px] pe-[17px] lg:pe-[21px] pb-[70px] lg:pb-[57px] ps-[24px] lg:ps-[48px] max-w-[550px] w-full h-">
                <div key={index}>
                  <div className="flex gap-[10px]">
                    {item.icon}
                    <H5heading
                      h5Class={"!text-2xl md:!text-4xl lg:!text-5xl text-grad"}
                      h5heading={item.title}
                    />
                  </div>
                  {item.subdata.map((items, i) => (
                    <div key={i} className={`${i === 0 ? "mt-7" : ""}`}>
                      <Para2
                        paraClass={
                          "!text-[#D7D9DD] !text-base md:!text-lg lg:!text-2xl !mt-0"
                        }
                        para2={items.title}
                      />
                      <Para
                        pClass={
                          "!text-sm md:!text-base lg:!text-xl avantt !mt-0"
                        }
                        para={items.para}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-[20px] mt-[40px]">
            {adultdogData.map((item, index) => (
              <div className="bg-[#494336] pt-[29px] lg:pt-[34px] pe-[17px] lg:pe-[21px] pb-[70px] lg:pb-[57px] ps-[24px] lg:ps-[48px] max-w-[550px] w-full h-">
                <div key={index}>
                  <div className="flex gap-[20px]">
                    {item.icon}
                    <H5heading
                      h5Class={"!text-2xl md:!text-4xl lg:!text-5xl text-grad"}
                      h5heading={item.title}
                    />
                  </div>
                  {item.subdata.map((items, i) => (
                    <div key={i} className={`${i === 0 ? "mt-7" : ""}`}>
                      <Para2
                        paraClass={
                          "!text-sm md:!text-base lg:!text-xl !text-[#D7D9DD] !mt-0"
                        }
                        para2={items.para}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Vaccinate;
