import Image from "next/image";
import Link from "next/link";
import React from "react";

function HeroCommon({
  heroimg,
  title,
  para,
  btnname,
  titleClass,
  imgClass,
  para2,
  p2Class,
  heroClass,
}) {
  return (
    <>
      <div
        className={`bg-[#494336] pt-[180px] lg:pt-[140px] pb-[60px] lg:pb-[85px] relative ${heroClass}`}
      >
        <div
          className={`top-0 end-0 absolute max-w-[230px] md:max-w-[500px]  ${imgClass}`}
        >
          <Image
            className="w-full"
            src={heroimg}
            width={500}
            height={500}
            alt={"hero"}
          />
        </div>
        <div className="max-w-[1440px] px-[32px] sm:px-[80px] lg:px-[120px] xl:px-[180px] mx-auto">
          <div className="max-w-[660px]">
            <h1
              className={`text-[32px] md:text-5xl lg:text-[70px] text-[#D7D9DD] ${titleClass}`}
            >
              {title}
            </h1>
            <p className="text-sm md:text-base lg:text-xl text-[#D7D9DD] mt-[20px]">
              {para}
            </p>
            <p
              className={`text-sm md:text-base lg:text-xl text-[#D7D9DD] mt-[20px] ${p2Class}`}
            >
              {para2}
            </p>
            <div className="mt-[25px] lg:mt-[45px]">
              <Link
                href={"/"}
                className="text-lg font-medium rounded-[27px] text-[#494336] py-2 sm:py-3  px-6 sm:px-8 lg:px-[38px] bg-[linear-gradient(90deg,#FFA280_0%,#8FD9D9_100%)] hover:shadow-lg !shadow-slate-500/60  duration-300 hover:scale-[1.02]"
              >
                {btnname}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroCommon;
