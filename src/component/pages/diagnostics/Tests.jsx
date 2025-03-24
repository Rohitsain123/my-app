import H5heading from "@/component/common/H5heading";
import Para2 from "@/component/common/Para2";
import { testdata } from "@/component/helper/Helper";
import Image from "next/image";

import React from "react";

function Tests() {
  return (
    <>
      <div className="bg-[rgba(215,217,221,0.50);] pt-[60px] lg:pt-[80px] pb-[120px] lg:pb-[140px] relative">
        <div className="absolute bottom-0">
          <Image
            className="w-full"
            src={"/assetes/img/png/line5.png"}
            width={1440}
            height={400}
            alt={"line4"}
          />
        </div>
        <div className="max-w-[1440px] px-[32px] sm:px-[80px] lg:px-[120px] xl:px-[180px]">
          <H5heading
            h5Class={"!text-[#494336] text-2xl md:text-4xl lg:text-5xl"}
            h5heading={"Available Tests"}
          />
          <Para2
            paraClass={"!text-sm md:!text-base lg:!text-lg"}
            para2={
              "At Nebula Vets, we take pride in offering an in-house laboratory equipped with state-of-the-art diagnostic equipment to fulfill your pet's diagnostic needs. Our comprehensive laboratory services include:"
            }
          />
          <ul className={"list-disc ms-[24px]"}>
            {testdata.map((item, index) => (
              <div key={index}>
                <li>{item.para}</li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Tests;
