import Image from "next/image";
import React from "react";

function Slider() {
  return (
    <>
      <div className="bg-[#494336] pb-[60px] lg:pb-[80px]">
        <div className="swiper mySwiper">
          <div className="swiper-wrapper flex gap-4 ">
            <div className="swiper-slide">
              <div className="max-w-[428px]">
                <Image
                  className="w-full"
                  src={"/assetes/img/png/dog3.png"}
                  width={420}
                  height={380}
                  alt={""}
                />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="max-w-[428px]">
                <Image
                  className="w-full"
                  src={"/assetes/img/png/cat3.png"}
                  width={420}
                  height={380}
                  alt={""}
                />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="max-w-[428px]">
                <Image
                  className="w-full"
                  src={"/assetes/img/png/cat4.png"}
                  width={420}
                  height={380}
                  alt={""}
                />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="max-w-[428px]">
                <Image
                  className="w-full"
                  src={"/assetes/img/png/dog4.png"}
                  width={420}
                  height={380}
                  alt={""}
                />
              </div>
            </div>
          </div>
          <div className="mt-[0px] lg:mt-[50px]">
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Slider;
