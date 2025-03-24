import HeroCommon from "@/component/common/HeroCommon";
import React from "react";

function Hero() {
  return (
    <>
      <HeroCommon
        imgClass={"max-w-[447px]"}
        heroimg={"/assetes/img/png/surgery.png"}
        title={"Surgery"}
        para={
          "In our state-of-the-art surgery suite, equipped with advanced technology and facilities, our highly experienced veterinarians are proficient in performing a wide range of surgical procedures. From routine surgeries like spays and neuters to more specialized soft tissue surgeries such as mass removals, laceration repair, abscess treatment, and dental procedures, we offer comprehensive surgical care for your pet."
        }
        btnname={"BOOK NOW"}
      />
    </>
  );
}

export default Hero;
