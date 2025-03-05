import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Surgery() {
  return (
    <>
     <div className='max-w-[1440px] w-[100%] mx-auto'>
        <div className='flex-col md:flex-row flex '> 
            <div className='w-[100%] md:w-[43%] '>
                <div className='bg-[#fff] mt-[120px] md:mt-[-60px]'>
                    <div className='pl-[32px] sm:pl-[40px] md:pl-[50px] lg:pl-[72px] pr-[32px]'>
                        <div className='ms-[-30px] max-w-[218px] md:max-w-[376px]'>
                            <Image src={"/assetes/img/png/bandage.png"} width={376} height={304} alt={"map"} />
                        </div>
                        <h5 className='text-[32px] md:text-4xl lg:text-5xl text-[#494336] mt-[-30px] md:mt-[90px]'>Sick Patient Care</h5>
                        <p className='text-base md:text-xl lg:text-2xl roboto mt-[10px] md:mt-[25px]'>Delivering exceptional care for sick patients, combining the virtues of efficiency and expertise </p>
                        <p className='text-sm md:text-base lg:text-xl mt-[25px]'>At Nebula Vets, we are fully equipped with advanced diagnostic tools and a wide range of treatment options to address any health issue your pet may be facing. Our commitment to comprehensive care means that we have the expertise and resources to provide accurate diagnoses and effective treatments.</p>
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
                            <h4 className='text-base md:text-xl lg:text-[28px] text-[#494336] roboto'>Urgent & Emergency Care</h4>
                            <p className='text-sm md:text-lg lg:text-xl mt-[25px]'>Whether your pet is sick or injured, we’re here to help get them the help they need. This includes telemedicine veterinary consults if you are unsure, and overnight care for 24-hour treatment.
                            </p>        
                            <div className='mt-[25px] lg:mt-[45px]'>
                              <Link href={'/'} className='text-base md:text-lg font-medium rounded-[27px] text-[#494336] py-2 sm:py-3  px-6 sm:px-8 lg:px-[38px] bg-[linear-gradient(90deg,#FFA280_0%,#8FD9D9_100%)] hover:shadow-lg !shadow-slate-500/60  duration-300 hover:scale-[1.02] inline-block'>LEARN MORE  </Link>
                            </div>            
                        </div>     
                         <div className='max-w-[660px] border-b pb-[60px] mt-[60px]'>
                            <h4 className='text-base md:text-xl lg:text-[28px] text-[#494336] roboto'>Telemedicine consults</h4>
                            <p className='text-sm md:text-lg lg:text-xl mt-[25px]'>Nebula vets offers a fast telemedicine service, to help your pet without leaving the home
                            </p>        
                            <div className='mt-[25px] lg:mt-[45px]'>
                              <Link href={'/'} className='text-base md:text-lg font-medium rounded-[27px] text-[#494336] py-2 sm:py-3  px-6 sm:px-8 lg:px-[38px] bg-[linear-gradient(90deg,#FFA280_0%,#8FD9D9_100%)] hover:shadow-lg !shadow-slate-500/60  duration-300 hover:scale-[1.02] inline-block'>LEARN MORE  </Link>
                            </div>            
                        </div>
                        <div className='max-w-[660px] border-b pb-[60px] mt-[60px]'>
                            <h4 className='text-base md:text-xl lg:text-[28px] text-[#494336] roboto'>Diagnostics</h4>
                            <p className='text-sm md:text-lg lg:text-xl mt-[25px]'>Nebula vets has invested in the latest technology, equipped for all the diagnostic tests your pet needs to stay healthy, and to treat those that get sick. We’re able to run tests quickly in-house in situations where a rapid diagnosis is required and offer artificialintelligence alongside veterinary experts.
                            </p>        
                            <div className='mt-[25px] lg:mt-[45px]'>
                              <Link href={'/'} className='text-base md:text-lg font-medium rounded-[27px] text-[#494336] py-2 sm:py-3  px-6 sm:px-8 lg:px-[38px] bg-[linear-gradient(90deg,#FFA280_0%,#8FD9D9_100%)] hover:shadow-lg !shadow-slate-500/60  duration-300 hover:scale-[1.02] inline-block'>LEARN MORE  </Link>
                            </div>            
                        </div>  <div className='max-w-[660px] border-b pb-[60px] mt-[60px]'>
                            <h4 className='text-base md:text-xl lg:text-[28px] text-[#494336] roboto'>Pharmacy</h4>
                            <p className='text-sm md:text-lg lg:text-xl mt-[25px]'>Our highly stocked on-site pharmacy inlcudes a variety of prescription medications and pet health products for your pet. If a particular medication is unavailable, our compounding pharmacy can have it delivered to you within 24 hours.
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

export default Surgery