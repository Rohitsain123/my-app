import HeroCommon from "@/component/common/HeroCommon";
import React from "react";

function Hero() {
  return (
    <>
      <HeroCommon
        imgClass={"max-w-[600px]"}
        heroimg={"/assetes/img/png/dental-hero.png"}
        title={"Dental Care"}
        para={
          "At Nebula Vets, we recognize the significance of dental hygiene in maintaining your pet's overall health. Dental disease can have far-reaching implications, potentially leading to serious conditions like heart disease and kidney disease. To ensure your pet's oral health, we conduct thorough dental examinations to identify any dental issues that require attention."
        }
        btnname={"BOOK NOW"}
        className={"max-w-[500px]"}
      />
    </>
  );
}

export default Hero;
