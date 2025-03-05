import Booklink from '@/component/common/Booklink'
import Mainheading from '@/component/common/Mainheading'
import Para from '@/component/common/Para'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Hero() {
  return (
    <>
        <div className='bg-[url("/assetes/img/png/hero.png")] bg-cover hidden md:block'>
            <div className='max-w-[1440px] px-[32px] sm:px-[80px] lg:px-[120px] xl:px-[180px] mx-auto'>
                <div className=' pt-[250px] lg:pt-[200px] pb-[60px] lg:pb-[85px]'>
                <Mainheading mainheading={"Welcome to Nebula Vets"}/>
                     <Para para={"Reinventing Pet Medicine"}/>
                    <div className='mt-[25px] lg:mt-[45px]'>
                        <Link href={'/'} className='text-lg font-medium rounded-[27px] text-[#494336] py-2 sm:py-3  px-6 sm:px-8 lg:px-[38px] bg-[linear-gradient(90deg,#FFA280_0%,#8FD9D9_100%)] hover:shadow-lg !shadow-slate-500/60  duration-300 hover:scale-[1.02]' >BOOK NOW</Link>
                    </div>
                </div>
            </div>
        </div>
        <div className='bg-[rgba(215,217,221,0.50);] pt-[150px] pb-[60px]cblock md:hidden'>
            <div className='max-w-[1440px] px-[32px] sm:px-[80px] lg:px-[120px] mx-auto'>
              <div>
                  <h1 className='text-4xl md:text5xl lg:text-[70px] text-[#494336] max-w-[511px]'>Welcome to Nebula Vets</h1>
               <Para para={"Reinventing Pet Medicine"}/>
                <Booklink booklink={"BOOK NOW"}/>
              </div> 
            </div>
            <div className='w-full'>
                <Image className='w-full' src={"/assetes/img/png/res-hero.png"} width={800} height={300} alt={"hero"}/>
            </div>
        </div>
    </>
  )
}

export default Hero