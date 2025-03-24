import Footer from "@/component/common/Footer";
import Navbar from "@/component/common/Navbar";
import Come from "@/component/pages/location/Come";
import Downtown from "@/component/pages/location/Downtown";
import Hero from "@/component/pages/location/Hero";
import React from "react";

function page() {
  return (
    <>
      <Hero />
      <Downtown />
      <Come />
    </>
  );
}

export default page;
