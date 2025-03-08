import Link from "next/link";
import React from "react";

function Booklink({ booklink }) {
  return (
    <>
      <div className="mt-[25px] lg:mt-[45px]">
        <Link
          href={"/"}
          className="text-lg font-medium rounded-[27px] text-[#494336] py-2 sm:py-3  px-6 sm:px-8 lg:px-[38px] bg-[linear-gradient(90deg,#FFA280_0%,#8FD9D9_100%)] hover:shadow-lg !shadow-slate-500/60  duration-300 hover:scale-[1.02]"
        >
          {booklink}
        </Link>
      </div>
    </>
  );
}

export default Booklink;
