import Footer from "@/component/common/Footer";
import Navbar from "@/component/common/Navbar";
import Exam from "@/component/pages/animal/Exam";
import Experince from "@/component/pages/animal/Experince";
import Forword from "@/component/pages/animal/Forword";
import Hero from "@/component/pages/animal/Hero";
import HeroCommon from "@/component/pages/animal/Hero";
import Why from "@/component/pages/animal/Why";

import React from "react";

function page() {
  return (
    <>
      <Navbar />
      <Hero />
      <Exam />
      <Why />
      <Experince />
      <Forword />
      <Footer />
    </>
  );
}

export default page;
