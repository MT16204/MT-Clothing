import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-12 text-center py-2 mt-32'>
        <div>
            <img src={assets.delivery_icon} alt="" className='w-12 m-auto mb-5 ' />
            <p className='font-medium gap-3 mb-5 text-[#4f4e4e]'>Fast Delivery</p>
            <p></p>
        </div>
        <div>
            <img src={assets.quality_icon} alt="" className='w-12 m-auto mb-5 ' />
            <p className='font-medium gap-3 mb-5 text-[#4f4e4e]'>7-Days Return Policy</p>
            <p></p>
        </div>
        <div>
            <img src={assets.support_img} alt="" className='w-12 m-auto mb-5 ' />
            <p className='font-medium gap-3 mb-5 text-[#4f4e4e]'>Premium Support</p>
            <p></p>
        </div>
        <div>
            <img src={assets.payment_icon} alt="" className='w-12 m-auto mb-5 ' />
            <p className='font-medium gap-3 mb-5 text-[#4f4e4e]'>Flexible Payment</p>
            <p></p>
        </div>
    </div>
  )
}

export default OurPolicy