import Booklink from "@/component/common/Booklink";
import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <>
      <div className="bg-[#494336] pt-[100px] lg:pt-[130px] pb-[60px] lg:pb-[85px] ">
        <div className="max-w-[1440px] mx-auto ps-8 items-center">
          <div className="flex  gap-14 hidden md:flex">
            <div>
              <h1 className="text-[32px] sm:text-[40px]   lg:text-[70px] avantt max-w-[250px] sm:max-w-[369px] text-[#D7D9DD] leading-[90%]">
                About Nebula Vets
              </h1>
              <p className="text-sm md:text-lg lg:text-[20px] mt-[20px]  m-0 text-[#D7D9DD] leading-[130%] max-w-[630px] text-regular">
                With a foundation built on values, innovation, and a commitment
                to excellence, Nebula Vets continues to strive for excellence in
                veterinary care. Our journey is fueled by the passion to make a
                difference in the lives of pets and their owners, providing you
                with a trusted partner in your pet's health and well-being.
              </p>
              <Booklink booklink={"BOOK NOW"} />
            </div>
            <div className="max-w-[360px] md:max-w-[400px] lg:max-w-[630px]">
              <Image
                src={"/assetes/img/png/Hero Image (3).png"}
                width={636}
                height={458}
                alt={"hero   "}
              />
            </div>
          </div>
        </div>
        <div className="flex md:hidden">
          <div className="relative">
            <div className="absolute top-[-30px] w-full">
              <Image
                className="w-full"
                src={"/assetes/img/png/line9.png"}
                width={700}
                height={150}
                alt={"line"}
              />
            </div>
            <h1 className="text-[32px] sm:text-[40px] lg:text-[70px] avantt max-w-[250px] sm:max-w-[369px] text-[#D7D9DD] leading-[90%] px-8">
              About Nebula Vets
            </h1>
            <div className="lg:max-w-[630px] mt-6">
              <Image
                className="w-full"
                src={"/assetes/img/png/Hero Image (3).png"}
                width={359}
                height={259}
                alt={"hero   "}
              />
            </div>
            <p className="text-sm md:text-lg lg:text-[20px] mt-[45px]  m-0 text-[#D7D9DD] leading-[130%] max-w-[630px] text-regular px-8">
              With a foundation built on values, innovation, and a commitment to
              excellence, Nebula Vets continues to strive for excellence in
              veterinary care. Our journey is fueled by the passion to make a
              difference in the lives of pets and their owners, providing you
              with a trusted partner in your pet's health and well-being.
            </p>
            <Booklink booklink={"BOOK NOW"} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
