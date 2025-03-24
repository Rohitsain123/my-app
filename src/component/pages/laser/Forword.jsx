import OurMissionCommon from "@/component/common/OurMissionCommon";
import React from "react";

function Forword() {
  return (
    <>
      <OurMissionCommon
        abimg={"/assetes/img/png/line4.png"}
        h4Class={"!text-[#D7D9DD] text-2xl md:text-3xl lg:!text-4xl"}
        title={"We look forward to seeing you and your pet soon!"}
        para={
          "If you believe that laser therapy could benefit your pet, we encourage you to schedule a consultation with our experienced veterinary team. We will assess your pet's condition, discuss treatment options, and develop a personalized plan that suits their specific needs."
        }
        bookbtn={"BOOK NOW"}
      />
    </>
  );
}

export default Forword;
