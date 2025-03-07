import Booklink from "@/component/common/Booklink";
import Para2 from "@/component/common/Para2";
import Title from "@/component/common/Title";
import Image from "next/image";
import React from "react";

function Sick() {
  return (
    <>
      <div className="max-w-[1440px] w-[100%] mx-auto">
        <div className="flex-col md:flex-row flex ">
          <div className="w-[100%] md:w-[43%] ">
            <div className="bg-[#fff] pt-[60px] lg:pt[80px]  ">
              <div className="pl-[32px] sm:pl-[40px] md:pl-[50px] lg:pl-[72px] pr-[32px]">
                <div className="ms-[-30px] max-w-[218px] md:max-w-[376px] mt-[120px] md:mt-[-120px]">
                  <Image
                    src={"/assetes/img/png/surgery-icon2.png"}
                    width={376}
                    height={304}
                    alt={"map"}
                  />
                </div>
                <h5 className="text-[32px] md:text-4xl lg:text-5xl text-[#494336] mt-[-30px] md:mt-[90px]">
                  Surgery
                </h5>
                <p className="text-base md:text-xl lg:text-2xl roboto mt-[10px] md:mt-[25px]">
                  Highly experienced surgeons -dedicated to delivering
                  outstanding care for your pet.
                </p>
                <Para2
                  para2={
                    "  At Nebula Vets, we are equipped to handle a wide range of veterinary services, from emergency surgeries to routine procedures like neuters. Our team of skilled veterinarians is committed to providing the highest level of care to your pets."
                  }
                />
                <Booklink booklink={"BOOK NOW"} />
              </div>
            </div>
          </div>
          <div className="w-[100%] md:w-[57%]">
            <div className="bg-[#D7D9DD] py-[60px] lg:py-[80px] mt-[60px] md:mt-[0px]">
              <div className="ps-[32px] sm:ps-[40px] md:ps-[60px] lg:ps-[115px] pe-[33px]">
                <div className="max-w-[660px] border-b pb-[60px]">
                  <Title heading={"Surgery"} />
                  <Para2
                    para2={
                      "In our advanced state-of-the-art surgery suite, our experienced doctors can perform all routine surgeries, including spays, neuters, basic soft tissue surgery, such as mass removals, laceration repair, abscesses, and dental procedures. All estimates are provided within 24 hours of receiving a request!"
                    }
                  />
                  <Booklink booklink={"LEARN MORE"} />
                </div>
                <div className="max-w-[660px] border-b pb-[60px] mt-[60px]">
                  <Title heading={"Spays & Neuters"} />
                  <Para2
                    para2={
                      "Our team comprises highly trained doctors who excel in routine surgery and harness the full potential of our state-of-the-art technology and advanced equipment. With their expertise and proficiency, they ensure optimal surgical outcomes for your beloved pets"
                    }
                  />
                  <Booklink booklink={"LEARN MORE"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sick;
