import H5heading from "@/component/common/H5heading";
import Para2 from "@/component/common/Para2";
import { availabletestData } from "@/component/helper/Helper";

import Image from "next/image";

import React from "react";

function Tests() {
  return (
    <>
      <div className="bg-[rgba(215,217,221,0.50);] pt-[60px] lg:pt-[80px] pb-[120px] lg:pb-[140px] relative">
        <div className="absolute bottom-0 w-full">
          <Image
            className="w-full"
            src={"/assetes/img/png/line5.png"}
            width={1440}
            height={400}
            alt={"line4"}
          />
        </div>
        <div className="max-w-[1440px] px-[32px] sm:px-[80px] lg:px-[120px] xl:px-[180px] mx-auto  relative z-[99] overflow-hidden">
          {availabletestData.map((item, index) => (
            <div key={index}>
              <H5heading
                h5Class={"!text-[#494336] !text-2xl md:!text-3xl lg:!text-4xl"}
                h5heading={item.title}
              />
              <Para2
                paraClass={"!text-[#494336] !text-sm md:!text-base lg:!text-lg"}
                para2={item.para}
              />
              {item.subdata.map((items, i) => (
                <div key={i}>
                  <ul className="list-disc ml-[20px]">
                    <li>
                      <Para2
                        paraClass={
                          "!text-[#494336] !text-sm md:!text-base lg:!text-lg !mt-0"
                        }
                        para2={items.para}
                      />
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Tests;
