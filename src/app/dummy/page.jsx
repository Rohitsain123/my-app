"use client";
import { PlusIcon } from "@/component/helper/Icon";
import React, { useState } from "react";

function page() {
  const [show, setShow] = useState(false);
  function toggle() {
    setShow(!show);
  }

  return (
    <>
      <div className="py-50 px-10">
        <div className="border-b-[2px] pb-8">
          <div className="flex items-center justify-between ">
            <p className="text-xl">Lorem ipsum dolor sit.</p>
            <div
              onClick={toggle}
              className={`transform transition-transform duration-300 ${show} ? "rotate-45" : ""`}
            >
              <PlusIcon />
            </div>
          </div>
          {show && (
            <div className="mt-4">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default page;
