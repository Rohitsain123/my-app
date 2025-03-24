import H5heading from "@/component/common/H5heading";
import Para2 from "@/component/common/Para2";
import { homeSliderData } from "@/component/helper/Helper";

import React from "react";

function HomeSlider() {
  return (
    <>
      <div className="bg-[#fff] pb-[90px] lg:pb-[140px] ">
        <div className="max-w-[1440px] px-[32px] sm:px-[40px] lg:px-[50px] xl:px-[70px] mx-auto">
          <div className="!flex gap-[15px] overflow-scroll">
            {homeSliderData.map((item, index) => (
              <div
                key={index}
                className="bg-[#494336] pt-[25px] pe-[11px] pb-[75px] ps-[20px] w-full min-w-[250px] lg:min-w-[310px]"
              >
                {item.img}
                <H5heading
                  h5Class={"!text-2xl md:!text-3xl lg:!text-4xl mt-[45px]"}
                  h5heading={item.title}
                />
                {item.sublinks.map((items, i) => (
                  <div key={i}>
                    <Para2
                      paraClass={`!text-[#D7D9DD] !text-sm md:!text-base lg:!text-lg !mt-0 underline ${
                        i === 0 ? "!mt-[10px]" : "!mt-0"
                      }`}
                      para2={items.point}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeSlider;
