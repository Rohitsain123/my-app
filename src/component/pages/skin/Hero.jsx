import HeroCommon from "@/component/common/HeroCommon";
import React from "react";

function Hero() {
  return (
    <>
      <HeroCommon
        imgClass={"max-w-[500px] pb-[30px]"}
        heroimg={"/assetes/img/png/skin.png"}
        title={"Skin & Dermatology"}
        para={
          "At our practice, we specialize in the treatment of various skin-related issues, ranging from bacterial or yeast infections to bites and rashes. Our approach involves a comprehensive process of test-diagnose-treat, ensuring accurate identification of the underlying cause and tailored treatment plans. Trust us to address your pet's skin concerns with expertise and precision for optimal results."
        }
        btnname={"BOOK NOW"}
      />
    </>
  );
}

export default Hero;
