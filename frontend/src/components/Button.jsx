import React from 'react';
import { Link } from 'react-router-dom';

const Button = () => {
  return (
    <Link to={'/collection'}>
    <button className="relative overflow-hidden text-sm md:text-base py-2 px-6 border border-gray-800 text-[#4f4e4e] group transition-all duration-300">
      <span className="absolute inset-0 bg-black translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></span>
      <span className="prata-regular relative z-10 flex items-center justify-center group-hover:text-white">
        SHOP NOW
        <span className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>
        </span>
      </span>
    </button>
    </Link>
  );
};

export default Button;
