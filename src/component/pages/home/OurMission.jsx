import OurMissionCommon from "@/component/common/OurMissionCommon";
import React from "react";

function OurMission() {
  return (
    <>
      <div>
        <OurMissionCommon
          abimg={"/assetes/img/png/dog-cat.png"}
          h4Class={"!text-[#D7D9DD]"}
          title={"Our Mission"}
          para={
            "Our Mission is to establish a new standard of excellence in veterinary care, driven by an unwavering ethical conscience."
          }
          bookbtn={"BOOK NOW"}
        />
      </div>
    </>
  );
}

export default OurMission;
