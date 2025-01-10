import React from 'react'

const Title = ({text1, text2}) => {
  return (
    <div className='inline-flex gap-2 items-center mb-3'>
        <p className='w-7 md:w-11 h-[1px] bg-[#4f4e4e]'></p>
        <p className='prata-regular text-[#4f4e4e]'>{text1}<span className='prata-regular text-gray-500 font-medium'>{text2}</span></p>
        <p className='w-7 md:w-11 h-[1px] bg-[#4f4e4e]'></p>

    </div>
  )
}

export default Title