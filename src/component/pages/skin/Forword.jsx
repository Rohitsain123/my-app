import OurMissionCommon from "@/component/common/OurMissionCommon";
import React from "react";

function Forword() {
  return (
    <>
      <OurMissionCommon
        abimg={"/assetes/img/png/line4.png"}
        h4Class={"!text-[#D7D9DD]"}
        title={"We look forward to seeing you and your pet soon!"}
        para={
          "Contact Nebula Vets today to schedule a dermatology consultation and let our experienced team bring the sparkle back to your pet's coat. Together, we will help your furry friend shine with healthy skin and a happy disposition."
        }
        bookbtn={"BOOK NOW"}
      />
    </>
  );
}

export default Forword;
