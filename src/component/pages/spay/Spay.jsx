import H5heading from "@/component/common/H5heading";
import Para2 from "@/component/common/Para2";
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
              <H5heading
                h5Class={"!text-[#494336] text-2xl md:text-3xl lg:text-4xl"}
                h5heading={item.title}
              />
              {item.subdata.map((items, i) => (
                <div key={i}>
                  <H5heading
                    h5Class={
                      "!text-[#494336] text-2xl md:text-3xl lg:text-4xl mt-[25px]"
                    }
                    h5heading={items.title}
                  />
                  <Para2 para2={items.para} />
                  <Para2 para2={items.para2} />
                  <Para2 para2={items.para3} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Spay;
