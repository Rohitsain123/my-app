import HeroCommon from "@/component/common/HeroCommon";
import React from "react";

function Hero() {
  return (
    <>
      <HeroCommon
        imgClass={"max-w-[500px] pb-[80px]"}
        heroimg={"/assetes/img/png/join.png"}
        title={"Join Our Nebula Vets Team:"}
        para={"Empowering Careers in Veterinary Care"}
        para2={
          "At Nebula Vets, we are passionate about providing exceptional veterinary care and creating a positive impact in the lives of pets and their families. We believe in the power of collaboration, compassion, and continuous growth. If you are seeking a rewarding career in veterinary medicine, Nebula Vets offers exciting opportunities to join our dedicated team."
        }
        btnname={"BOOK NOW"}
      />
    </>
  );
}

export default Hero;
