import Footer from "@/component/common/Footer";
import Navbar from "@/component/common/Navbar";
import Edge from "@/component/pages/about/Edge";
import Education from "@/component/pages/about/Education";
import Hero from "@/component/pages/about/Hero";
import Team from "@/component/pages/about/Team";
import Vision from "@/component/pages/about/Vision";
import React from "react";

function page() {
  return (
    <>
      <Hero />
      <Vision />
      <Edge />
      <Education />
      <Team />
    </>
  );
}

export default page;
