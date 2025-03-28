import Booklink from "@/component/common/Booklink";
import H5heading from "@/component/common/H5heading";
import Para2 from "@/component/common/Para2";
import { ourservicesData } from "@/component/helper/Helper";
import Link from "next/link";
import React from "react";

function Services() {
  return (
    <>
      <div className="bg-[#fff] py-[60px] lg:py-[80px]">
        <div className="max-w-[1440px] px-[32px] sm:px-[80px] lg:px-[120px] xl:px-[180px] mx-auto">
          {ourservicesData.map((item, index) => (
            <div key={index} className="max-w-[770px]">
              <H5heading
                h5Class={"!text-2xl md:!text-3xl lg:!text-5xl !text-[#494336]"}
                h5heading={item.title}
              />
              <Para2
                paraClass={"!text-sm md:!text-base lg:!text-lg !text-[#494336]"}
                para2={item.para}
              />
              <Booklink booklink={item.learnbtn} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Services;
