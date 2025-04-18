"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function AccordianCommon() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <>
      <div className="bg-[#fff] pb-[60px] lg:pb-[80px]">
        <div className="max-w-[1440px] px-[32px] sm:px-[80px] lg:px-[120px] xl:px-[180px] mx-auto">
          <div className="accordion">
            <div className="accordion-item mt-[32px]">
              <div
                className="flex justify-between items-center  pb-[30px] cursor-pointer "
                id="accordion-header-1"
              >
                <h2 className="text-base sm:text-lg lg:text-2xl font-regular roboto text-[#494336]">
                  Cat Core Vaccines
                </h2>
                <button
                  onClick={toggle}
                  className="accordion-button transform transition duration-300"
                  id="accordion-btn-1"
                >
                  <Image
                    src={"/assetes/img/png/plus.png"}
                    width={30}
                    height={30}
                    alt={"plus"}
                  />
                </button>
              </div>
              {show && (
                <div className="accordion-body hidden pb-[30px] text-gray-700 ">
                  <p className="text-lg text-[#494336]">
                    Rabies: Legally required in most states, for both indoor and
                    outdoor cats Feline Leukemia Virus: A virus transmitted
                    through cat bites during fights. It’s recommended for
                    kittens even if they will not be going outdoors.
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="w-full h-[3px] bg-[linear-gradient(90deg,#FFA280_0%,#8FD9CB_100%)]"></div>
        </div>
      </div>
    </>
  );
}
