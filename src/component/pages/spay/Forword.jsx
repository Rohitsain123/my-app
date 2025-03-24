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
          "Contact Nebula Vets today to schedule a consultation or discuss your pet's spay or neuter procedure. Let us provide your furry companion with the highest quality care and support, ensuring a healthier and happier life for them. "
        }
        bookbtn={"BOOK NOW"}
      />
    </>
  );
}

export default Forword;
