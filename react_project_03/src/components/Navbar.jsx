
import React, {useState} from 'react';
import { Link, animateScroll as scroll, } from 'react-scroll'
import Modal from 'react-modal'


import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const[modalIsOpen, setModalIsOpen] = useState(false)

  const [nav,setNav] = useState(false)

  const handleNav =() =>
  {
      setNav(!nav)
  }

    const handleClose =()=> setNav(!nav)

  return (
    <>
    <div className='fixed w-full z-50'>
      
      <div className='h-[60px] sm:h-[80px] px-4 flex justify-between items-center w-full bg-white drop-shadow-lg z-20 relative'>
        <div className='flex items-center'>
          <div className='inline-block'>
            <Link onClick={handleClose} to="/" smooth={true} duration={500} className='text-2xl font-bold mr-4 sm:text-3xl text-[#cc4839] cursor-pointer'>LOGO HERE.</Link>
          </div>
          
          <ul className='hidden lg:flex font-medium'>
          <li className='px-5 hover:text-[#cc4839] cursor-pointer'><Link to="/" smooth={true} duration={500}>Home</Link></li>
          <li className='px-5 hover:text-[#cc4839] cursor-pointer'><Link to="aboutus" smooth={true} offset={-60} duration={500}>About Us</Link></li>
          <li className='px-5 hover:text-[#cc4839] cursor-pointer'><Link to="program" smooth={true} duration={500}>Our Programs</Link></li>
          <li className='px-5 hover:text-[#cc4839] cursor-pointer'><Link to="fqa" smooth={true} offset={-60} duration={500}>FQA</Link></li>
          <li className='px-5 hover:text-[#cc4839] cursor-pointer'><Link to="pricing" smooth={true} offset={-60} duration={500}>Pricing</Link></li>
          <li className='px-5 hover:text-[#cc4839] cursor-pointer'><Link to="contactus" smooth={true} duration={500}>Contact Us</Link></li>
          </ul>
        </div>
        <div className='hidden lg:flex pr-4'>
          <button onClick={() =>setModalIsOpen(true)} className='border-none bg-transparent text-black mr-4 font-medium'>Sign In</button>
          <button onClick={() =>setModalIsOpen(false)} className='text-white px-10 py-2  font-medium bg-[#cc4839] rounded-md hover:bg-[#c0392a]'>Sign Up</button>
        </div>
        <div onClick={handleNav} className='block lg:hidden'>
            {!nav ? <Bars3BottomRightIcon  className='w-5 sm:w-6 cursor-pointer' /> : <XMarkIcon className='w-5 sm:w-6 cursor-pointer' /> }
          
        </div>
      </div>

      <ul className={!nav ? 'p-5 mt-[60px]  md:mt-[80px] fixed top-[-200%] w-full ease-in-out duration-500 lg:hidden z-[1] bg-[#ffff] font-medium' : 'p-5 mt-[60px]  md:mt-[80px] fixed top-[0] w-full ease-in-out duration-500 lg:hidden z-[1] bg-[#ffff] font-medium'}>
          <li className='hover:text-[#cc4839] border-b-2 border-zinc-300 w-full py-4 cursor-pointer'><Link onClick={handleClose} to="/" smooth={true} duration={500}>Home</Link></li>
          <li className='hover:text-[#cc4839] border-b-2 border-zinc-300 w-full py-4 cursor-pointer'><Link onClick={handleClose} to="aboutus" smooth={true} offset={-60} duration={500}>About Us</Link></li>
          <li className='hover:text-[#cc4839] border-b-2 border-zinc-300 w-full py-4 cursor-pointer'><Link onClick={handleClose} to="program" smooth={true}  duration={500}>Our Programs</Link></li>
          <li className='hover:text-[#cc4839] border-b-2 border-zinc-300 w-full py-4 cursor-pointer'><Link onClick={handleClose} to="fqa" smooth={true} duration={500}>FQA</Link></li>
          <li className='hover:text-[#cc4839] border-b-2 border-zinc-300 w-full py-4 cursor-pointer'><Link onClick={handleClose} to="pricing" smooth={true} offset={-60} duration={500}>Pricing</Link></li>
          <li className='hover:text-[#cc4839] border-b-2 border-zinc-300 w-full py-4 cursor-pointer'><Link onClick={handleClose} to="contactus" smooth={true}  duration={500}>Contact Us</Link></li>

        <div className='flex flex-col my-4'>
            <button className='border-[1.9px] border-[#cc4839] py-3 rounded font-semibold mb-4 hover:bg-[#c0392a] hover:text-white'>Sign In</button>
            <button className='px-8 py-3 font-semibold bg-[#cc4839] rounded-md text-white hover:bg-[#c0392a]'>Sign Up</button>
        </div>
      </ul>


      
    </div>
    <div className='absolute mt-[4rem] sm:mt-[4.3rem] z-[10]'>
      <div className={!modalIsOpen ? "bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 fixed z-20 w-full sm:max-w-[350px] left-[-200%] ease-in-out duration-500" :"left-[0] ease-in-out duration-500 bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 fixed w-full sm:mt-4  sm:max-w-[350px] mb-[100rem]"} role="alert">
          <p className="font-bold">Be Warned</p>
          <p>Something not ideal might be happening.</p>
      </div>

    </div>
    

    <Modal style={{
    overlay: {
      backgroundColor: '#2b252459'
    },
    content: {

    }
  }}  isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} className=" mr-[4rem] w-full max-w-[450px] absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] z-[50]">
      <div className='bg-white shadow-md rounded px-8 pt-8 pb-8 mx-4'>
        <div className="mb-4 ">
          <label className="block text-grey-darker text-sm font-bold mb-2" for="username">
            Username
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username" type="text" placeholder="Username"/>
        </div>
        <div className="mb-6">
          <label className="block text-grey-darker text-sm font-bold mb-2" for="password">
            Password
          </label>
          <input className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" type="password" placeholder="******************"/>
        </div>
        <div className="flex justify-between items-center">
          <div className="bg-[#cc4839] hover:bg-blue-dark text-white py-2 px-4 w-full max-w-[8rem] rounded text-center cursor-pointer hover:bg-[#c0392a]">Sign In</div>
          <a class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="#">
          Forgot Password?
          </a>
        </div>

      </div>
      
    </Modal>
    
    </>
  )
}

export default Navbar;
