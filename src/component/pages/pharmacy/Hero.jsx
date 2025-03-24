import HeroCommon from "@/component/common/HeroCommon";
import React from "react";

function Hero() {
  return (
    <>
      <HeroCommon
        imgClass={"max-w-[550px]"}
        heroimg={"/assetes/img/png/pharmacy.png"}
        title={"Pharmacy"}
        para={
          "At Nebula Vets, we understand the importance of convenient access to necessary medications and pet health products for your furry companions. That's why we have an on-site pharmacy stocked with a wide range of prescription medications, prescription diets, and other pet health products."
        }
        btnname={"BOOK NOW"}
      />
    </>
  );
}

export default Hero;
