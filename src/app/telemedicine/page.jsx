import Footer from "@/component/common/Footer";
import Navbar from "@/component/common/Navbar";
import Forword from "@/component/pages/telemedicine/Forword";

import Hero from "@/component/pages/telemedicine/Hero";
import Slider from "@/component/pages/telemedicine/Slider";
import Why from "@/component/pages/telemedicine/Why";
import React from "react";

function page() {
  return (
    <>
      <Hero />
      <Why />
      <Slider />
      <Forword />
    </>
  );
}

export default page;
