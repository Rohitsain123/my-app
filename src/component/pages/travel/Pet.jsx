import H5heading from "@/component/common/H5heading";
import Para2 from "@/component/common/Para2";
import { travelData } from "@/component/helper/Helper";
import Image from "next/image";
import React from "react";

function Pet() {
  return (
    <>
      <div className="bg-[rgba(215,217,221,0.50);] py-[60px] lg:py-[80px] relative">
        <div className="absolute bottom-0">
          <Image
            className="w-full"
            src={"/assetes/img/png/line7.png"}
            width={1440}
            height={400}
            alt={"line7"}
          />
        </div>
        <div className="max-w-[1440px] px-[32px] sm:px-[80px] lg:px-[120px] xl:px-[180px] mx-auto">
          {travelData.map((item, index) => (
            <div key={index}>
              <H5heading
                h5Class={"!text-[#494336] text-2xl md:text-3xl lg:text-4xl"}
                h5heading={item.title}
              />
              <Para2
                paraClass={"!text-[#494336] !text-sm md:!text-base lg:!text-lg"}
                para2={item.para}
              />
              {item.subdata.map((items, i) => (
                <div key={i}>
                  <H5heading
                    h5Class={
                      "!text-[#494336] text-2xl md:text-3xl lg:text-4xl mt-[25px]"
                    }
                    h5heading={items.title}
                  />
                  <Para2 para2={items.para} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Pet;
