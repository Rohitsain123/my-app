import H5heading from "@/component/common/H5heading";
import Para2 from "@/component/common/Para2";
import React from "react";

function Experince() {
  return (
    <>
      <div className="bg-[rgba(215,217,221,0.50);] py-[60px] lg:py-[80px]">
        <div className="max-w-[1440px] px-[32px] sm:px-[80px] lg:px-[120px] xl:px-[180px] mx-auto">
          <H5heading
            h5Class={"!text-[#494336] text-2xl md:text-3xl lg:text-4xl"}
            h5heading={"Experience Laser Therapy at Nebula Vets:"}
          />
          <Para2
            paraClass={"!text-sm md:!text-base lg:!text-xl"}
            para2={
              "At Nebula Vets, we are committed to utilizing the latest advancements in veterinary care to enhance the well-being of your pets. Laser therapy is just one example of our dedication to providing comprehensive and effective treatment options."
            }
          />
        </div>
      </div>
    </>
  );
}

export default Experince;
