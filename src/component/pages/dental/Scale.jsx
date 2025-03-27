import H5heading from "@/component/common/H5heading";
import Para2 from "@/component/common/Para2";
import { scaleData } from "@/component/helper/Helper";
import Image from "next/image";
import React from "react";

function Scale() {
  return (
    <>
      <div className="bg-[rgba(215,217,221,0.50);] relative">
        <div className="absolute bottom-0 w-full">
          <Image
            className="w-full"
            src={"/assetes/img/png/line2.png"}
            width={1440}
            height={400}
            alt={"line"}
          />
        </div>
        <div className="max-w-[1440px] px-[32px] sm:px-[80px] md:px-[120px] lg:px-[180px] pt-[60px] lg:pt-[80px] pb-[60px] lg:pb-[140px] mx-auto">
          {scaleData.map((item, index) => (
            <div key={index}>
              <H5heading
                h5Class={
                  "!text-[#494336] text-2xl md:text-3xl lg:text-4xl mt-[25px]"
                }
                h5heading={item.title}
              />
              <Para2
                paraClass={"text-sm md:text-base lg:text-lg"}
                para2={item.para}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Scale;
