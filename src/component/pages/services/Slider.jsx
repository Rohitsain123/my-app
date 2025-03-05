import Image from 'next/image'
import React from 'react'

function Slider() {
  return (
    <>
    <div className='bg-[#D7D9DD] py-[60px] lg:py-[80px]'>
        <div className='swiper mySwiper'>
            <div className='swiper-wrapper flex gap-[20px]'>
                 <div className='swiper-slide'>
                    <div>
                        <Image src={"/assetes/img/png/dog5.png"} width={381} height={420} alt={"dog"} />
                    </div>
                 </div>
                 <div className='swiper-slide'>
                    <div>
                        <Image src={"/assetes/img/png/dog6.png"} width={420} height={420} alt={"dog"} />
                    </div>
                 </div>
                 <div className='swiper-slide'>
                    <div>
                        <Image src={"/assetes/img/png/cat-dog.png"} width={422} height={450} alt={"dog"}/>
                    </div>
                 </div>
                 <div className='swiper-slide'>
                    <div>
                        <Image src={"/assetes/img/png/dog7.png"} width={420} height={420} alt="dog" />
                    </div>
                 </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Slider