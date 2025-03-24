import Footer from "@/component/common/Footer";
import Navbar from "@/component/common/Navbar";
import Forword from "@/component/pages/skin/Forword";
import Hero from "@/component/pages/skin/Hero";
import Vets from "@/component/pages/skin/Vets";
import Why from "@/component/pages/skin/Why";
import React from "react";

function page() {
  return (
    <>
      <Hero />
      <Why />
      <Vets />
      <Forword />
    </>
  );
}

export default page;
