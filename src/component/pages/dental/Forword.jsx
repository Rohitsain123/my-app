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
          "Schedule a dental appointment at Nebula Vets today, and let us illuminate your pet's smile for a lifetime of dental wellness and happiness. Together, we will nurture their oral health, one shining smile at a time."
        }
        bookbtn={"BOOK NOW"}
      />
    </>
  );
}

export default Forword;
