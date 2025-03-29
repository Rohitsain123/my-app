import Booklink from "@/component/common/Booklink";
import Mainheading from "@/component/common/Mainheading";
import Para2 from "@/component/common/Para2";
import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <>
      <div className="bg-[#494336] pt-[33px] lg:pt-[140px] pb-[277px] lg:pb-[85px] relative">
        <div className="absolute bottom-0 right-0 w-full max-w-[653px]  ">
          <div className="max-w-[362px] lg:max-w-[650px]">
            <Image
              className="w-full"
              src={"/assetes/img/png/dog-cat-hero.png"}
              width={653}
              height={426}
              alt={"hero"}
            />
          </div>
        </div>
        <div className="max-w-[1440px] px-[32px] sm:px-[80px] lg:px-[120px] xl:px-[180px] mx-auto ">
          <div className="max-w-[660px]">
            <Mainheading
              headingClass={"!max-w-[400px] md:!max-w-[900px]"}
              mainheading={"Veterinary Services"}
            />
            <Para2
              paraClass={"!text-[#D7D9DD] !text-sm md:!text-base lg:!text-xl"}
              para2={
                "At Nebula Vets, we take pride in offering an extensive range of services to meet the diverse needs of our patients. Our commitment to comprehensive care ensures that we can provide the highest quality veterinary services under one roof."
              }
            />
            <Booklink booklink={"BOOK NOW"} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
