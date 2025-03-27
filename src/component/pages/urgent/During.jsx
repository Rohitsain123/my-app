import H5heading from "@/component/common/H5heading";
import Para2 from "@/component/common/Para2";
import { urgentcareData } from "@/component/helper/Helper";
import Image from "next/image";
import React from "react";

function During() {
  return (
    <>
      <div className="bg-[rgba(215,217,221,0.50);] py-[60px] lg:py-[80px] relative">
        <div className="absolute bottom-0">
          <Image
            src={"/assetes/img/png/line5.png"}
            width={1440}
            height={400}
            alt=""
          />
        </div>
        <div className="max-w-[1440px] px-[32px] sm:px-[80px] lg:px-[120px] xl:px-[180px] mx-auto">
          {urgentcareData.map((item, index) => (
            <div key={index}>
              <H5heading
                h5Class={"!text-[#494336] !text-2xl md:!text-3xl lg:!text-4xl"}
                h5heading={item.title}
              />
              <Para2
                paraClass={"!text-[#494336] !text-sm md:!text-base lg:!text-lg"}
                para2={item.para}
              />
              <p className="!text-[#494336] text-sm md:text-base lg:text-lg mt-[25px]">
                Our clinic is open from{" "}
                <span className="font-bold">
                  8am to 6pm on weekdays and from 9am to 5pm on Saturdays.
                </span>{" "}
                During these hours, our team of veterinarians and staff are
                ready to provide care for your pets.
              </p>
              <Para2
                paraClass={
                  "!text-[#494336] !text-sm md:!text-base lg:!text-lg "
                }
                para2={item.para2}
              />
              <H5heading
                h5Class={
                  "!text-2xl md:!text-3xl lg:!text-4xl !text-[#494336] mt-[25px]"
                }
                h5heading={item.title2}
              />
              <Para2
                paraClass={"!text-[#494336] text-sm md:text-base lg:text-lg"}
                para2={item.para3}
              />
              <Para2
                paraClass={
                  "!text-[#494336] text-sm md:text-base lg:text-lg !mt-0"
                }
                para2={item.para4}
              />
              <H5heading
                h5Class={
                  "!text-[#494336] !text-2xl md:!text-3xl lg:!text-4xl mt-[25px]"
                }
                h5heading={item.title3}
              />

              {item.subdata.map((items, i) => (
                <div key={i} className={`${i === 0 ? "mt-5" : "mt-0"}`}>
                  <ul className="list-disc ml-[20px] ">
                    <li>
                      <Para2
                        paraClass={
                          "!text-[#494336] !text-sm md:!text-base lg:!text-lg !mt-0"
                        }
                        para2={items.para}
                      />
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default During;
