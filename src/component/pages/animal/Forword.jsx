import OurMissionCommon from "@/component/common/OurMissionCommon";
import React from "react";

function Forword() {
  return (
    <>
      <OurMissionCommon
        abimg={"/assetes/img/png/line4.png"}
        title={"We look forward to seeing you and your pet soon!"}
        para={
          "Schedule an animal health check at Nebula Vets today, and let us embark on a journey of comprehensive care for your cherished companion. Together, we will nurture their health and happiness, one check-up at a time."
        }
        bookbtn={"BOOK NOW"}
      />
    </>
  );
}

export default Forword;
