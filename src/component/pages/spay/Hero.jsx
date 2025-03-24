import HeroCommon from "@/component/common/HeroCommon";
import React from "react";

function Hero() {
  return (
    <>
      <HeroCommon
        imgClass={"max-w-[447px]"}
        heroimg={"/assetes/img/png/spay.png"}
        title={"Spay & Neuter"}
        para={
          "Spaying, also known as ovariohysterectomy, is a surgical procedure performed on female animals to render them infertile. It involves the removal of the ovaries and uterus under general anesthesia."
        }
        p2Class={"mt-[25px]"}
        para2={
          "Neutering is a safe and effective surgical procedure designed to ensure that your male pet cannot reproduce. This important procedure involves the careful removal of your pet's testicles while they are comfortably under general anesthesia."
        }
        btnname={"BOOK NOW"}
      />
    </>
  );
}

export default Hero;
