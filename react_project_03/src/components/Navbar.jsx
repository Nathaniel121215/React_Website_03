
import React, {useState} from 'react';
import { Link, animateScroll as scroll, } from 'react-scroll'

import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {

  const [nav,setNav] = useState(false)

  const handleNav =() =>
  {
      setNav(!nav)
  }

    const handleClose =()=> setNav(!nav)

  return (
    <div className='bg-black fixed  w-full z-50'>
      <div className='h-[60px] sm:h-[80px] px-4 flex justify-between items-center w-full bg-white drop-shadow-lg z-20 relative'>
        <div className='flex items-center'>
          <div className='inline-block'>
            <Link onClick={handleClose} to="/" smooth={true} duration={500} className='text-2xl font-bold mr-4 sm:text-3xl text-[#cc4839] cursor-pointer'>LOGO HERE.</Link>
          </div>
          
          <ul className='hidden lg:flex font-medium'>
          <li className='px-5 hover:text-[#cc4839] cursor-pointer'><Link to="/" smooth={true} duration={500}>Home</Link></li>
          <li className='px-5 hover:text-[#cc4839] cursor-pointer'><Link to="aboutus" smooth={true} offset={-60} duration={500}>About Us</Link></li>
          <li className='px-5 hover:text-[#cc4839] cursor-pointer'><Link to="program" smooth={true} duration={500}>Our Programs</Link></li>
          <li className='px-5 hover:text-[#cc4839] cursor-pointer'><Link to="fqa" smooth={true} duration={500}>FQA</Link></li>
          <li className='px-5 hover:text-[#cc4839] cursor-pointer'><Link to="pricing" smooth={true} duration={500}>Pricing</Link></li>
          <li className='px-5 hover:text-[#cc4839] cursor-pointer'><Link to="contactus" smooth={true} duration={500}>Contact Us</Link></li>
          </ul>
        </div>
        <div className='hidden lg:flex pr-4'>
          <button className='border-none bg-transparent text-black mr-4 font-medium'>Sign In</button>
          <button className='text-white px-10 py-3 font-medium bg-[#cc4839] rounded-md hover:bg-[#c0392a]'>Sign Up</button>
        </div>
        <div onClick={handleNav} className='block lg:hidden'>
            {!nav ? <Bars3BottomRightIcon  className='w-5 sm:w-6 cursor-pointer' /> : <XMarkIcon className='w-5 sm:w-6 cursor-pointer' /> }
          
        </div>
      </div>

      {/* <div className={!nav ? 'fixed top-[-100%] w-full h-full ease-in-out duration-500 md:hidden z-[1]' : 'mt-[80px] fixed top-[0] w-full h-full ease-in-out duration-500 md:hidden z-[1]'}>
              <ul className='uppercase p-4 bg-zinc-200 z-[1]'>
                  <li className='p-4 border-b border-gray-600 '>Home</li> 
                  <li className='p-4 border-b border-gray-600'>Company</li>
                  <li className='p-4 border-b border-gray-600'>Resources</li>
                  <li className='p-4 border-b border-gray-600'>About</li>
                  <li className='p-4 whitespace-nowrap'>Contact Us</li>
              </ul>
        </div> */}

      <ul className={!nav ? 'p-5 mt-[60px]  md:mt-[80px] fixed top-[-100%] w-full ease-in-out duration-500 lg:hidden z-[1] bg-[#ffff] font-medium' : 'p-5 mt-[60px]  md:mt-[80px] fixed top-[0] w-full ease-in-out duration-500 lg:hidden z-[1] bg-[#ffff] font-medium'}>
          <li className='hover:text-[#cc4839] border-b-2 border-zinc-300 w-full py-4 cursor-pointer'><Link onClick={handleClose} to="/" smooth={true} duration={500}>Home</Link></li>
          <li className='hover:text-[#cc4839] border-b-2 border-zinc-300 w-full py-4 cursor-pointer'><Link onClick={handleClose} to="aboutus" smooth={true} offset={-60} duration={500}>About Us</Link></li>
          <li className='hover:text-[#cc4839] border-b-2 border-zinc-300 w-full py-4 cursor-pointer'><Link onClick={handleClose} to="program" smooth={true}  duration={500}>Our Programs</Link></li>
          <li className='hover:text-[#cc4839] border-b-2 border-zinc-300 w-full py-4 cursor-pointer'><Link onClick={handleClose} to="fqa" smooth={true} duration={500}>FQA</Link></li>
          <li className='hover:text-[#cc4839] border-b-2 border-zinc-300 w-full py-4 cursor-pointer'><Link onClick={handleClose} to="pricing" smooth={true}  duration={500}>Pricing</Link></li>
          <li className='hover:text-[#cc4839] border-b-2 border-zinc-300 w-full py-4 cursor-pointer'><Link onClick={handleClose} to="contactus" smooth={true}  duration={500}>Contact Us</Link></li>

        <div className='flex flex-col my-4'>
            <button className='border-[1.9px] border-[#cc4839] py-3 rounded font-semibold mb-4 hover:bg-[#c0392a] hover:text-white'>Sign In</button>
            <button className='px-8 py-3 font-semibold bg-[#cc4839] rounded-md text-white hover:bg-[#c0392a]'>Sign Up</button>
        </div>
      </ul>
    </div>
  )
}

export default Navbar;
