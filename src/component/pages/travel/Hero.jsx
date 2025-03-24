import HeroCommon from "@/component/common/HeroCommon";
import React from "react";

function Hero() {
  return (
    <>
      <HeroCommon
        imgClass={"max-w-[530px]"}
        heroimg={"/assetes/img/png/travel.png"}
        title={"Travel"}
        para={
          "At Nebula Vets, we understand that travel with your pet requires careful planning and adherence to specific requirements. Whether you are traveling domestically or internationally, we are here to assist you with the necessary exams and paperwork."
        }
        btnname={"BOOK NOW"}
      />
    </>
  );
}

export default Hero;
