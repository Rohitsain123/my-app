import OurMissionCommon from "@/component/common/OurMissionCommon";
import React from "react";

function Team() {
  return (
    <>
      <OurMissionCommon
        abimg={"/assetes/img/png/line4.png"}
        h4Class={"!text-[#D7D9DD] text-2xl md:text-3xl lg:text-4xl"}
        title={"Join our team"}
        para={
          "Grow your career with Nebula Vets and become part of a team that is shaping the future of veterinary care. Contact us today to learn more about current openings, our application process, and how you can contribute to our mission of providing exceptional care to our beloved patients. Together, let's create a brighter future for veterinary medicine."
        }
        bookbtn={"BOOK NOW"}
      />
    </>
  );
}

export default Team;
