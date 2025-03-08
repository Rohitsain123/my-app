import OurMissionCommon from "@/component/common/OurMissionCommon";
import React from "react";

function Forword() {
  return (
    <>
      <OurMissionCommon
        abimg={"/assetes/img/png/line4.png"}
        title={"We look forward to seeing you and your pet soon!"}
        para={
          "If you have any questions or concerns about vaccinations or would like to schedule an appointment for your pet, please contact our friendly team at [Your Veterinary Practice]. We are here to provide your furry family members with the highest standard of care and protection through our comprehensive vaccination services."
        }
        bookbtn={"BOOK NOW"}
      />
    </>
  );
}

export default Forword;
