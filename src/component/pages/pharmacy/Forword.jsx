import React from "react";
import OurMission from "../home/OurMission";
import OurMissionCommon from "@/component/common/OurMissionCommon";

function Forword() {
  return (
    <>
      <OurMissionCommon
        abimg={"/assetes/img/png/line4.png"}
        h4Class={"!text-[#D7D9DD] max-w-[530px]"}
        title={"We look forward to seeing you and your pet soon!"}
        bookbtn={"BOOK NOW"}
      />
    </>
  );
}

export default Forword;
