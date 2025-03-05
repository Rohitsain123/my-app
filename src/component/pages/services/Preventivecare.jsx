import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Preventivecare() {
  return (
    <>
    <div className='max-w-[1440px] w-[100%] mx-auto'>
        <div className='flex-col md:flex-row flex '> 
            <div className='w-[100%] md:w-[43%] '>
                <div className='bg-[#fff] pt-[60px] lg:pt[80px]  '>
                    <div className='pl-[32px] sm:pl-[40px] md:pl-[50px] lg:pl-[72px] pr-[32px]'>
                        <div className='ms-[-30px] max-w-[218px] md:max-w-[376px]'>
                            <Image src={"/assetes/img/png/map-icon.png"} width={376} height={304} alt={"map"} />
                        </div>
                        <h5 className='text-[32px] md:text-4xl lg:text-5xl text-[#494336]'>Preventive Care</h5>
                        <p className='text-base md:text-xl lg:text-2xl roboto'>Your pet's well-being at the forefront of our practice.</p>
                        <p className='text-sm md:text-base lg:text-xl mt-[25px]'>At Nebula Vets, we take a proactive approach to your pet's healthcare, prioritizing their well-being and aiming to maximize their quality of life. We believe in the importance of preventive medicine and early detection of potential health issues. By implementing regular wellness check-ups and comprehensive screenings, we can identify and address any problems at their earliest stages.</p>
                        <div className='mt-[25px] lg:mt-[45px]'>
                        <Link href={'/'} className='text-base md:text-lg font-medium rounded-[27px] text-[#494336] py-2 sm:py-3  px-6 sm:px-8 lg:px-[38px] bg-[linear-gradient(90deg,#FFA280_0%,#8FD9D9_100%)] hover:shadow-lg !shadow-slate-500/60  duration-300 hover:scale-[1.02] inline-block' >BOOK NOW</Link>
                    </div>
                    </div>
                </div>
            </div>
            <div className='w-[100%] md:w-[57%]'>
                <div className='bg-[#D7D9DD] py-[60px] lg:py-[80px] mt-[60px] md:mt-[0px]'>
                    <div className='ps-[32px] sm:ps-[40px] md:ps-[60px] lg:ps-[115px] pe-[33px]'>
                        <div className='max-w-[660px] border-b pb-[60px]'>
                            <h4 className='text-base md:text-xl lg:text-[28px] text-[#494336] roboto'>Animal Health Check</h4>
                            <p className='text-sm md:text-lg lg:text-xl mt-[25px]'>Our practice offers the convenience of same or next-day appointments to ensure your furry companion receives prompt diagnostic evaluation and treatment. Our dedicated team prioritizes swift action, allowing us to quickly identify the issue at hand and provide the necessary care your pet requires.
                            </p>        
                            <div className='mt-[25px] lg:mt-[45px]'>
                              <Link href={'/'} className='text-base md:text-lg font-medium rounded-[27px] text-[#494336] py-2 sm:py-3  px-6 sm:px-8 lg:px-[38px] bg-[linear-gradient(90deg,#FFA280_0%,#8FD9D9_100%)] hover:shadow-lg !shadow-slate-500/60  duration-300 hover:scale-[1.02] inline-block'>LEARN MORE  </Link>
                            </div>            
                        </div>     
                         <div className='max-w-[660px] border-b pb-[60px] mt-[60px]'>
                            <h4 className='text-base md:text-xl lg:text-[28px] text-[#494336] roboto'>Vaccinations</h4>
                            <p className='text-sm md:text-lg lg:text-xl mt-[25px]'>Vaccinations are a key component of your pet’s health and essential to prevent life-threatening diseases. Nebula vets offer's all the core and non-core vaccines your pet might need.
                            </p>        
                            <div className='mt-[25px] lg:mt-[45px]'>
                              <Link href={'/'} className='text-base md:text-lg font-medium rounded-[27px] text-[#494336] py-2 sm:py-3  px-6 sm:px-8 lg:px-[38px] bg-[linear-gradient(90deg,#FFA280_0%,#8FD9D9_100%)] hover:shadow-lg !shadow-slate-500/60  duration-300 hover:scale-[1.02] inline-block'>LEARN MORE  </Link>
                            </div>            
                        </div>
                        <div className='max-w-[660px] border-b pb-[60px] mt-[60px]'>
                            <h4 className='text-base md:text-xl lg:text-[28px] text-[#494336] roboto'>Dentals</h4>
                            <p className='text-sm md:text-lg lg:text-xl mt-[25px]'>Dental disease and smelly breath is common, and regular cleanings and exams can save your pet a lot of pain and disease later in life. Our advanced state-of-the-art dental suite is equipped for dental cleanings (scale and polish), extractions and any other care your pet may need.
                            </p>        
                            <div className='mt-[25px] lg:mt-[45px]'>
                              <Link href={'/'} className='text-base md:text-lg font-medium rounded-[27px] text-[#494336] py-2 sm:py-3  px-6 sm:px-8 lg:px-[38px] bg-[linear-gradient(90deg,#FFA280_0%,#8FD9D9_100%)] hover:shadow-lg !shadow-slate-500/60  duration-300 hover:scale-[1.02] inline-block'>LEARN MORE  </Link>
                            </div>            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Preventivecare