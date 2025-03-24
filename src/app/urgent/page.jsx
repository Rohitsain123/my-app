import Footer from "@/component/common/Footer";
import HeroCommon from "@/component/common/HeroCommon";
import Navbar from "@/component/common/Navbar";
import Choose from "@/component/pages/urgent/Choose";
import During from "@/component/pages/urgent/During";
import Forword from "@/component/pages/urgent/Forword";
import Hero from "@/component/pages/urgent/Hero";
import React from "react";

function Page() {
  return (
    <>
      <Hero />
      <During />
      <Choose />
      <Forword />
    </>
  );
}

export default Page;
