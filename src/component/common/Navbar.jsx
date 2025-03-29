"use client";
import Booklink from "@/component/common/Booklink";
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
      <div className="relative z-[999]">
        <div className="bg-[#494336] py-3">
          <div className="max-w-[1440px] px-[32px] sm:px-[50px] mx-auto">
            <div className="flex items-center justify-between">
              <div className="max-w-[90px] md:max-w-[120px]">
                <Image
                  src={"/assetes/img/png/cat.png"}
                  width={120}
                  height={70}
                  alt="Logo"
                />
              </div>
              <ul className="list-none justify-between lg:flex gap-[20px] xl:gap-[40px] hidden align-center">
                {navLink.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.path}
                      className="text-white uppercase Roboto-font text-sm hover:text-transparent bg-clip-text bg-gradient-to-r from-[#FFA280] to-[#8FD9CB] duration-300 font-medium tracking-[1.4px]"
                    >
                      {item.link}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href={"/"}
                    className="text-lg font-medium rounded-[27px] text-[#494336] py-2 sm:py-3 px-6 sm:px-8 lg:px-[38px] bg-[linear-gradient(90deg,#FFA280_0%,#8FD9D9_100%)] hover:shadow-lg !shadow-slate-500/60 duration-300 hover:scale-[1.02]"
                  >
                    BOOK NOW
                  </Link>
                </li>
              </ul>
              <div onClick={toggle} className="lg:hidden">
                <Image
                  src={"/assetes/img/png/sidebar-logo.png"}
                  width={50}
                  height={30}
                  alt="Sidebar Logo"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        {show && (
          <div
            className={
              "fixed top-0 right-0 h-screen w-[100%] sm:w-[60%] bg-[#494336] transition-transform transform ease-in-out"
            }
            style={{ transform: show ? "translateX(0)" : "translateX(100%)" }}
          >
            <div className="flex justify-between items-center px-8 pt-3">
              <div className="w-full max-w-[90px] md:max-w-[120px]">
                <Link href="/dental">
                  <Image
                    src={"/assetes/img/png/cat.png"}
                    width={90}
                    height={70}
                    alt="Logo"
                  />
                </Link>
              </div>
              <div
                onClick={toggle}
                className="rotate-225 cursor-pointer pl-[20px] "
              >
                <PlusIcon />
              </div>
            </div>
            <ul className="pt-6 text-center flex flex-col gap-3 px-12">
              {navLink.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.path}
                    className="text-[#fff] text-sm md:text-base lg:text-lg"
                  >
                    {item.link}
                  </Link>
                </li>
              ))}
              <Booklink booklink={"BOOK NOW"} />
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default page;
