import React from 'react'

const NewsletterBox = () => {
  return (
    <div className='text-center mt-32'>
        <p className='text-2xl font-medium'>10% OFF YOUR FIRST PURCHASE</p>
        <p className='mt-3 text-[#4f4e4e]'>
            Special offers for subscribers. Join now to get access to our latest collection and exclusive deals.
        </p>
        <form className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'> 
            <input type='email' placeholder='Enter your email' className='w-full sm:flex-1 outline-none'/>
            <button type='submit' className='bg-black text-white text-xs px-10 py-6'>➔</button>
        </form>
    </div> 
  )
}

export default NewsletterBox