import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Booklink from './Booklink'
import { NavbarLogo, NavbarLogoIcon } from '../helper/Icon'
import { navLink } from '../helper/Helper'

function Navbar() {
  return (
    <>
            <div className="bg-[#494336] fixed left-0 z-[11] right-0 top-0">
                <div className="max-w-[1440px]  max-[360px]:px-4 px-8 md:px-10 xl:px-[50px] mx-auto">
                    <div className="justify-between items-center flex  pb-[18px] pt-[15px] sm:pt-[11px]">
                        <div><Link href={"/"} className="block max-w-[90px] sm:max-w-[114px]">
                        <NavbarLogoIcon/>
                        </Link></div>
                        <div>
                            <ul className="list-none justify-between lg:flex gap-[40px] hidden aligin-center">
                               {navLink.map((item,index)=>(<li key={index}><Link  href={item.path}
                                        className="text-white uppercase Roboto-font text-sm hover:text-transparent bg-clip-text bg-gradient-to-r from-[#FFA280] to-[#8FD9CB] duration-300 duration-300 font-medium tracking-[1.4px]">{item.link}</Link>
                                </li>))}
                                <li>
                                    <Link href={'/'} className='text-lg font-medium rounded-[27px] text-[#494336] py-2 sm:py-3  px-6 sm:px-8 lg:px-[38px] bg-[linear-gradient(90deg,#FFA280_0%,#8FD9D9_100%)] hover:shadow-lg !shadow-slate-500/60  duration-300 hover:scale-[1.02]' >BOOK NOW</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Navbar