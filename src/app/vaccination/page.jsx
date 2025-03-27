import Forword from "@/component/pages/animal/Forword";
import Accordian from "@/component/pages/vaccination/Accordian";
import Core from "@/component/pages/vaccination/Core";
import Hero from "@/component/pages/vaccination/Hero";
import UseState from "@/component/pages/vaccination/UseState";
import Vaccinate from "@/component/pages/vaccination/Vaccinate";
import React from "react";

function page() {
  return (
    <>
      <Hero />
      <Core />
      <Accordian />
      <Vaccinate />
      <Forword />
    </>
  );
}

export default page;
