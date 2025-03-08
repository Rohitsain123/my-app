import { CatIcon, DogIcon } from "@/component/helper/Icon";
import Image from "next/image";
import React from "react";

function Vaccinate() {
  return (
    <>
      <div className="bg-[#fff] pb-[60px] lg:pb-[80px]">
        <div className="max-w-[1440px] px-[32px] sm:px-[80px] lg:px-[120px] xl:px-[180px] mx-auto">
          <h5 className="texx-2xl md:text-3xl lg:text-5xl text-[#494336]">
            When to vaccinate?
          </h5>
          <div className="flex gap-[20px] mt-[40px]">
            <div className="bg-[#494336] pt-[29px] lg:pt-[34px] pe-[17px] lg:pe-[21px] pb-[70px] lg:pb-[57px] ps-[24px] lg:ps-[48px] max-w-[550px] w-full h-">
              <div className="flex gap-[12px] min-w-[60px] w-full">
                <DogIcon />
                <h4 className="text-2xl sm:text-3xl lg:text-5xl text-grad">
                  Puppies Schedule
                </h4>
              </div>
              <div className="mt-[26px]">
                <div className=" w-full">
                  <h6 className="text-2xl text-[#D7D9DD]">8 weeks: </h6>
                  <p className="text-xl text-[#D7D9DD] max-w-[408px]">
                    Distemper vaccine, Leptospirosis, Bordetella vaccine, Lyme
                    vaccine & Canine Influenza Virus vaccine
                  </p>{" "}
                  <h6 className="text-2xl text-[#D7D9DD] mt-[10px]">
                    12 weeks:{" "}
                  </h6>
                  <p className="text-xl text-[#D7D9DD] max-w-[408px]">
                    Distemper vaccine, Leptospirosis, Bordetella vaccine, Lyme
                    vaccine & Canine Influenza Virus vaccine
                  </p>{" "}
                  <h6 className="text-2xl text-[#D7D9DD] mt-[10px]">
                    Booster:{" "}
                  </h6>
                  <p className="text-xl text-[#D7D9DD] max-w-[408px]">
                    Once a year
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#494336] pt-[29px] lg:pt-[34px] pe-[17px] lg:pe-[21px] pb-[70px] lg:pb-[57px] ps-[24px] lg:ps-[48px] max-w-[550px] w-full h-">
              <div className="flex gap-[12px] min-w-[60px]">
                <CatIcon />
                <h4 className="text-2xl sm:text-3xl lg:text-5xl text-grad">
                  Kitten Schedule
                </h4>
              </div>
              <div className="mt-[26px]">
                <div className=" w-full">
                  <h6 className="text-2xl text-[#D7D9DD]">8 weeks: </h6>
                  <p className="text-xl text-[#D7D9DD] max-w-[408px]">
                    FVRCP vaccine and Leukemia vaccines
                  </p>{" "}
                  <h6 className="text-2xl text-[#D7D9DD] mt-[10px]">
                    12 weeks:{" "}
                  </h6>
                  <p className="text-xl text-[#D7D9DD] max-w-[408px]">
                    FVRCP vaccine, Leukemia vaccine& Rabies vaccine
                  </p>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-[20px] mt-[40px]">
            <div className="bg-[#494336] pt-[29px] lg:pt-[34px] pe-[17px] lg:pe-[21px] pb-[70px] lg:pb-[57px] ps-[24px] lg:ps-[48px] max-w-[550px] w-full h-">
              <div className="flex gap-[12px] min-w-[60px] w-full">
                <DogIcon />
                <h4 className="text-2xl sm:text-3xl lg:text-5xl text-grad">
                  Adult Dog Schedule
                </h4>
              </div>
              <div className="mt-[26px]">
                <div className=" w-full">
                  <p className="text-xl text-[#D7D9DD] max-w-[408px]">
                    Rabies: One year after the initial puppy vaccine, then every
                    three years
                  </p>{" "}
                  <p className="text-xl text-[#D7D9DD] max-w-[408px]">
                    Distemper: Every three years
                  </p>{" "}
                  <p className="text-xl text-[#D7D9DD] max-w-[408px]">
                    Bordetella: Every year
                  </p>{" "}
                  <p className="text-xl text-[#D7D9DD] max-w-[408px]">
                    Leptospirosis: Every year
                  </p>{" "}
                  <p className="text-xl text-[#D7D9DD] max-w-[408px]">
                    Canine influenza: Every year
                  </p>
                  <p className="text-xl text-[#D7D9DD] max-w-[408px]">
                    Lyme disease: Every year
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#494336] pt-[29px] lg:pt-[34px] pe-[17px] lg:pe-[21px] pb-[70px] lg:pb-[57px] ps-[24px] lg:ps-[48px] max-w-[550px] w-full h-">
              <div className="flex gap-[12px] min-w-[60px]">
                <CatIcon />
                <h4 className="text-2xl sm:text-3xl lg:text-5xl text-grad">
                  Adult Cat Schedule
                </h4>
              </div>
              <div className="mt-[26px]">
                <div className=" w-full">
                  <p className="text-xl text-[#D7D9DD] max-w-[408px]">
                    FVRCP: Every year
                  </p>
                  <p className="text-xl text-[#D7D9DD] max-w-[408px]">
                    Rabies: Every three years
                  </p>{" "}
                  <p className="text-xl text-[#D7D9DD] max-w-[408px]">
                    Feline Leukemia Virus: Every year{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Vaccinate;
