import Footer from "@/component/common/Footer";
import Navbar from "@/component/common/Navbar";

import Career from "@/component/pages/join/Career";
import Hero from "@/component/pages/join/Hero";
import Slider from "@/component/pages/join/Slider";
import Team from "@/component/pages/join/Team";
import React from "react";

function page() {
  return (
    <>
      <Hero />
      <Slider />
      <Career />
      <Team />
    </>
  );
}

export default page;
