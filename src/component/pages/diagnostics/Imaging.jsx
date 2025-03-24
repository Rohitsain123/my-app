import H5heading from "@/component/common/H5heading";
import Para2 from "@/component/common/Para2";
import React from "react";

function Imaging() {
  return (
    <>
      <div className="bg-[rgba(215,217,221,0.50);] py-[60px] lg:py-[80px]">
        <div className="max-w-[1440px] px-[32px] sm:px-80px] lg:px-[120px] xl:px-[180px] mx-auto    ">
          <H5heading
            h5Class={"!text-[#494336] text-2xl md:text-4xl lg:text-5xl"}
            h5heading={"Available Imaging  "}
          />
          <Para2
            paraClass={"!text-sm md:!text-base lg:!text-lg"}
            para2={
              "At Nebula Vets, we are committed to providing the highest quality care for your pet, which is why we have invested in state-of-the-art digital X-ray and ultrasound machines. These advanced imaging technologies play a crucial role in our diagnostic capabilities, allowing us to gain valuable insights into your pet's health and well-being."
            }
          />
        </div>
      </div>
    </>
  );
}

export default Imaging;
