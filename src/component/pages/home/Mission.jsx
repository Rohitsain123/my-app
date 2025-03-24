import H5heading from "@/component/common/H5heading";
import Para2 from "@/component/common/Para2";
import { ourapporachData } from "@/component/helper/Helper";
import React from "react";

function Mission() {
  return (
    <>
      <div className="bg-[rgba(215,217,221,0.50);] py-[60px] lg:py-[80px]">
        <div className="max-w-[1440px] px-[32px] sm:px-[80px] lg:px-[120px] xl:px-[180px] mx-auto">
          {ourapporachData.map((item, index) => (
            <div
              key={index}
              className=" flex felx-wrap md:flex-nowrap items-center gap-10"
            >
              <div>
                <H5heading
                  h5Class={"text-2xl md:text-3xl lg:text-4xl !text-[#494336]"}
                  h5heading={item.title}
                />
              </div>
              <div>
                <Para2 para2={item.para} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Mission;
