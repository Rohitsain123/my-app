import Booklink from "@/component/common/Booklink";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <>
      <div className="bg-[#494336] pt-[130px] lg:pt-[250px] pb-[260px] lg:pb-[85px] relative">
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
            <h1 className="text-[32px] md:text-5xl lg:text-[70px] text-[#D7D9DD]">
              Veterinary Services
            </h1>
            <p className="text-sm md:text-base lg:text-xl text-[#D7D9DD] mt-[20px]">
              At Nebula Vets, we take pride in offering an extensive range of
              services to meet the diverse needs of our patients. Our commitment
              to comprehensive care ensures that we can provide the highest
              quality veterinary services under one roof.
            </p>
            <Booklink booklink={"BOOK NOW"} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
