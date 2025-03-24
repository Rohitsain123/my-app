import Footer from "@/component/common/Footer";
import Navbar from "@/component/common/Navbar";
import Choose from "@/component/pages/spay/Choose";
import Forword from "@/component/pages/spay/Forword";
import Hero from "@/component/pages/spay/Hero";
import Neuter from "@/component/pages/spay/Neuter";
import Spay from "@/component/pages/spay/Spay";
import React from "react";

function page() {
  return (
    <>
      <Hero />
      <Spay />
      <Neuter />
      <Choose />
      <Forword />
    </>
  );
}

export default page;
