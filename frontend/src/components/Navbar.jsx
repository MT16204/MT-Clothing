import React, { useContext, useState } from 'react'
import {assets} from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const {setShowSearch, getCartCount} = useContext(ShopContext);

  return (
    <div className='prata-regular flex justify-between items-center py-5 font-medium'>
        <Link to={'/'}> <img src={assets.logo} alt='logo' className='w-40'/> </Link>
      <ul className='hidden sm:flex gap-5 text-sm text-[#4f4e4e]'>
        <NavLink to='/' className='flex flex-col items-center gap-1'>
          <p>HOME</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>

        <NavLink to='/about' className='flex flex-col items-center gap-1'>
          <p>ABOUT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>

        <NavLink to='/collection' className='flex flex-col items-center gap-1'>
          <p>COLLECTION</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>

        <NavLink to='/contact' className='flex flex-col items-center gap-1'>
          <p>CONTACT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>

      </ul>
      
      <div className='flex items-center gap-6 z-50'>
          <img onClick={()=> setShowSearch(true)} src={assets.search_icon} className='w-5 cursor-pointer' alt='search'/>

          <div className='group relative'>
                <Link to='/login'> <img src={assets.profile_icon} className='w-5 cursor-pointer' alt='login'/></Link>
                <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                    <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-gray-50 text-gray-500 rounded'>
                        <p className='cursor-pointer hover:text-black'>Profile</p>
                        <p className='cursor-pointer hover:text-black'>Orders</p>
                        <p className='cursor-pointer hover:text-black'>Sign Out</p>
                    </div>
                </div>
          </div>
          <Link to='/cart' className='group relative'>
                <img src={assets.cart_icon} className='w-5 min-w-5' alt='cart'/>
                <p className='absolute right-[-5px] bottom-[5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8.5px]'>{getCartCount()}</p>
          </Link>
          <img onClick={()=> setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt='menu'/>
      </div>

      {/* Side menu */}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition all ${visible ? 'w-full z-50' : 'w-0 z-50'}`}>
          <div className='flex flex-col text-gray-600'>
              <div onClick={()=> setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
                <img src={assets.dropdown_icon} alt='dropdown'className='h-4 rotate-180'/>
              </div>
              <NavLink onClick={()=> setVisible(false)} to={'/'} className='flex items-center justify-center py-2 pl-6 border'>Home ↗︎</NavLink>
              <NavLink onClick={()=> setVisible(false)} to={'/about'} className='flex items-center justify-center py-2 pl-6 border'>About ↗︎</NavLink>
              <NavLink onClick={()=> setVisible(false)} to={'/collection'} className='flex items-center justify-center py-2 pl-6 border'>Collection ↗︎</NavLink>
              <NavLink onClick={()=> setVisible(false)} to={'/contact'} className='flex items-center justify-center py-2 pl-6 border'>Contact ↗︎</NavLink>
              <NavLink onClick={()=> setVisible(false)} to={'/login'} className='flex items-center justify-center py-2 pl-6 border'>Login ↗</NavLink>
          </div>
      </div>
    </div>
  )
}

export default Navbar