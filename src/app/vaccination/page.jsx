import Footer from "@/component/common/Footer";
import Navbar from "@/component/common/Navbar";
import Forword from "@/component/pages/animal/Forword";
import Accordian from "@/component/pages/vaccination/Accordian";
import Core from "@/component/pages/vaccination/Core";
import Hero from "@/component/pages/vaccination/Hero";
import Vaccinate from "@/component/pages/vaccination/Vaccinate";
import React from "react";

function page() {
  return (
    <>
      <Navbar />
      <Hero />
      <Core />
      <Accordian />
      <Vaccinate />
      <Forword />
      <Footer />
    </>
  );
}

export default page;
