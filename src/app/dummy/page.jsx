"use client";
import Para2 from "@/component/common/Para2";
import { accordianData } from "@/component/helper/Helper";
import { PlusIcon } from "@/component/helper/Icon";
import React, { useState } from "react";

function Page() {
  const [openIndex, setOpenIndex] = useState(null); // Keep track of the index of the opened accordion item

  function toggle(index) {
    // Toggle the open/close state of a specific accordion item based on its index
    if (openIndex === index) {
      setOpenIndex(null); // Close the accordion if it's already open
    } else {
      setOpenIndex(index); // Open the clicked accordion item
    }
  }

  return (
    <>
      <div className="py-50 px-10">
        {accordianData.map((item, index) => (
          <div className="border-b-[2px] pb-8 mt-4" key={index}>
            <div className="flex items-center justify-between">
              <Para2 para2={item.title} />
              <div
                onClick={() => toggle(index)} // Pass the index of the accordion item
                className={`transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-45" : ""
                }`}
              >
                <PlusIcon />
              </div>
            </div>
            {openIndex === index && (
              <div className="mt-4">
                <Para2 para2={item.para} />
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default Page;
