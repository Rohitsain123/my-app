import H5heading from "@/component/common/H5heading";
import Para2 from "@/component/common/Para2";
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
                <ul className="list-disc text-[#D7D9DD]">
                  <li>
                    <H5heading h5heading={item.title} />
                    <div className="  flex gap-3 items-center">
                      <div className="h-1 w-1 rounded-full bg-white"></div>
                      <Para2
                        paraClass="!text-[#D7D9DD] !mt-0 list-disc"
                        para2={item.para}
                      />
                    </div>
                  </li>
                </ul>
                {item.subdata.map((items, i) => (
                  <div key={i} className="mt-8">
                    <ul className="list-disc text-[#D7D9DD]">
                      <li>
                        <H5heading h5heading={items.title} />
                        <div className="flex gap-3 items-center">
                          <div className="h-1 w-1 rounded-full bg-[#D7D9DD]"></div>
                          <Para2
                            paraClass={"!text-[#D7D9DD] !mt-0"}
                            para2={items.para}
                          />
                        </div>
                      </li>
                    </ul>
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

export default Snap;
