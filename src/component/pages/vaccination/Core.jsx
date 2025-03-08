import Grey from "@/component/common/Grey";
import React from "react";

function Core() {
  return (
    <>
      <Grey
        lineimg={"/assetes/img/png/line2.png"}
        title={"Why should I vaccinate my pet?"}
        para={
          "Vaccines are affective as the expose your pet’s immune system to an inactive strain of infectious agents. This assists their body to create immune cells that are specifically designed to respond effectively when exposed to the disease. Vaccines are also relatively painless, quick and cost-effective to administer."
        }
        title2={"What are core and non-core vaccines?"}
        para2={
          "Core vaccines are often vaccines considered essential for your pet’s health, whilst non-core vaccines are optional, and may be recommended for your pet depending on their lifestyle."
        }
        para3={
          "Our vets will discuss the suitable vaccines for your pet during the consultation."
        }
      />
    </>
  );
}

export default Core;
