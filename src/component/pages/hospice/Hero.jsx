import HeroCommon from "@/component/common/HeroCommon";
import React from "react";

function Hero() {
  return (
    <>
      <HeroCommon
        imgClass={"max-w-[457px] w-full pb-[30px]"}
        heroimg={"/assetes/img/png/hospice.png"}
        titleClass={"min-w-[900px] w-full"}
        title={"Hospice & Euthanasia"}
        para={
          "At Nebula Vets, we understand how difficult it is to say goodbye to a beloved pet. During this emotional time, our compassionate and caring team is here to support you and your pet. We offer hospice services that focus on providing comfort and dignity to your pet during their last days and final moments."
        }
        btnname={"BOOK NOW"}
      />
    </>
  );
}

export default Hero;
