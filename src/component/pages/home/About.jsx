import Booklink from "@/component/common/Booklink";
import H5heading from "@/component/common/H5heading";
import Para2 from "@/component/common/Para2";
import { aboutnebulaData } from "@/component/helper/Helper";
import Image from "next/image";

import React from "react";

function About() {
  return (
    <>
      <div className="bg-[rgba(215,217,221,0.50);] py-[60px] lg:py-[80px]">
        <div className="max-w-[1440px] px-[32px] sm:px-[50px] lg:px-[70px] mx-auto">
          <div className="flex items-center gap-[50px] lg:gap-[70px] flex-wrap lg:flex-nowrap justify-center">
            {aboutnebulaData.map((item, index) => (
              <div
                key={index}
                className="flex flex-wrap lg:flex-nowrap gap-[60px] lg:gap-[20px] xl:gap-[60px] items-center"
              >
                <div>
                  <img src={item.img} alt={"dog"} />
                </div>
                <div className="max-w-[600px]">
                  <H5heading
                    h5Class={
                      "!text-2xl md:!text-3xl lg:!text-5xl !text-[#494336]"
                    }
                    h5heading={item.title}
                  />
                  <Para2
                    paraClass={
                      "!text-sm md:!text-base lg:!text-xl !text-[#494336]"
                    }
                    para2={item.para}
                  />
                  <Booklink booklink={item.bookbtn} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
