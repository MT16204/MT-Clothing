import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import Button from '../components/Button'

const AboutComps = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img_01} alt=""/>
        <div className='flex flex-col justify-center gap-6 text-lg md:w-2/4'>
            <p className='font-light'>
              Welcome to MINH TUAN - Clothing, your one-stop e-commerce destination for high-quality clothing designed. 
              From timeless classics to modern trends.
            </p>
        </div>
      </div>

      <div className='text-2xl text-center'>
          <Title text1={'WHY CHOOSE US?'}/>
      </div>

      <div className='my-20 flex flex-col md:flex-row-reverse gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img_02} alt=""/>
        <div className='flex flex-col justify-center gap-6 text-lg md:w-2/4'>
            <b>With our chic textile lines, discover modern elegance</b>
            <p className='font-light'>
              At MINH TUAN, we believe that fashion is more than just clothing—it’s a way to express individuality and connect with the world. 
            </p>
            <p className='font-light'>
              Founded with a vision to create timeless, high-quality pieces, MINH TUAN has evolved into a brand known for craftsmanship.
            </p>
            <div><Button/></div>
        </div>
      </div>

      <div className='my-20 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img_03} alt=""/>
        <div className='flex flex-col justify-center gap-6 text-lg md:w-2/4'>
            <b>Every item is meticulously made by hand and has a distinct design</b>
            <p className='font-light'>
            Our mission at MINH TUAN is to redefine what it means to wear modern fashion.
            We aim to craft stylish, durable pieces that make a lasting impression while minimizing environmental impact.</p>
            <div><Button/></div>
        </div>
      </div>
    </div>
  )
}

export default AboutComps