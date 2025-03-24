import H5heading from "@/component/common/H5heading";
import { snapData } from "@/component/helper/Helper";
import Image from "next/image";
import React from "react";

function Snap() {
  return (
    <>
      <div className="bg-[rgba(215,217,221,0.50);] py-[60px] lg:py-[80px]">
        <div className="max-w-[1440px] px-[32px] sm:px[80px] lg:px-[120px] xl:px-[180px] mx-auto">
          <H5heading
            h5Class={"!text-[#494336] text-2xl md:text-4xl lg:text-5xl"}
            h5heading={"Available SNAP Tests"}
          />
          <div className="flex gap-3">
            {snapData.map((item, index) => (
              <div
                key={index}
                className="bg-[#494336] pt-[29px] lg:pt-[44px] pe-[30px] lg:pe-[133px] pb-[119px] lg:pb-[23px] ps-[10px] lg:ps-[42px] w-full max-w-[530px] relative mt-[40px]"
              >
                <div className="absolute bottom-0 end-0">
                  <Image src={item.img} width={345} height={345} alt={"dog"} />
                </div>
                <ul className="list-disc">
                  <li className="!text-2xl text-[#D7D9DD]">{item.title}</li>
                  <li className="text-sm md:text-base lg:text-xl text-[#D7D9DD] ms-[30px]">
                    {item.para}
                  </li>
                  <li className="!text-2xl text-[#D7D9DD] mt-[25px]">
                    {item.title2}
                  </li>
                  <li className="text-sm md:text-base lg:text-xl text-[#D7D9DD] ms-[30px]">
                    {item.para2}
                  </li>
                  <li className="!text-2xl text-[#D7D9DD] mt-[25px] ">
                    {item.title3}
                  </li>
                  <li className="text-sm md:text-base lg:text-xl text-[#D7D9DD] ms-[30px]">
                    {item.para3}
                  </li>
                  <li className="!text-2xl text-[#D7D9DD] mt-[25px]">
                    {item.title4}
                  </li>
                  <li className="text-sm md:text-base lg:text-xl text-[#D7D9DD] ms-[30px]">
                    {item.para4}
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Snap;
