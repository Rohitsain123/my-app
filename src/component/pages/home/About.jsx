import Booklink from '@/component/common/Booklink'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function About() {
  return (
    <>
    <div className='bg-[rgba(240,240,240,0.5);] py-[60px] lg:py-[80px]'>
         <div className='max-w-[1440px] px-[32px] sm:px-[50px] lg:px-[70px] mx-auto'>
            <div className='flex items-center gap-[50px] lg:gap-[70px] flex-wrap lg:flex-nowrap justify-center'>
                <div>
                    <Image src={"/assetes/img/png/cat-dog.png"} width={591} height={550} alt={"cat-dog"}/>
                </div>
                <div className='max-w-[650px]'>
                    <h4 className='text-2xl md:text-3xl lg:text-5xl text-[#494336]'>About Nebula Vets ?</h4>
                    <p className='text-sm md:text-base lg:text-xl mt-[15px] lg:mt-[25px] text-[#494336]'>Founded on a strong set of core values, the story of Nebula Vets began with Daniel Hodnett-Lewis, a visionary veterinary surgeon from England, UK. Fueled by a deep passion for animals and a desire to elevate the standard of care, Daniel embarked on a mission to create a veterinary practice that would revolutionize the way pets are treated and cared for. Here's the story of Nebula Vets:</p>
                    <Booklink booklink={"BOOK NOW"}/>
                </div>
            </div>
         </div>
    </div>
    </>
  )
}

export default About