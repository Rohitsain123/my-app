import Image from 'next/image'
import React from 'react'

function Exam() {
  return (
    <>
    <div className='bg-[rgba(215,217,221,0.50);] pt-[60px lg:pt-[80px] pb-[120px] lg:pb-[140px] relative'>
       <div className='w-full absolute bottom-0'>
         <Image className='w-full' src={"/assetes/img/png/line2.png"} width={1440} height={450} alt="" />
       </div>
        <div className='max-w-[1440px] px-[32px] sm:px-[80px] lg:px-[120px] xl:px-[180px] mx-auto'>
            <div className='max-w-[1070px] w-full '>
                <h5 className='text-2xl md:text-3xl lg:text-4xl text-[#494336]'>Animal Health Check Exam</h5>
                <p className='text-sm md:text-lg lg:text-xl mt-[20px]'>During our animal health check, we perform a thorough examination tailored to the unique needs of each patient. Our goal is to assess your pet's overall health, detect any potential issues, and offer preventive measures to maintain their vitality. Whether your furry friend is young, mature, or a senior, our veterinary professionals have the expertise to address their specific requirements.</p>
                <p className='text-sm md:text-lg lg:text-xl mt-[20px]'>In addition to providing routine health checks, we offer a comprehensive range of services to ensure the well-being of your pets:</p>
                <p className='text-sm md:text-lg lg:text-xl'>-Vaccinations</p>
                <p className='text-sm md:text-lg lg:text-xl'>-Blood panels</p>   
                <p className='text-sm md:text-lg lg:text-xl'>-Parasitic prevention</p>   
                <p className='text-sm md:text-lg lg:text-xl'>-Microchipping</p>   
                <p className='text-sm md:text-lg lg:text-xl'>-Dental care</p>   
                <p className='text-sm md:text-lg lg:text-xl'>-Fecal tests</p>   
                <p className='text-sm md:text-lg lg:text-xl'>-Skin tests</p>
                <p className='text-sm md:text-lg lg:text-xl'>-Dietary advise</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Exam