import HeroCommon from "@/component/common/HeroCommon";
import Para2 from "@/component/common/Para2";
import React from "react";

function Hero() {
  return (
    <>
      <HeroCommon
        imgClass={"max-w-[600px] w-full"}
        heroimg={"/assetes/img/png/diagnostics.png"}
        title={"Diagnostics"}
        para={
          "At Nebula Vets, we are committed to providing comprehensive and advanced diagnostic testing to ensure the well-being of your cherished pet. Our state-of-the-art veterinary hospital offers a range of diagnostic tests that empower us to gain precise insights into your pet's health. Here are some of the key diagnostic tests available at Nebula Vets for the benefit of our clients and their beloved pets"
        }
        btnname={"BOOK NOW"}
      />
    </>
  );
}

export default Hero;
