import HeroCommon from "@/component/common/HeroCommon";
import React from "react";

function Hero() {
  return (
    <>
      <HeroCommon
        imgClass={"max-w-[400px] md:max-w-[528px] !relative md:absolute  "}
        heroimg={"/assetes/img/png/AnimalHero.png"}
        className={"max-w-[528px]"}
        title={"Animal Health Check"}
        para={
          "This comprehensive assessment involves a thorough evaluation of your pet's major organ systems. During this visit, we take the opportunity to discuss important aspects of your pet's well-being, including their behavior, appetite, exercise routines, and daily activities at home. It is also an ideal occasion for us to recommend any routine diagnostic tests that could be advantageous for your pet's health or to determine if any vaccinations are due."
        }
        btnname={"BOOK NOW"}
      />
    </>
  );
}

export default Hero;
