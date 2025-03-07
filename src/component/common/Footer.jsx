import Image from "next/image";
import Link from "next/link";
import React from "react";
import Booklink from "./Booklink";
import {
  FacebookIcon,
  FooterFacebook,
  FooterInsta,
  Footerlinkedin,
  InstaIcon,
} from "../helper/Icon";
import { footerIcon, footerlink } from "../helper/Helper";

function Footer() {
  return (
    <>
      <div className="bg-[#494336]  border-t-[2px] w-[100%] border-solid border-[#D8DADC]">
        <div className="max-w-[1364px] px-8 max-sm:pb-[111px] py-[60px] mx-auto">
          <div className="flex justify-between gap-10 max-[950px]:flex-wrap">
            <div className="max-w-[309px]">
              <label
                className="text-[#D7D9DD] text-base sm:text-lg md:text-xl lg:text-2xl mb-6 roboto-mono"
                htmlFor="email"
              >
                Stay in touch:
              </label>
              <input
                className="text-lg text-[#D7D9DD] py-[6px] px-[14px] border-[1px] border-solid border-[#D7D9DD] bg-[#494336] mt-6 w-full"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
              />
              <div className="flex gap-5 mt-[15px] md:mt-[22px]">
                {footerIcon.map((item, index) => (
                  <div key={index}>
                    <Link
                      className="hover:scale-[1.05] duration-200 "
                      href={item.path}
                      target="_blank"
                    >
                      {item.icon}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex max-sm:flex-wrap gap-y-[30px] max-sm:gap-x-[150px] max-md:gap-x-[100px] gap-x-[55px]">
              <div className="flex flex-col gap-[10px] md:gap-[30px]">
                <p className="Roboto-font text-[#D7D9DD] text-base sm:text-lg md:text-xl lg:text-2xl">
                  Services
                </p>
                <div className="flex flex-col gap-[7px]">
                  {footerlink.map((item, index) => (
                    <div key={index}>
                      <Link
                        className="text-[#D7D9DD] text-sm sm:text-base underline hover:text-transparent bg-clip-text bg-gradient-to-r from-[#FFA280] to-[#8FD9CB] duration-300"
                        href={item.path}
                      >
                        {item.title}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-[10px] md:gap-[30px]">
                <p className="Roboto-font text-[#D7D9DD] text-base sm:text-lg md:text-xl lg:text-2xl">
                  Company
                </p>
                <div className="flex flex-col gap-[7px]">
                  <Link
                    className="text-[#D7D9DD] text-sm sm:text-base underline hover:text-transparent bg-clip-text bg-gradient-to-r from-[#FFA280] to-[#8FD9CB] duration-300"
                    href={"/About.html"}
                  >
                    About us
                  </Link>
                  <Link
                    className="text-[#D7D9DD] text-sm sm:text-base underline hover:text-transparent bg-clip-text bg-gradient-to-r from-[#FFA280] to-[#8FD9CB] duration-300"
                    href={"/Join.html"}
                  >
                    Carreers
                  </Link>
                </div>
              </div>
              <div className="flex flex-col gap-[10px] md:gap-[30px] xl:ml-[57px] xl:mr-[145px]">
                <p className="Roboto-font text-[#D7D9DD] text-base sm:text-lg md:text-xl lg:text-2xl">
                  Contact Us
                </p>
                <div className="flex flex-col gap-[7px]">
                  <Link
                    className="text-[#D7D9DD] text-sm sm:text-base underline hover:text-transparent bg-clip-text bg-gradient-to-r from-[#FFA280] to-[#8FD9CB] duration-300"
                    href={"tel:+91 2121234567"}
                  >
                    Phone: (212) 123-4567
                  </Link>
                  <Link
                    className="text-[#D7D9DD] text-sm sm:text-base underline hover:text-transparent bg-clip-text bg-gradient-to-r from-[#FFA280] to-[#8FD9CB] duration-300"
                    href={"mailto:hello@gmail.com"}
                  >
                    hello@nebulavets.com
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
