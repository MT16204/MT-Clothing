import React from 'react'
import { Link } from 'react-router-dom';


const Footer = () => {

  return (
    <div>
      <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-14 my-12 mt-40 text-sm'>
        <div>
          <p className='text-xl font-medium mb-5'>PAGES</p>
          <ul className='flex flex-col gap-3 text-[#4f4e4e]'>
            <li><a href="/" className="hover:text-black">Home</a></li>
            <li><a href="/about" className="hover:text-black">About Us</a></li>
            <li><a href="/collection" className="hover:text-black">Collection</a></li>
            <li><a href="/contact" className="hover:text-black">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <p className='text-xl font-medium mb-5'>RESOURCES</p>
          <ul className='flex flex-col gap-3 text-[#4f4e4e]'>
            <li>FAQ</li>
            <li>Error 404</li>
          </ul>
        </div>
        <div>
          <p className='text-xl font-medium mb-5'>UTILITIES</p>
          <ul className='flex flex-col gap-3 text-[#4f4e4e]'>
            <li><a href="/login" className="hover:text-black">Log In</a></li> 
            <li><a href="/login" className="hover:text-black">Sign Up</a></li> 
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className='text-xl font-medium mb-5'>CONTACTS</p>
          <ul className='flex flex-col gap-3 text-[#4f4e4e]'>
            <li>+123.456.789</li>
            <li>demo@store.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr/>
        <p className='py-5 text-center text-sm text-[#4f4e4e]'> © 2025 | MT Clothing - All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
