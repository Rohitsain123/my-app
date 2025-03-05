import Image from 'next/image'
import React from 'react'

function Why() {
  return (
    <> 
    <div className='bg-[#fff] py-[60px] lg:py-[80px]'>
        <div className='max-w-[1440px] px-[32px] sm:px-[80px] lg:px-[120px] xl:px-[180px] mx-auto'>
            <div>
                <h5 className='text-2xl md:text-3xl lg:text-4xl text-[#494336]'>Why Animal Health Checks Matter:</h5>
                <div className='flex justify-between mt-[45px] pb-[32px]'>
                    <h5 className='text-base md:text-lg lg:text-2xl text-[#494336]'>Early Detection and Prevention</h5>
                    <Image src={"/assetes/img/png/plus.png"} width={30} height={30} alt="plus" />
                </div>
                <div className="w-full h-1 bg-linear-65 from-[#FFA280] to-[#8FD9D9]"></div>
                <div className='flex justify-between mt-[45px] pb-[32px]'>
                    <h5 className='text-base md:text-lg lg:text-2xl text-[#494336]'>Tailored Care for Different Life Stages</h5>
                    <Image src={"/assetes/img/png/plus.png"} width={30} height={30} alt="plus" />
                </div>
                <div className="w-full h-1 bg-linear-65 from-[#FFA280] to-[#8FD9D9]"></div> 
                <div className='flex justify-between mt-[45px] pb-[32px]'>
                    <h5 className='text-base md:text-lg lg:text-2xl text-[#494336]'>Comprehensive Physical Examinations</h5>
                    <Image src={"/assetes/img/png/plus.png"} width={30} height={30} alt="plus" />
                </div>
                <div className="w-full h-1 bg-linear-65 from-[#FFA280] to-[#8FD9D9]"></div> 
                <div className='flex justify-between mt-[45px] pb-[32px]'>
                    <h5 className='text-base md:text-lg lg:text-2xl text-[#494336]'>Vaccinations and Preventive Care</h5>
                    <Image src={"/assetes/img/png/plus.png"} width={30} height={30} alt="plus" />
                </div>
                <div className="w-full h-1 bg-linear-65 from-[#FFA280] to-[#8FD9D9]"></div> 
                <div className='flex justify-between mt-[45px] pb-[32px]'>
                    <h5 className='text-base md:text-lg lg:text-2xl text-[#494336]'>Diagnostic Screenings</h5>
                    <Image src={"/assetes/img/png/plus.png"} width={30} height={30} alt="plus" />
                </div>
                <div className="w-full h-1 bg-linear-65 from-[#FFA280] to-[#8FD9D9]"></div>
                <div className='flex justify-between mt-[45px] pb-[32px]'>
                    <h5 className='text-base md:text-lg lg:text-2xl text-[#494336]'>Client Education and Support</h5>
                    <Image src={"/assetes/img/png/plus.png"} width={30} height={30} alt="plus" />
                </div>
                <div className="w-full h-1 bg-linear-65 from-[#FFA280] to-[#8FD9D9]"></div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Why