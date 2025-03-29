import H5heading from "@/component/common/H5heading";
import Para from "@/component/common/Para";
import Para2 from "@/component/common/Para2";
import { examData } from "@/component/helper/Helper";
import Image from "next/image";
import React from "react";

function Exam() {
  return (
    <>
      <div className="bg-[rgba(215,217,221,0.50);] pt-[60px] lg:pt-[80px] pb-[120px] lg:pb-[140px] relative">
        <div className="w-full absolute !bottom-0">
          <Image
            className="w-full"
            src={"/assetes/img/png/line2.png"}
            width={1440}
            height={450}
            alt=""
          />
        </div>
        <div className="max-w-[1440px] px-[32px] sm:px-[80px] lg:px-[120px] xl:px-[180px] mx-auto">
          <div className="max-w-[1070px] w-full ">
            <H5heading
              h5Class={"!text-[#494336] !text-2xl md:!text-3xl lg:!text-4xl"}
              h5heading={"Animal Health Check Exam"}
            />
            <Para2
              paraClass={"!text-sm md:!text-base lg:!text-xl !text-[#494336]"}
              para2={
                "During our animal health check, we perform a thorough examination tailored to the unique needs of each patient. Our goal is to assess your pet's overall health, detect any potential issues, and offer preventive measures to maintain their vitality. Whether your furry friend is young, mature, or a senior, our veterinary professionals have the expertise to address their specific requirements."
              }
            />
            {examData.map((item, index) => (
              <div key={index}>
                <Para2 para2={item.para} />
                {item.subpara.map((items, i) => (
                  <div key={i}>
                    <Para2
                      paraClass={
                        "!mt-0 text-sm md:text-base lg:text-xl !text-[#494336]"
                      }
                      para2={items.para}
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

export default Exam;
