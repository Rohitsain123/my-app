import Footer from "@/component/common/Footer";

import Navbar from "@/component/common/Navbar";
import OurMissionCommon from "@/component/common/OurMissionCommon";
import Core from "@/component/pages/vaccination/Core";
import Hero from "@/component/pages/vaccination/Hero";
import React from "react";

function page() {
  return (
    <>
      <Navbar />
      <Hero />
      <Core />
      <Footer />
    </>
  );
}

export default page;
