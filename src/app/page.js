import About from "@/component/pages/home/About";
import Choose from "@/component/pages/home/Choose";
import Hero from "@/component/pages/home/Hero";
import HomeSlider from "@/component/pages/home/HomeSlider";
import Mission from "@/component/pages/home/Mission";
import OurMission from "@/component/pages/home/OurMission";
import Services from "@/component/pages/home/Services";
import React from "react";

function page() {
  return (
    <>
      <Hero />
      <Mission />
      <Choose />
      <Services />
      <HomeSlider />
      <About />
      <OurMission />
    </>
  );
}

export default page;
