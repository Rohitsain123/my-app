import H5heading from "@/component/common/H5heading";
import Para2 from "@/component/common/Para2";
import { liData } from "@/component/helper/Helper";
import Image from "next/image";

import React from "react";

function During() {
  return (
    <div className="bg-[rgba(215,217,221,0.50);] pt-[60px] lg:pt-[80px] pb-[120px] lg:pb-[140px] relative">
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
          h5heading={"Urgent & Emergency Care during open hours"}
        />
        <Para2
          paraClass={"text-sm md:text-base !lg:text-lg text-[#494336]"}
          para2={
            "At Nebula Vets, we understand that emergencies can happen at any time, and your pet's health and well-being are our top priority.  We have convenient operating hours to ensure that we are available when you need us."
          }
        />
        <Para2
          paraClass={"text-sm md:text-base !lg:text-lg text-[#494336]"}
          para2={
            "Our clinic is open from 8am to 6pm on weekdays and from 9am to 5pm on Saturdays. During these hours, our team of veterinarians and staff are ready to provide care for your pets."
          }
        />{" "}
        <Para2
          paraClass={"text-sm md:text-base !lg:text-lg text-[#494336]"}
          para2={
            "If you have an urgent situation and require immediate advice or first aid instructions while you're on your way to our practice, you can contact us at 1234567. Our knowledgeable staff will assist you and provide guidance to help you manage the situation until you arrive."
          }
        />
        <H5heading
          h5Class={"!text-[#494336] mt-[30px] text-2xl md:text-3xl lg:text-4xl"}
          h5heading={"Outside open hours"}
        />
        <Para2
          paraClass={"text-sm mdLtext-base lg:text-lg"}
          para2={
            "The closest 24hr emergency veterinary hospital to our practice is:"
          }
        />
        <Para2
          paraClass={"text-sm mdLtext-base lg:text-lg !mt-[0px]"}
          para2={"Their number is 123456"}
        />
        <H5heading
          h5Class={"!text-[#494336] text-2xl md:text-3xl lg:text-4xl mt-[30px]"}
          h5heading={"Reasons to seek Urgent or Emergency care"}
        />
        <ul className="list-disc ms-[25px] mt-[25px]">
          {liData.map((item, index) => (
            <div key={index}>
              <li>{item.lipara}</li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default During;
