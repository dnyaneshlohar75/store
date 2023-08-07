
import Image from 'next/image';
import React from 'react'

const Hero = async () => {
    
    const banner_1 = require('@/public/banner-1.jpg')
    const banner_2 = require('../../../public/banner-2.jpg')
    const banner_3 = require('../../../public/banner-3.jpg')
    const banner_4 = require('../../../public/banner-4.jpg')
    const banner_5 = require('../../../public/banner-5.jpg')
  return (
    <section className='grid md:grid-cols-3 gap-5'>
        <Image className='w-full h-full col-span-2' src={banner_1} objectFit='cover' alt="banner-1" />
        <div className='hidden md:grid grid-cols-2 gap-5'>
          <Image className='w-full h-full' src={banner_2} objectFit='cover' alt="banner-2" />
          <Image className='w-full h-full' src={banner_3} objectFit='cover' alt="banner-3" />
          <Image className='w-full h-full' src={banner_4} objectFit='cover' alt="banner-4" />
          <Image className='w-full h-full' src={banner_5} objectFit='cover' alt="banner-5" />
        </div>
    </section>
  )
}

export default Hero;