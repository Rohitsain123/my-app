import H5heading from "@/component/common/H5heading";
import Para2 from "@/component/common/Para2";
import React from "react";

function Choose() {
  return (
    <>
      <div className="bg-[rgba(215,217,221,0.50);] py-[60px] lg:py-[80px]">
        <div className="max-w-[1440px] px-[32px] sm:px-[80px] lg:px-[120px] xl:px-[180px] mx-auto">
          <H5heading
            h5Class={"!text-[#494336] text-2xl lg:text-[28px] roboto"}
            h5heading={
              "Choose Nebula Vets for Exceptional Spay and Neuter Services:"
            }
          />
          <Para2
            paraClass={"text-sm md:text-base lg:text-xl"}
            para2={
              "When it comes to spaying and neutering, Nebula Vets is your trusted partner. We offer exceptional surgical care with compassion, expertise, and a focus on your pet's well-being. By choosing us, you are making a responsible decision that promotes their health, prevents unwanted litters, and contributes to a healthier pet population overall."
            }
          />
        </div>
      </div>
    </>
  );
}

export default Choose;
