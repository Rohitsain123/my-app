import Footer from '@/component/common/Footer'
import Navbar from '@/component/common/Navbar'
import Exam from '@/component/pages/animal/Exam'
import Experince from '@/component/pages/animal/Experince'
import Why from '@/component/pages/animal/Why'
import Hero from '@/component/pages/services/Hero'
import React from 'react'

function page() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Exam/>
    <Why/>
    <Experince/>
    <Footer/>
    </>
  )
}

export default page