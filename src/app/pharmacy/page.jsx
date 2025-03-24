import Footer from "@/component/common/Footer";
import Navbar from "@/component/common/Navbar";
import Choose from "@/component/pages/pharmacy/Choose";
import Experience from "@/component/pages/pharmacy/Experience";
import Forword from "@/component/pages/pharmacy/Forword";
import Hero from "@/component/pages/pharmacy/Hero";
import Work from "@/component/pages/pharmacy/Work";
import React from "react";

function page() {
  return (
    <>
      <Hero />
      <Work />
      <Choose />
      <Experience />
      <Forword />
    </>
  );
}

export default page;
