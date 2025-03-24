import Footer from "@/component/common/Footer";
import Navbar from "@/component/common/Navbar";
import Dental from "@/component/pages/dental/Dental";
import Experince from "@/component/pages/dental/Experince";
import Forword from "@/component/pages/dental/Forword";
import Hero from "@/component/pages/dental/Hero";
import Scale from "@/component/pages/dental/Scale";

import React from "react";

function page() {
  return (
    <>
      <Hero />
      <Scale />
      <Dental />
      <Experince />
      <Forword />
    </>
  );
}

export default page;
