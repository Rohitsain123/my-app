import Navbar from "@/component/common/Navbar";
import Hero from "@/component/pages/travel/Hero";
import React from "react";
import Pet from "../../component/pages/travel/Pet";
import Forword from "@/component/pages/travel/Forword";
import Footer from "@/component/common/Footer";

function page() {
  return (
    <>
      <Hero />
      <Pet />
      <Forword />
    </>
  );
}

export default page;
