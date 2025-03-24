import H5heading from "@/component/common/H5heading";
import Para2 from "@/component/common/Para2";
import React from "react";

function Experience() {
  return (
    <>
      <div className="bg-[rgba(215,217,221,0.50);] py-[60px] lg:py-[80px]">
        <div className="max-w-[1440px] px-[32px] sm:px-[80px] lg:px-[120px] xl:px-[180px] mx-auto">
          <H5heading
            h5Class={"!text-[#494336] text-2xl md:text-3xl lg:text-4xl"}
            h5heading={
              "Experience Exceptional Pharmacy Services at Nebula Vets:"
            }
          />
          <Para2
            paraClass={"!text-sm md:!text-base lg:!text-lg"}
            para2={
              "Your pet's health and well-being are our top priorities, and our pharmacy is an integral part of our commitment to providing comprehensive veterinary care. Trust in the expertise of our pharmacy team to ensure your pet receives the highest standard of pharmaceutical services and products."
            }
          />
        </div>
      </div>
    </>
  );
}

export default Experience;
