import Image from "next/image";
import React from "react";

function Grey({ title, title2, lineimg, para, para2, para3 }) {
  return (
    <>
      <div className="bg-[rgba(215,217,221,0.50);] pt-[60px lg:pt-[80px] pb-[120px] lg:pb-[140px] relative">
        <div className="w-full absolute bottom-0">
          <Image
            className="w-full"
            src={lineimg}
            width={1440}
            height={450}
            alt=""
          />
        </div>
        <div className="max-w-[1440px] px-[32px] sm:px-[80px] lg:px-[120px] xl:px-[180px] mx-auto">
          <div className=" w-full ">
            <h5 className="text-2xl md:text-3xl lg:text-4xl text-[#494336]">
              {title}
            </h5>
            <p className="text-sm md:text-base lg:text-lg mt-[20px]">{para}</p>
            <h5 className="text-2xl md:text-3xl lg:text-4xl text-[#494336] mt-[25px]">
              {title2}
            </h5>
            <p className="text-sm md:text-base lg:text-lg mt-[20px]">{para2}</p>
            <p className="text-sm md:text-base lg:text-lg">{para3}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Grey;
