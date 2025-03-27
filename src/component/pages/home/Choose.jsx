import H5heading from "@/component/common/H5heading";
import { homeaccordianData } from "@/component/helper/Helper";
import { PlusIcon } from "@/component/helper/Icon";
import React from "react";

function Choose() {
  return (
    <>
      <div className="bg-[#494336] py-[60px] lg:py-[80px]">
        <div className="max-w-[1440px] px-[32px] sm:px-[80px] lg:px-[120px] xl:px-[180px] mx-auto">
          <H5heading
            h5Class={"text-2xl md:text-3xl lg:text-5xl pb-[30px]"}
            h5heading={"Why choose Nebula Vets?"}
          />
          <div className="flex flex-wrap gap-x-[32px]   ">
            {homeaccordianData.map((item, index) => (
              <div key={index} className="w-[calc(50%-16px)]">
                <div className="flex justify-between pb-[32px] mt-[32px] ">
                  <H5heading h5heading={item.title} />
                  <PlusIcon />
                </div>
                <div className="w-full h-1 bg-linear-65 from-[#FFA280] to-[#8FD9D9]"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Choose;
