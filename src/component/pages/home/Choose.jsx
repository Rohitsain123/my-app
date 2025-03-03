import Image from 'next/image'
import React from 'react'

function Choose() {
  return (
    <>
    <div className='bg-[#494336] py-[60px] lg:py-[80px]'>
         <div className='max-w-[1440px] px-[32px] sm:px-[80px] lg:px-[120px] xl:px-[180px] mx-auto'>
            <h4 className='text-[#D7D9DD] text-2xl md:text-4xl lg:text-5xl'>Why choose Nebula Vets?</h4>
            <div className='flex flex-wrap md:flex-nowrap gap-[70px] mt-[10px] md:mt-[45px]'>
                    <div className="mt-[59px] max-w-[600px] w-full">
                        <div className="flex justify-between pb-[32px]">
                            <h5 className="text-base md:text-xl lg:text-2xl text-[#D7D9DD] ">Cutting-Edge Technology</h5>
                            <div className="max-w-[24px] sm:max-w-[30px]    ">
                                <Image src={"/assetes/img/png/plus.png"} width={30} height={30} alt={"plus"}/>
                            </div>
                        </div>
                        <div className="w-full h-0.5 bg-linear-65 from-[#FFA280] to-[#8FD9D9]"></div>
                        <div className="flex justify-between pb-[32px] mt-[32px]">
                            <h5 className="text-base md:text-xl lg:text-2xl text-[#D7D9DD] ">Independant</h5>
                            <div className="max-w-[24px] sm:max-w-[30px]    ">
                                <Image src={"/assetes/img/png/plus.png"} width={30} height={30} alt={"plus"}/>
                            </div>
                        </div>
                        <div className="w-full h-0.5 bg-linear-65 from-[#FFA280] to-[#8FD9D9]"></div>
                        <div className="flex justify-between pb-[32px] mt-[32px]">
                            <h5 className="text-base md:text-xl lg:text-2xl text-[#D7D9DD] ">Progressive Medicine</h5>
                            <div className="max-w-[24px] sm:max-w-[30px]    ">
                                <Image src={"/assetes/img/png/plus.png"} width={30} height={30} alt={"plus"}/>
                            </div>
                        </div>
                        <div className="w-full h-0.5 bg-linear-65 from-[#FFA280] to-[#8FD9D9]"></div>
                    </div>
                    <div className="mt-[-32px] md:mt-[59px] max-w-[600px] w-full">
                        <div className="flex justify-between pb-[32px]">
                            <h5 className="text-base md:text-xl lg:text-2xl text-[#D7D9DD] ">Environmentally conscious​</h5>
                            <div className="max-w-[24px] sm:max-w-[30px]    ">
                                <Image src={"/assetes/img/png/plus.png"} width={30} height={30} alt={"plus"}/>
                            </div>
                        </div>
                        <div className="w-full h-0.5 bg-linear-65 from-[#FFA280] to-[#8FD9D9]"></div>
                        <div className="flex justify-between pb-[32px] mt-[32px]">
                            <h5 className="text-base md:text-xl lg:text-2xl text-[#D7D9DD] ">Expert Team</h5>
                            <div className="max-w-[24px] sm:max-w-[30px]    ">
                                <Image src={"/assetes/img/png/plus.png"} width={30} height={30} alt={"plus"}/>
                            </div>
                        </div>
                        <div className="w-full h-0.5 bg-linear-65 from-[#FFA280] to-[#8FD9D9]"></div>
                        <div className="flex justify-between pb-[32px] mt-[32px]">
                            <h5 className="text-base md:text-xl lg:text-2xl text-[#D7D9DD] ">Education</h5>
                            <div className="max-w-[24px] sm:max-w-[30px]    ">
                                <Image src={"/assetes/img/png/plus.png"} width={30} height={30} alt={"plus"}/>
                            </div>
                        </div>
                        <div className="w-full h-0.5 bg-linear-65 from-[#FFA280] to-[#8FD9D9]"></div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Choose