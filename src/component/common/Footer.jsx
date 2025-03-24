import React from "react";
import Para2 from "./Para2";
import { footerData, footerIcon } from "../helper/Helper";
import H5heading from "./H5heading";

function Footer() {
  return (
    <>
      <div className="bg-[#494336] pt-[60px] pb-[110px] lg:pb-[60px] border-t-[2px] border-[#D7D9DD]  ">
        <div className="max-w-[1440px] ps-[32px] sm:ps-[40px] lg:ps-[60px] xl:ps[70px] pe-[32px] sm:pe-[80px] lg:pe-[120px] xl:pe-[180px] mx-auto">
          <div className="flex flex-wrap xl:flex-nowrap items-center   gap-[60px]">
            <div className="w-[50%]">
              <Para2
                paraClass={
                  "!text-base md:!text-xl lg:!text-2xl !text-[#D7D9DD] !mt-0"
                }
                para2={"Stay in touch:"}
              />
              <input
                className="border border-[#D9D9D9] text-[#D7D9DD] px-2 py-1 max-w-[360px] w-full mt-[24px]"
                type="text"
                placeholder="Email"
              />
              <div className="flex mt-[24px]  gap-4">
                {footerIcon.map((item, index) => (
                  <div key={index}>{item.icon}</div>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-[30px] justify-between w-[100%] xl:max-w-[550px]">
              {footerData.map((item, index) => (
                <div key={index}>
                  <H5heading h5heading={item.title} />
                  {item.sublinks.map((items, i) => (
                    <div key={i}>
                      <Para2
                        paraClass={
                          "!text-sm md:!text-base lg:text-lg !text-[#D7D9DD] !mt-[6px] underline"
                        }
                        para2={items.point}
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
