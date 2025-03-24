import HeroCommon from "@/component/common/HeroCommon";
import React from "react";

function Hero() {
  return (
    <>
      <HeroCommon
        imgClass={"max-w-[420px] pb-[50px]"}
        heroimg={"/assetes/img/png/laser.png"}
        title={"Laser Therapy"}
        para={
          "At Nebula Vets, we are excited to offer the remarkable benefits of laser therapy for our furry patients. Our state-of-the-art veterinary hospital utilizes advanced laser technology to provide non-invasive and drug-free treatment options that promote healing and enhance the well-being of your beloved pets. Join us as we explore the transformative effects of laser therapy."
        }
        btnname={"BOOK NOW"}
      />
    </>
  );
}

export default Hero;
