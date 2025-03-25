import Link from "next/link";
import React from "react";

function Care() {
  return (
    <>
      <div className="bg-[#494336] py-[60px] lg:py-[80px]">
        <div className="max-w-[1440px] px-[32px] sm:px-[50px] md:px-[80px] lg:px-[100px] mx-auto">
          <div className="flex flex-wrap gap-[25px] justify-between">
            <Link
              href={""}
              className="text-2xl md:text-3xl lg:text-4xl text-[rgba(217,217,217,0.50);] hover:[#D7D9DD]"
            >
              Preventive Care
            </Link>
            <Link
              href={""}
              className="text-2xl md:text-3xl lg:text-4xl text-[rgba(217,217,217,0.50);] hover:[#D7D9DD]"
            >
              Sick Patient Care
            </Link>
            <Link
              href={""}
              className="text-2xl md:text-3xl lg:text-4xl text-[rgba(217,217,217,0.50);] hover:[#D7D9DD]"
            >
              Surgery
            </Link>
            <Link
              href={""}
              className="text-2xl md:text-3xl lg:text-4xl text-[rgba(217,217,217,0.50);] hover:[#D7D9DD]"
            >
              Additional Services
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Care;
