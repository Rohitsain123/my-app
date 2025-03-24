import Booklink from "@/component/common/Booklink";
import H5heading from "@/component/common/H5heading";
import Image from "next/image";
import React from "react";

function Come() {
  return (
    <>
      <div className="bg-[#494336] pt-[60px] lg:pt-[117px] pb-[194px] lg:pb-[117px] relative">
        <div className="absolute bottom-0 end-0">
          <Image
            src={"/assetes/img/png/dog-cat.png"}
            width={600}
            height={400}
            alt={"dog"}
          />
        </div>
        <div className="max-w-[1440px] ps-[32px] sm:ps-[80px] lg:ps-[120px] xl:ps-[180px] mx-auto">
          <H5heading
            h5Class={"!text-[#D7D9DD] text-2xl md:text-3xl lg:text-4xl"}
            h5heading={"Come visit us!"}
          />
          <div className="mt-[45px] lg:mt-[74px]">
            <Booklink booklink={"BOOK NOW"} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Come;
