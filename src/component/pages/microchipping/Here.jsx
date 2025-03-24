import H5heading from "@/component/common/H5heading";
import Para2 from "@/component/common/Para2";
import { hereData } from "@/component/helper/Helper";
import Image from "next/image";
import React from "react";

function Here() {
  return (
    <>
      <div className="bg-[rgba(215,217,221,0.50);] py-[60px] lg:py-[80px] relative">
        <div className="absolute bottom-0 w-full">
          <Image
            className="w-full"
            src={"/assetes/img/png/line7.png"}
            width={1440}
            height={400}
            alt={"line7"}
          />
        </div>
        <div className="max-w-[1440px] px-[32px] sm:px-[80px] lg:px-[120px] xl:px-[180px] mx-auto">
          {hereData.map((item, index) => (
            <div key={index}>
              <H5heading
                h5Class={"!text-[#494336] text-2xl lg:text-[28px] roboto"}
                h5heading={item.title}
              />{" "}
              <H5heading
                h5Class={
                  "!text-[#494336] text-2xl md:text-3xl lg:text-4xl mt-[25px]"
                }
                h5heading={item.title2}
              />
              <Para2 para2={item.para} />{" "}
              <H5heading
                h5Class={
                  "!text-[#494336] text-2xl md:text-3xl lg:text-4xl mt-[25px]"
                }
                h5heading={item.title3}
              />
              <Para2 para2={item.para2} />{" "}
              <H5heading
                h5Class={
                  "!text-[#494336] text-2xl md:text-3xl lg:text-4xl mt-[25px]"
                }
                h5heading={item.title4}
              />
              <Para2 para2={item.para3} />{" "}
              <H5heading
                h5Class={
                  "!text-[#494336] text-2xl md:text-3xl lg:text-4xl mt-[25px]"
                }
                h5heading={item.title5}
              />
              <Para2 para2={item.para4} />{" "}
              <H5heading
                h5Class={
                  "!text-[#494336] text-2xl md:text-3xl lg:text-4xl mt-[25px]"
                }
                h5heading={item.title6}
              />
              <Para2 para2={item.para5} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Here;
