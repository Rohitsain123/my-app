import H5heading from "@/component/common/H5heading";
import Para2 from "@/component/common/Para2";
import { edgeData } from "@/component/helper/Helper";
import Image from "next/image";
import React from "react";

function Edge() {
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
        <div className="max-w-[1440px] ps-[32px] sm:ps-[80px] lg:ps-[120px] xl:ps-[180px] pe-[32px] sm:pe-[50px] lg:pe-[70px] mx-auto">
          {edgeData.map((item, index) => (
            <div
              key={index}
              className="flex flex-wrap-reverse lg:flex-nowrap gap-[60px] lg:gap-[45px]"
            >
              <div className="w-full lg:max-w-[545px]  ">
                <H5heading
                  h5Class={"!text-[#494336] !text-2xl roboto"}
                  h5heading={item.title}
                />
                <Para2
                  paraClass={
                    "!text-[#494336] !text-sm md:!text-base lg:!text-lg"
                  }
                  para2={item.para}
                />
                <H5heading
                  h5Class={"!text-[#494336] !text-2xl roboto mt-[25px]"}
                  h5heading={item.title2}
                />
                <Para2
                  paraClass={
                    "!text-[#494336] !text-sm md:!text-base lg:!text-lg"
                  }
                  para2={item.para2}
                />
              </div>
              <div className="flex justify-center mx-auto w-full">
                <Image
                  className="max-w-[600px] w-full"
                  src={"/assetes/img/png/dog2.png"}
                  width={600}
                  height={600}
                  alt={"dog2"}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Edge;
