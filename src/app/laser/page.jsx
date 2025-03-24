import Navbar from "@/component/common/Navbar";
import Hero from "@/component/pages/laser/Hero";
import React from "react";
import Laser from "../../component/pages/laser/Laser";
import Pain from "@/component/pages/laser/Pain";
import Experince from "@/component/pages/laser/Experince";
import Forword from "@/component/pages/laser/Forword";
import Footer from "@/component/common/Footer";

function page() {
  return (
    <>
      <Hero />
      <Laser />
      <Pain />
      <Experince />
      <Forword />
    </>
  );
}

export default page;
