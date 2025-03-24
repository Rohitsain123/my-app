import Footer from "@/component/common/Footer";
import Navbar from "@/component/common/Navbar";
import Choose from "@/component/pages/surgery/Choose";
import Does from "@/component/pages/surgery/Does";
import Forword from "@/component/pages/surgery/Forword";
import Hero from "@/component/pages/surgery/Hero";
import Nebula from "@/component/pages/surgery/Nebula";
import React from "react";

function page() {
  return (
    <>
      <Hero />
      <Does />
      <Nebula />
      <Choose />
      <Forword />
    </>
  );
}

export default page;
