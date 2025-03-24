import HeroCommon from "@/component/common/HeroCommon";
import React from "react";

function Hero() {
  return (
    <>
      <HeroCommon
        imgClass={"max-w-[550px]"}
        heroimg={"/assetes/img/png/telemedicine.png"}
        title={"Telemedicine"}
        para={
          "Nebula Vets' online telemedicine service is a convenient and innovative way to connect with our veterinary doctors from the comfort of your own home. Through this platform, you can have a virtual consultation with our experienced veterinarians, allowing you to receive timely and expert advice for your pet's health concerns without the need to physically visit our clinic."
        }
        btnname={"BOOK NOW"}
      />
    </>
  );
}

export default Hero;
