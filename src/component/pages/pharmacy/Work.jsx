import { workData } from "@/component/helper/Helper";
import Image from "next/image";
import React from "react";

function Work() {
  return (
    <>
      <div className="bg-[rgba(215,217,221,0.50);] py-[60px] lg:py-[80px] relative">
        <div className="absolute bottom-0">
          <Image
            src={"/assetes/img/png/line5.png"}
            width={1440}
            height={400}
            alt={"line5"}
          />
        </div>
        <div className="max-w-[1440px] px-[32px] sm:px-[80px] lg:px-[120px] xl:px-[180px] mx-auto">
          {workData.map((item, index) => (
            <div key={index}>
              <h5 className="text-2xl md:text-3xl lg:text-4xl text-[#494336]">
                {item.title}
              </h5>
              <p className="text-sm md:text-base lg:text-lg text-[#494336] mt-[25px]">
                {item.para}
              </p>
              <p className="text-sm md:text-base lg:text-lg text-[#494336] mt-[25px]">
                {item.para2}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Work;
