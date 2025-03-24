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
          "Contact Nebula Vets today to schedule a consultation or discuss your pet's surgical needs. Let us be your partner in providing outstanding surgical care for your furry companion."
        }
        bookbtn={"BOOK NOW"}
      />
    </>
  );
}

export default Forword;
