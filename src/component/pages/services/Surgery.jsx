import Booklink from "@/component/common/Booklink";
import Para2 from "@/component/common/Para2";
import Title from "@/component/common/Title";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Surgery() {
  return (
    <>
      <div className="max-w-[1440px] w-[100%] mx-auto">
        <div className="flex-col md:flex-row flex ">
          <div className="w-[100%] md:w-[43%] ">
            <div className="bg-[#fff] mt-[120px] md:mt-[-60px]">
              <div className="pl-[32px] sm:pl-[40px] md:pl-[50px] lg:pl-[72px] pr-[32px]">
                <div className="ms-[-30px] max-w-[218px] md:max-w-[376px]">
                  <Image
                    src={"/assetes/img/png/bandage.png"}
                    width={376}
                    height={304}
                    alt={"map"}
                  />
                </div>
                <h5 className="text-[32px] md:text-4xl lg:text-5xl text-[#494336] mt-[-30px] md:mt-[90px]">
                  Sick Patient Care
                </h5>
                <p className="text-base md:text-xl lg:text-2xl roboto mt-[10px] md:mt-[25px]">
                  Delivering exceptional care for sick patients, combining the
                  virtues of efficiency and expertise
                </p>
                <p className="text-sm md:text-base lg:text-xl mt-[25px]">
                  At Nebula Vets, we are fully equipped with advanced diagnostic
                  tools and a wide range of treatment options to address any
                  health issue your pet may be facing. Our commitment to
                  comprehensive care means that we have the expertise and
                  resources to provide accurate diagnoses and effective
                  treatments.
                </p>
                <Booklink booklink={"BOOK NOW"} />
              </div>
            </div>
          </div>
          <div className="w-[100%] md:w-[57%]">
            <div className="bg-[#D7D9DD] py-[60px] lg:py-[80px] mt-[60px] md:mt-[0px]">
              <div className="ps-[32px] sm:ps-[40px] md:ps-[60px] lg:ps-[115px] pe-[33px]">
                <div className="max-w-[660px] border-b pb-[60px]">
                  <Title heading={"Urgent & Emergency Care"} />
                  <Para2
                    para2={
                      "Whether your pet is sick or injured, we’re here to help get them the help they need. This includes telemedicine veterinary consults if you are unsure, and overnight care for 24-hour treatment."
                    }
                  />
                  <Booklink booklink={"LEARN MORE"} />
                </div>
                <div className="max-w-[660px] border-b pb-[60px] mt-[60px]">
                  <Title heading={"Telemedicine consults"} />
                  <Para2
                    para2={
                      "Nebula vets offers a fast telemedicine service, to help your pet without leaving the home"
                    }
                  />
                  <Booklink booklink={"LEARN MORE"} />
                </div>
                <div className="max-w-[660px] border-b pb-[60px] mt-[60px]">
                  <Title heading={"Diagnostics"} />
                  <Para2
                    para2={
                      "Nebula vets has invested in the latest technology, equipped for all the diagnostic tests your pet needs to stay healthy, and to treat those that get sick. We’re able to run tests quickly in-house in situations where a rapid diagnosis is required and offer artificialintelligence alongside veterinary experts."
                    }
                  />
                  <Booklink booklink={"LEARN MORE"} />
                </div>{" "}
                <div className="max-w-[660px] border-b pb-[60px] mt-[60px]">
                  <Title heading={"Pharmacy"} />
                  <Para2
                    para2={
                      "Our highly stocked on-site pharmacy inlcudes a variety of prescription medications and pet health products for your pet. If a particular medication is unavailable, our compounding pharmacy can have it delivered to you within 24 hours."
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

export default Surgery;
