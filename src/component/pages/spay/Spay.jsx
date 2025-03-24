import { spayData } from "@/component/helper/Helper";
import Image from "next/image";
import React from "react";

function Spay() {
  return (
    <>
      <div className="bg-[rgba(215,217,221,0.50);] py-[60px] lg:py-[80px] relative">
        <div className="absolute bottom-0">
          <Image
            className="w-full "
            src={"/assetes/img/png/line6.png"}
            width={1440}
            height={400}
            alt={"line6"}
          />
        </div>
        <div className="max-w-[1440px] px-[32px] sm:px-[80px] lg:px-[120px] xl:px-[180px] mx-auto">
          {spayData.map((item, index) => (
            <div key={index}>
              <h5 className="text-2xl md:text-3xl lg:text-4xl text-[#494336]">
                {item.title}
              </h5>
              <p className="text-sm md:text-base lg:text-lg mt-[25px]">
                {item.para}
              </p>{" "}
              <p className="text-sm md:text-base lg:text-lg mt-[25px]">
                {item.para2}
              </p>{" "}
              <p className="text-sm md:text-base lg:text-lg  ">{item.para3}</p>
              <h5 className="text-2xl md:text-3xl lg:text-4xl text-[#494336] mt-[25px]">
                {item.title2}
              </h5>{" "}
              <p className="text-sm md:text-base lg:text-lg mt-[25px]">
                {item.para4}
              </p>{" "}
              <p className="text-sm md:text-base lg:text-lg mt-[25px]">
                {item.para5}
              </p>{" "}
              <p className="text-sm md:text-base lg:text-lg mt-[25px]">
                {item.para6}
              </p>{" "}
              <h5 className="text-2xl md:text-3xl lg:text-4xl text-[#494336] mt-[25px]">
                {item.title3}
              </h5>{" "}
              <p className="text-sm md:text-base lg:text-lg mt-[25px]">
                {item.para7}
              </p>{" "}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Spay;
