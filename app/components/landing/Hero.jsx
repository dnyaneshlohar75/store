'use client'
import React from 'react'
import Image from 'next/image';
import banner_1 from './../../../public/banner-1.jpg'
import banner_2 from './../../../public/banner-2.jpg'
import banner_3 from './../../../public/banner-3.jpg'
import banner_4 from './../../../public/banner-4.jpg'
import banner_5 from './../../../public/banner-5.jpg'
const Hero = async () => {
    
    
  return (
    <section className='grid md:grid-cols-3 gap-5'>
        <Image className='w-full h-full col-span-2' src={banner_1} objectFit='cover' alt="banner-1" />
        <div className='hidden md:grid grid-cols-2 gap-5'>
          <Image className='w-full h-full object-cover' src={banner_2} alt="banner-2" />
          <Image className='w-full h-full object-cover' src={banner_3} alt="banner-3" />
          <Image className='w-full h-full object-cover' src={banner_4} alt="banner-4" />
          <Image className='w-full h-full object-cover' src={banner_5} alt="banner-5" />
        </div>
    </section>
  )
}

export default Hero;