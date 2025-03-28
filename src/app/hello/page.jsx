"use client";
import { navLink } from "@/component/helper/Helper";
import { PlusIcon } from "@/component/helper/Icon";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function page() {
  const [show, setShow] = useState(false);
  const toggle = () => {
    setShow(!show);
  };

  return (
    <>
      <div className="relative">
        <div className="bg-[#494336] py-3">
          <div className="max-w-[1440px] px-[32px] sm:px-[50px] mx-auto   z-[]">
            <div className="flex items-center justify-between">
              <div>
                <Image
                  src={"/assetes/img/png/cat.png"}
                  width={120}
                  height={70}
                  alt=""
                />
              </div>
              <ul className="list-none justify-between lg:flex gap-[20px] xl:gap-[40px] hidden aligin-center">
                {navLink.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.path}
                      className="text-white uppercase Roboto-font text-sm hover:text-transparent bg-clip-text bg-gradient-to-r from-[#FFA280] to-[#8FD9CB] duration-300 duration-300 font-medium tracking-[1.4px]"
                    >
                      {item.link}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href={"/"}
                    className="text-lg font-medium rounded-[27px] text-[#494336] py-2 sm:py-3  px-6 sm:px-8 lg:px-[38px] bg-[linear-gradient(90deg,#FFA280_0%,#8FD9D9_100%)] hover:shadow-lg !shadow-slate-500/60  duration-300 hover:scale-[1.02]"
                  >
                    BOOK NOW
                  </Link>
                </li>
              </ul>
              <div onClick={toggle} className="lg:hidden">
                <Image
                  src={"/assetes/img/png/sidebar-logo.png"}
                  width={60}
                  height={30}
                  alt={"sidebar"}
                />
              </div>
            </div>
          </div>
        </div>
        {show && (
          <div className="w-[60%] relative end-0 h-[100vh] bg-[#494336]">
            <div className="fixed z-[100009] top-0 end-0 h-[100vh]">
              <div className="flex justify-content items-center">
                <div className="w-full bg-[#494336] px-10 pt-[20]">
                  <Image
                    href={"/dental"}
                    src={"/assetes/img/png/cat.png"}
                    width={100}
                    height={90}
                    alt={"logo"}
                  />
                </div>
                <div
                  onClick={toggle}
                  className="pt-[60px]  bg-[#494336] pe-10 rotate-[45deg]"
                >
                  <PlusIcon />
                </div>
              </div>
              <ul className="pt-6 text-center flex flex-col gap-3 bg-[#494336] px-50">
                <li>
                  <p className="text-[#fff] text-xl">home</p>{" "}
                </li>
                <li>
                  <p className="text-[#fff] text-xl">home</p>{" "}
                </li>
                <li>
                  <p className="text-[#fff] text-xl">home</p>{" "}
                </li>
                <li>
                  <p className="text-[#fff] text-xl">home</p>
                </li>
                <li>
                  <p className="text-[#fff] text-xl">home</p>{" "}
                </li>
                <li>
                  <p className="text-[#fff] text-xl">home</p>{" "}
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default page;
