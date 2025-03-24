import Image from "next/image";
import React from "react";

function Team() {
  return (
    <>
      <div className="bg-[#494336] py-[60px] lg:py-[80px]">
        <div className="max-w-[1440px] mx-auto px-[32px] md:px-[50px]">
          <h2 className="text-[32px] sm:text-[40px] text-center lg:text-[70px] avantt  text-[#D7D9DD] leading-[90%]">
            Meet our veterinary team:
          </h2>
          <div className="mt-[65px] flex justify-center flex-wrap gap-[10px] mx-auto">
            <div className="max-w-[114px] lg:max-w-[220px] flex flex-col text-center ">
              <div>
                <Image
                  src={"/assetes/img/png/Ellipse 1.png"}
                  width={190}
                  height={100}
                  alt={"ellipse"}
                />
              </div>
              <p className="text-[#D7D9DD] text-sm md:text-base lg:text-xl mt-[42px]">
                Dr. Daniel Hodnett-Lewis Chief Veterinary Officer
              </p>
            </div>
            <div className="max-w-[114px] lg:max-w-[216px] flex flex-col text-center ">
              <div>
                <Image
                  src={"/assetes/img/png/Ellipse 1.png"}
                  width={190}
                  height={100}
                  alt={"ellipse"}
                />
              </div>
              <p className="text-[#D7D9DD] text-sm md:text-base lg:text-xl mt-[42px]">
                Dr. Jane Doe Veterinarian
              </p>
            </div>
            <div className="max-w-[114px] lg:max-w-[216px] flex flex-col text-center ">
              <div>
                <Image
                  src={"/assetes/img/png/Ellipse 1.png"}
                  width={190}
                  height={100}
                  alt={"ellipse"}
                />
              </div>
              <p className="text-[#D7D9DD] text-sm md:text-base lg:text-xl mt-[42px]">
                Dr. Jane Doe Veterinarian
              </p>
            </div>
            <div className="max-w-[114px] lg:max-w-[216px] flex flex-col text-center ">
              <div>
                <Image
                  src={"/assetes/img/png/Ellipse 1.png"}
                  width={190}
                  height={100}
                  alt={"ellipse"}
                />
              </div>
              <p className="text-[#D7D9DD] text-sm md:text-base lg:text-xl mt-[42px]  hidden md:flex">
                Dr. Jane Doe Veterinarian
              </p>
              <p className="text-[#D7D9DD] text-sm md:text-base lg:text-xl mt-[42px] md:hidden flex">
                Dr. Daniel Hodnett-Lewis Chief Veterinary Officer
              </p>
            </div>
            <div className="max-w-[114px] lg:max-w-[216px] flex flex-col text-center ">
              <div>
                <Image
                  src={"/assetes/img/png/Ellipse 1.png"}
                  width={190}
                  height={100}
                  alt={"ellipse"}
                />
              </div>
              <p className="text-[#D7D9DD] text-sm md:text-base lg:text-xl mt-[42px]  hidden md:flex">
                Dr. Jane Doe Veterinarian
              </p>
              <p className="text-[#D7D9DD] text-sm md:text-base lg:text-xl mt-[42px] md:hidden flex">
                Dr. Daniel Hodnett-Lewis Chief Veterinary Officer
              </p>
            </div>
            <div className="max-w-[114px] lg:max-w-[216px] flex flex-col text-center ">
              <div>
                <Image
                  src={"/assetes/img/png/Ellipse 1.png"}
                  width={190}
                  height={100}
                  alt={"ellipse"}
                />
              </div>
              <p className="text-[#D7D9DD] text-sm md:text-base lg:text-xl mt-[42px]">
                Dr. Jane Doe Veterinarian
              </p>
            </div>
          </div>
          <div className="mt-[45px] flex justify-center">
            <a
              className="text-[#494336] text-lg font-medium bg-[white] py-2 px-[20px] lg:px-[37px] rounded-[27px] bg-gradient-to-r from-[#FFA280]  to-[#8FD9D9] hover:from-[#8FD9D9] hover:to-[#FFA280] duration-300 transition roboto ms-8 "
              href="./Animal-health-check.html"
            >
              BOOK NOW
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
