import H5heading from "@/component/common/H5heading";
import Para2 from "@/component/common/Para2";
import Image from "next/image";
import React from "react";

function Why() {
  return (
    <>
      <div className="bg-[rgba(215,217,221,0.50);] py-[60px] lg:py-[80px] relative">
        <div className="absolute bottom-0">
          <Image
            className="w-full"
            src={"/assetes/img/png/line5.png"}
            width={1440}
            height={400}
            alt={"line5"}
          />
        </div>
        <div className="max-w-[1440px] px-[32px] sm:px-[80px] lg:px-[120px] xl:px-[180px] mx-auto">
          <H5heading
            h5Class={"text-2xl md:text-3xl lg:text-4xl !text-[#494336]"}
            h5heading={"Why use Telemedicine"}
          />
          <Para2
            paraClass={"!text-sm md:!text-base lg:!text-lg"}
            para2={
              "Nebula Vets' online telemedicine service is designed to provide immediate advice and guidance for various veterinary issues. Whether you're unsure about the severity of a symptom or need assistance in determining the best course of action for your pet, our experienced veterinarians can offer real-time advice through the telemedicine platform."
            }
          />
          <H5heading
            h5Class={
              "text-2xl md:text-3xl lg:text-4xl !text-[#494336] mt-[30px]"
            }
            h5heading={"During the online consultation"}
          />
          <Para2
            paraClass={"!text-sm md:!text-base lg:!text-lg"}
            para2={
              "Our veterinarians will carefully assess the information you provide and ask relevant questions to better understand your pet's condition. Based on their evaluation, they can advise you on whether it's safe to monitor the situation at home or if furtherin-person evaluation and treatment are necessary."
            }
          />{" "}
          <Para2
            paraClass={"!text-sm md:!text-base lg:!text-lg"}
            para2={
              "This immediate access to professional veterinary advice can be particularly valuable in situations where you're unsure if a symptom or behavior is concerning enough to warrant a visit to the clinic. It can save you time and unnecessary stress by providing clarity and peace  of mind."
            }
          />{" "}
          <Para2
            paraClass={"!text-sm md:!text-base lg:!text-lg"}
            para2={
              "However, it's important to note that there are limitations to telemedicine, and certain cases may still require an in-person visit for a thorough examination or diagnostic tests. Our veterinarians will use their expertise to determine the most appropriate course of action based on the information provided during the telemedicine consultation."
            }
          />
        </div>
      </div>
    </>
  );
}

export default Why;
