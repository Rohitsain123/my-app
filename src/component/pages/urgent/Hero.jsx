import HeroCommon from "@/component/common/HeroCommon";
import React from "react";

function Hero() {
  return (
    <HeroCommon
      imgClass={"max-w-[508px] w-full"}
      heroimg={"/assetes/img/png/urgent-hero.png"}
      titleClass={"max-w-[600px]"}
      title={"Urgent & Emergency Care"}
      para={
        "At Nebula Vets, we understand that when your pet is sick or injured, prompt and quality care is essential. Our dedicated team of veterinarians and staff are committed to providing the care your pet needs to recover and thrive."
      }
      btnname={"BOOK NOW"}
    />
  );
}

export default Hero;
