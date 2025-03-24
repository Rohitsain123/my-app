import Footer from "@/component/common/Footer";
import Navbar from "@/component/common/Navbar";
import Blood from "@/component/pages/diagnostics/Blood";
import Digital from "@/component/pages/diagnostics/Digital";
import Forword from "@/component/pages/diagnostics/Forword";
import Hero from "@/component/pages/diagnostics/Hero";
import Imaging from "@/component/pages/diagnostics/Imaging";
import Snap from "@/component/pages/diagnostics/Snap";
import Tests from "@/component/pages/diagnostics/Tests";
import React from "react";

function page() {
  return (
    <>
      <Hero />
      <Tests />
      <Blood />
      <Imaging />
      <Digital />
      <Snap />
      <Forword />
    </>
  );
}

export default page;
