import H5heading from "@/component/common/H5heading";
import Para2 from "@/component/common/Para2";
import { downtownData } from "@/component/helper/Helper";
import Image from "next/image";
import React from "react";

function Downtown() {
  return (
    <>
      <div className="bg-[rgba(215,217,221,0.50);] py-[60px] lg:py-[80px]">
        <div className="max-w-[1440px] px-[32px] sm:px-[80px] lg:px-[120px] xl:px-[180px] mx-auto">
          {downtownData.map((item, index) => (
            <div
              key={index}
              className="flex flex-wrap-reverse md:flex-nowrap justify-between gap-[60px]"
            >
              <div className="max-w-[300px]">
                <H5heading
                  h5Class={"!text-[#494336] text-2xl md:text-3xl lg:text-4xl"}
                  h5heading={item.title}
                />
                <Para2 paraClass={"max-w-[200px] "} para2={item.para} />{" "}
                <H5heading
                  h5Class={
                    "!text-[#494336] text-2xl md:text-3xl lg:text-4xl mt-[25px]"
                  }
                  h5heading={item.title2}
                />
                <Para2 para2={item.para2} />{" "}
                <Para2 paraClass={"!mt-[0px]"} para2={item.para3} />
                <H5heading
                  h5Class={
                    "!text-[#494336] text-2xl md:text-3xl lg:text-4xl mt-[25px]"
                  }
                  h5heading={item.title3}
                />{" "}
                <Para2 para2={item.para4} />{" "}
                <Para2 paraClass={"!mt-0"} para2={item.para5} />
              </div>
              <div className="w-full">
                <Image
                  className="w-full"
                  src={"/assetes/img/png/map2.png"}
                  width={782}
                  height={580}
                  alt={"map"}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Downtown;
