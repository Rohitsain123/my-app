import HeroCommon from "@/component/common/HeroCommon";
import React from "react";

function Hero() {
  return (
    <>
      <HeroCommon
        heroimg={"/assetes/img/png/vaccination-hero.png"}
        title={"Vaccinations"}
        para={
          "Vaccinations are key in keeping your pet healthy and preventing them catching life-threatening disease. Our veterinary team is dedicated to providing comprehensive vaccination services tailored to your pet's individual needs and lifestyle. This includes not only dogs and cats but also rabbits and ferrets."
        }
        btnname={"BOOK NOW"}
        className={"max-w-[400px]"}
      />
    </>
  );
}

export default Hero;
