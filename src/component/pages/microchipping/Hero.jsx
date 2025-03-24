import HeroCommon from "@/component/common/HeroCommon";
import React from "react";

function Hero() {
  return (
    <>
      <HeroCommon
        imgClass={"max-w-[624px] pb-[58px]"}
        heroimg={"/assetes/img/png/microchipping.png"}
        title={"Microchipping"}
        para={
          "A microchip, resembling a tiny grain of rice in size and shape, is delicately inserted beneath your pet's skin, specifically between the shoulder blades. This quick and completely safe procedure typically takes only a few minutes. Each microchip possesses a distinct identification code, crucial for storing essential information about your beloved pet."
        }
        btnname={"BOOK NOW"}
      />
    </>
  );
}

export default Hero;
