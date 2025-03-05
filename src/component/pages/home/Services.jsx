import Booklink from '@/component/common/Booklink'
import Link from 'next/link'
import React from 'react'

function Services() {
  return (
    <>
    <div className='bg-[#fff] py-[60px] lg:py-[80px]'>
        <div className='max-w-[1440px] px-[32px] sm:px-[80px] lg:px-[120px] xl:px-[180px] mx-auto'>
            <div>
                <h4 className='text-2xl md:text-3xl lg:text-5xl text-[#494336]'>Our Services</h4>
                <p className='text-sm md:text-base lg:text-xl text-[#494336] max-w-[770px] mt-[25px]'>We are proud to offer a comprehensive range of exceptional clinical services to cater to all your pet's needs. From routine wellness health checks to prompt and efficient urgent care, our team is here to provide the highest level of support and assistance. Count on us to be there for you and your beloved companion every step of the way.</p>
              <Booklink booklink={"LEARN MORE"}/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Services