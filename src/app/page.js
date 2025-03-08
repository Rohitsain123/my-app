import Footer from "@/component/common/Footer";
import Navbar from "@/component/common/Navbar";
import About from "@/component/pages/home/About";
import Choose from "@/component/pages/home/Choose";
import Hero from "@/component/pages/home/Hero";
import Mission from "@/component/pages/home/Mission";
import OurMission from "@/component/pages/home/OurMission";
import Services from "@/component/pages/home/Services";
import Slider from "@/component/pages/home/Slider";

import React from "react";

function page() {
  return (
    <>
      <Navbar />
      <Hero />
      <Mission />
      <Choose />
      <Services />
      <Slider />
      <About />
      <OurMission />
      <Footer />
    </>
  );
}

export default page;
