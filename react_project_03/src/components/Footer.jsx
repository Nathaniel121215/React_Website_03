import React from 'react'

import {
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaTwitter,
    FaTwitch,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full  text-black py-9 px-4'>
        <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8'>
            <div>
                <h6 className='font-bold uppercase py-2'>Navigation</h6>
                <ul>
                    <li className='py-1'>Home</li>
                    <li className='py-1'>About Us</li>
                    <li className='py-1'>Our Programs</li>
                    <li className='py-1'>FQA</li>
                    <li className='py-1'>Pricing</li>
                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase py-2'>Support</h6>
                <ul>
                    <li className='py-1'>Contact Us</li>
                    <li className='py-1'>Guides</li>
                    <li className='py-1'>Address</li>
                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase py-2'>Company</h6>
                <ul>
                    <li className='py-1'>Partners</li>
                    <li className='py-1'>Jobs</li>
                    <li className='py-1'>Personel</li>
                    <li className='py-1'>Team</li>
                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase py-2'>Legal</h6>
                <ul>
                    <li className='py-1'>Claims</li>
                    <li className='py-1'>Privacy</li>
                    <li className='py-1'>Terms</li>
                    <li className='py-1'>Policies</li>
                    <li className='py-1'>Conditions</li>
                </ul>
            </div>
            <div className='col-span-2 pt-8 md:pt-2'>
                <p className='font-bold uppercase'>Subscribe to our newsletter</p>
                <p className='py-4'>The latest news, articles, and resources, sent to your inbox weekly.</p>
                <form className='flex flex-col sm:flex-row'>
                    <input className='border-2 border-[#424242] w-full p-2 mr-4 rounded-md mb-4' type="email" placeholder='Enter email..'/>
                    <button className='p-3 px-6 mb-4 bg-[#cc4839] rounded text-white'>Subscribe</button>
                </form>
            </div>
        </div>

        <div className='flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center'>
        <p className='py-4'>2022 Workflow, LLC. All rights reserved</p>
        <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
            <FaFacebook className='hover:-translate-y-3 ease-in-out duration-500'/>
            <FaInstagram className='hover:-translate-y-3 ease-in-out duration-500'/>
            <FaTwitter className='hover:-translate-y-3 ease-in-out duration-500'/>
            <FaTwitch className='hover:-translate-y-3 ease-in-out duration-500'/>
            <FaGithub className='hover:-translate-y-3 ease-in-out duration-500'/>
        </div>
        </div>

        
    </div>
  )
}

export default Footer