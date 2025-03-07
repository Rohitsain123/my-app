import Footer from "@/component/common/Footer";
import Navbar from "@/component/common/Navbar";
import OurMissionCommon from "@/component/common/OurMissionCommon";
import About from "@/component/pages/home/About";
import Choose from "@/component/pages/home/Choose";
import Hero from "@/component/pages/home/Hero";
import Mission from "@/component/pages/home/Mission";
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
      <Footer />
    </>
  );
}

export default page;
