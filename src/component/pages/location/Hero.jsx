import HeroCommon from "@/component/common/HeroCommon";
import React from "react";

function Hero() {
  return (
    <>
      <HeroCommon
        imgClass={"max-w-[550px] pb-[50px]"}
        heroimg={"/assetes/img/png/location.png"}
        title={"Our Washington DC Practice"}
        para={
          "We take great pride in our state-of-the-art, AAHA-accredited facilities that are meticulously designed to provide a stress-free experience for our patients and human clients alike. Equipped with modern technology and advanced resources, our practices ensure the highest standard of veterinary care."
        }
        btnname={"BOOK NOW"}
      />
    </>
  );
}

export default Hero;
