import H5heading from "@/component/common/H5heading";
import Para2 from "@/component/common/Para2";
import { educationData } from "@/component/helper/Helper";
import Image from "next/image";
import React from "react";

function Education() {
  return (
    <>
      <div className="bg-[#fff] py-[60px] lg:py-[80px]">
        <div className="max-w-[1440px] px-[32px] sm:px-[40px] lg:px-[50px] xl:px-[70px] mx-auto">
          {educationData.map((item, index) => (
            <div
              key={index}
              className="flex flex-wrap lg:flex-nowrap gap-[60px] sm:gap-[20px] lg:px-[60px] w-full"
            >
              <div className="w-full justify-center flex">
                <Image
                  className="w-full max-w-[600px]"
                  src={"/assetes/img/png/forest.png"}
                  width={600}
                  height={620}
                  alt={"daniel"}
                />
              </div>
              <div className="w-full  lg:max-w-[547px]">
                <H5heading
                  h5Class={"!text-[#494336] !text-2xl"}
                  h5heading={item.title}
                />
                <Para2 paraClass={"!text-[#494336]"} para2={item.para} />
                <H5heading
                  h5Class={"!text-[#494336] !text-2xl mt-[25px]"}
                  h5heading={item.title2}
                />
                <Para2
                  paraClass={"!text-[#494336] text-sm md:text-base lg:text-lg"}
                  para2={item.para2}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Education;
