import Footer from "@/component/common/Footer";
import Navbar from "@/component/common/Navbar";
import Care from "@/component/pages/services/Care";
import Hero from "@/component/pages/services/Hero";
import Preventivecare from "@/component/pages/services/Preventivecare";
import Sick from "@/component/pages/services/Sick";
import Slider from "@/component/pages/services/Slider";
import Surgery from "@/component/pages/services/Surgery";
import Travel from "@/component/pages/services/Travel";
import React from "react";

function page() {
  return (
    <>
      <Hero />
      <Slider />
      <Care />
      <Preventivecare />
      <Surgery />
      <Sick />
    </>
  );
}

export default page;
