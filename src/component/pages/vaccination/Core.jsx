import H5heading from "@/component/common/H5heading";
import Para2 from "@/component/common/Para2";
import { mypetData } from "@/component/helper/Helper";
import Image from "next/image";
import React from "react";

function Core() {
  return (
    <>
      <div className="bg-[rgba(215,217,221,0.50);] py-[60px] lg:py-[80px] relative">
        <div className="absolute bottom-0  ">
          <Image
            src={"/assetes/img/png/line2.png"}
            width={1440}
            height={400}
            alt={"line5"}
          />
        </div>
        <div className="max-w-[1440px] px-[32px] sm:px-[80px] lg:px-[120px] xl:px-[180px] mx-auto z-index-[999]">
          {mypetData.map((item, index) => (
            <div key={index}>
              <H5heading
                h5Class={"!text-[#494336] !text-2xl md:!text-3xl lg:!text-4xl"}
                h5heading={item.title}
              />
              <Para2
                paraClass={"!text-sm md:!text-base lg:!text-lg !text-[#494336]"}
                para2={item.para}
              />
              {item.subdata.map((items, i) => (
                <div key={i}>
                  <H5heading
                    h5Class={
                      "!text-[#494336] !text-2xl md:!text-3xl lg:!text-4xl mt-[25px]"
                    }
                    h5heading={items.title}
                  />
                  <Para2
                    paraClass={
                      "!text-sm md:!text-base lg:!text-lg !text-[#494336]   "
                    }
                    para2={items.para}
                  />
                  <Para2
                    paraClass={
                      "!text-sm md:!text-base lg:!text-lg !text-[#494336]"
                    }
                    para2={items.para2}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Core;
