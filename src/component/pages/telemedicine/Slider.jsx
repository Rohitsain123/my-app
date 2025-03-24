import Booklink from "@/component/common/Booklink";
import { cardData } from "@/component/helper/Helper";
import React from "react";

function Slider() {
  return (
    <>
      <div className="bg-[#fff] py-[60px] lg:py-[80px]">
        <div className="max-w-[1440px] px-[32px] sm:px-[40px] lg:px-[50px] xl:px-[70px] mx-auto">
          <div className={"flex gap-3"}>
            {cardData.map((item, index) => (
              <div
                key={index}
                className="bg-[#494336] pt-[22px] lg:pt-[32px] pe-[30px] lg:pe-[36px] pb-[44px] lg:pb-[42px] ps-[22px] lg:ps-[32px] w-full max-w-[310px]"
              >
                <h1 className="text-[138px] text-grad">{item.heading}</h1>
                <h5 className="text-[#D7D9DD] text-2xl md:text-3xl lg:text-[32px]">
                  {item.title}
                </h5>
                <p className="text-[#D7D9DD] text-sm md:text-base lg:text-xl mt-[25px]">
                  {item.para}
                </p>
              </div>
            ))}
          </div>
          <div className="mx-auto flex justify-center mt-[40px]">
            <Booklink booklink={"CHAT WITH A VET"} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Slider;
