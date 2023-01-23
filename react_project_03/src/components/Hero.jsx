import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import courtImg from '../assets/court.jpg'
import supportImg from '../assets/support.jpg'
import SimpleImageSlider from "react-simple-image-slider";
import MessengerCustomerChat from 'react-messenger-customer-chat';


import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';

const images = [
  { url: courtImg },
  { url: img1 },
  { url: img2 },
  { url: img3 },
  { url: img4 },
];

const Hero = () => {
  return (
    
    <>
    <div name="/" className='text-white mt-[80px]'>
      <div className='w-full h-full pt-[-80px] bg-gray-900/70'>
        {/* <img className='w-full h-full object-cover mix-blend-overlay absolute' src={courtImg} alt="/" /> */}
        {/* w-full h-full object-cover mix-blend-overlay absolute    */}
        <div className='w-full h-full object-cover mix-blend-overlay absolute   '>

        <SimpleImageSlider
        width={'100%'}
        height={'100%'}
        images={images}
        showBullets={false}
        autoPlay={true}
        loop={true}
        slideDuration={1}
      /> 
        </div>
        
  
        <div className='max-w-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center mt-[-80px] relative'>
        <p className='text-[#cc4839] font-bold p-2'>HELPING YOU ACHIEVE YOUR DREAM</p>
        <h1 className='text-4xl font-bold sm:text-5xl md:text-6xl md:py-5'>Empowering You to Pass.</h1>
        <div className='flex justify-center items-center whitespace-nowrap'>
          <div className='text-xl sm:text-3xl md:text-4xl py-4'>Fast, Flexible, and Affordable for your <TypeAnimation className='font-bold text-xl sm:text-3xl md:text-4xl md:pl-4 pl-2 text-[#cc4839]' sequence={['SELF',2000,'FAMILY',2000,'FUTURE',2000]}speed={0} wrapper="div"cursor={true}repeat={Infinity}/></div>
          
        </div>
        <p className='text-[1rem] sm:text-xl text-white'>The pioneer of coaching-style review with mock bar exams, helping you realize your potential.</p>
        
        <div className='grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] max-w-[400px] mx-auto gap-6 mt-5' >
          <button className='bg-[#cc4839] py-2 px-9 sm:px-12 rounded  text-white mx-auto font-semibold hover:-translate-y-3 ease-in-out duration-500'>Get Started</button>
          <button className='border-2 border-[#cc4839] py-2 px-9 sm:px-12  rounded text-white mx-auto font-semibold hover:-translate-y-3 ease-in-out duration-500'>Learn More</button>
        </div>
      </div>
      </div>

    </div>
    </>
  )
}

export default Hero