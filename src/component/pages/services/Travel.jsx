import Booklink from "@/component/common/Booklink";
import Para2 from "@/component/common/Para2";
import Title from "@/component/common/Title";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Travel() {
  return (
    <>
      <div className="max-w-[1440px] w-[100%] mx-auto">
        <div className="flex-col md:flex-row flex ">
          <div className="w-[100%] md:w-[43%] ">
            <div className="bg-[#fff] pt-[60px] lg:pt[80px]  ">
              <div className="pl-[32px] sm:pl-[40px] md:pl-[50px] lg:pl-[72px] pr-[32px]">
                <div className="ms-[-30px] max-w-[218px] md:max-w-[376px] mt-[60px] md:mt-[0px]">
                  <Image
                    src={"/assetes/img/png/book.png"}
                    width={376}
                    height={304}
                    alt={"map"}
                  />
                </div>
                <h5 className="text-[32px] md:text-4xl lg:text-5xl text-[#494336] mt-[30px] md:mt-[45px]">
                  Additional Services
                </h5>
                <p className="text-base md:text-xl lg:text-2xl roboto mt-[10px] md:mt-[25px]">
                  Additional Services that Go Above and Beyond: Experience
                  Exceptional Veterinary Care at Nebula Vets
                </p>
                <Para2
                  para2={
                    "Experience comprehensive veterinary care at Nebula Vets. We offer specialized services in travel document assistance, skin dermatology, microchipping, and compassionate euthanasia. Trust our experienced team for exceptional care tailored to your pet's unique needs."
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
                  <Title heading={"Travel Certificates"} />
                  <Para2
                    para2={
                      "From domestic or international travel, you will usually require a health certificate for your pet. We can help with the necessary paperwork to allow your pet to join you on your travels –the process is simple and easy."
                    }
                  />
                  <Booklink booklink={"LEARN MORE"} />
                </div>
                <div className="max-w-[660px] border-b pb-[60px] mt-[60px]">
                  <Title heading={"Skin & Dermatology"} />
                  <Para2
                    para2={
                      "If your pet is experiencing uncomfortable symptoms such as itchy skin, hair loss, or rashes, it may be indicative of allergies or infections. Our team of highly trained veterinarians specializes in diagnosing and treating various skin issues that can cause distress to your beloved companion. With their expertise and comprehensive understanding of dermatological conditions, they will diligently assess your pet's symptoms and develop a tailored treatment plan to address the underlying cause of their discomfort."
                    }
                  />
                  <Booklink booklink={"LEARN MORE"} />
                </div>
                <div className="max-w-[660px] border-b pb-[60px] mt-[60px]">
                  <Title heading={"Microchipping"} />
                  <Para2
                    para2={
                      "A microchip, resembling a tiny grain of rice in size and shape, is delicately inserted beneath your pet's skin, specifically between the shoulder blades. This quick and completely safe procedure typically takes only a few minutes. "
                    }
                  />
                  <Booklink booklink={"LEARN MORE"} />
                </div>{" "}
                <div className="max-w-[660px] border-b pb-[60px] mt-[60px]">
                  <Title heading={"Laser Therapy"} />
                  <Para2
                    para2={
                      "Our state-of-the-art veterinary hospital utilizes advanced laser technology to provide non-invasive and drug-free treatment options that promote healing and enhance the well-being of your beloved pets."
                    }
                  />
                  <Booklink booklink={"LEARN MORE"} />
                </div>{" "}
                <div className="max-w-[660px] border-b pb-[60px] mt-[60px]">
                  <Title heading={"Hospice & Euthanasia"} />
                  <Para2
                    para2={
                      "The decision to say goodbye to your pet is the most difficult decision you’ll have to make. Our team at nebula vets is here to guide you through the process with compassion and can perform end-of-life services at the time of your choosing."
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

export default Travel;
