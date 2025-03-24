import H5heading from "@/component/common/H5heading";
import { careerData } from "@/component/helper/Helper";
import { PlusIcon } from "@/component/helper/Icon";
import Image from "next/image";
import React from "react";

function Career() {
  return (
    <>
      <div className="bg-[#fff] py-[60px] lg:py-[80px] relative">
        <div className="absolute bottom-0">
          <Image
            className="w-full"
            src={"/assetes/img/png/line11.png"}
            width={1440}
            height={400}
            alt={"line11"}
          />
        </div>
        <div className="max-w-[1440px] px-[32px] sm:px-[80px] lg:px-[120px] xl:px-[180px] mx-auto">
          <H5heading
            h5Class={"!text-[#494336] text-2xl lg:text-[28px] roboto"}
            h5heading={"Why Choose a Career at Nebula Vets:"}
          />
          {careerData.map((item, index) => (
            <div key={index}>
              <div className="accordion">
                <div className="accordion-item mt-[32px]">
                  <div
                    className="flex justify-between items-center  pb-[30px] cursor-pointer "
                    id="accordion-header-1"
                  >
                    <h2 className="text-base sm:text-lg lg:text-2xl font-regular roboto text-[#494336]">
                      {item.title}
                    </h2>
                    <PlusIcon />
                  </div>
                  <div className="accordion-body hidden pb-[30px] text-gray-700 ">
                    <p className="text-lg text-[#494336]">{item.para}</p>
                  </div>
                </div>
              </div>
              <div className="w-full h-[3px] bg-[linear-gradient(90deg,#FFA280_0%,#8FD9CB_100%)]"></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Career;
