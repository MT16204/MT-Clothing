import React from 'react'
import { assets } from '../assets/assets'
import Button from './Button'

const Hero = () => {
  return (
    <div className='relative flex items-center justify-start border border-gray-50 overflow-hidden h-[600px] sm:h-[400px]'>
      {/* Background Image */}
      <img
        className='absolute inset-0 w-full h-full object-cover object-[0px_-120px]'
        src={assets.hero_img2}
        alt='Hero Background'
      />
      {/* Content */}
      <div className='relative w-full sm:w-1/2 flex flex-col justify-center items-start pl-8 sm:pl-16'>
        <div className='flex items-center gap-2'>
          <p className='w-7 md:w-11 h-[1px] bg-[#4f4e4e]'></p>
          <p className='prata-regular text-sm md:text-base text-[#4f4e4e]'> EXPLORE OUR COLLECTION </p>
        </div>
        <h1 className='text-3xl sm:py-3 lg:text-5xl leading-relaxed text-[#fff] font-bold drop-shadow-md'> Latest Collection </h1>
        <div className='flex items-center gap-2'>
          {/* SHOP NOW Button */}
          <Button />
          <p className='w-8 md:w-11 h-[1px] bg-[#4f4e4e]'></p>
        </div>
      </div>
    </div>
  )
}

export default Hero
