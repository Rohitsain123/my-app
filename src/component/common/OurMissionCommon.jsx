import Image from "next/image";
import React from "react";
import Booklink from "./Booklink";

function OurMissionCommon({ abimg, title, para, bookbtn, h4Class }) {
  return (
    <>
      <div className="bg-[#494336] pt-[60px] lg:pt-[80px] pb-[222px] sm:pb-[150px] lg:pb-[100px] xl:pb-[80px] relative">
        <div className="absolute end-0 bottom-0 max-w-[288px] md:max-w-[400px] lg:max-w-[584px]">
          <Image src={abimg} width={584} height={400} alt={"dog"} />
        </div>
        <div className="max-w-[1440px] mx-auto px-[32px] sm:px-[35px] md:px-[40px] lg:px-[180px] ">
          <h4
            className={`text-[24px] md:text-[30px] lg:text-[36px]  font-light text-[#D7D9DD ${h4Class}`}
          >
            {" "}
            {title}
          </h4>
          <p className="text-sm md:text-base lg:text-xl text-[#D7D9DD] max-w-[867px] font-light mt-3">
            {para}
          </p>
          <Booklink booklink={bookbtn} />
        </div>
      </div>
    </>
  );
}

export default OurMissionCommon;
