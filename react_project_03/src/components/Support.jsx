import React from 'react';

import { PhoneIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

const Support = () => {
  return (
  <div name="program" className='w-full bg-[#160f0f] pb-10 sm:pb-16'>
      {/* <div className='w-full h-[700px] bg-[#160f0f] absolute'>
        <img className='w-full h-full object-cover mix-blend-overlay' src={supportImg} alt="/" />
      </div> */}
      <div className='max-w-[1240px] mx-auto text-white relative '>
          <div className='px-4 pt-12 '>
              <h2 className='text-2xl pt-[4rem] text-slate-300 uppercase text-center'>Our Programs</h2>
              <h3 className='text-4xl font-bold py-6 text-center'>Finding the right path for you</h3>
              <div className='py-2 text-xl text-slate-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In repudiandae veritatis ratione error tenetur, voluptates architecto possimus ad! Omnis minima ea quidem quisquam unde beatae, minus illo et cum vel?</div>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
              <div className='bg-white rounded-xl shadow-2xl hover:-translate-y-7 ease-in-out duration-500'>
                  <div className='p-8'>
                      <AcademicCapIcon className='w-16 p-4 bg-[#cc4839] text-white rounded-lg mt-[-4rem]' />
                      <h3 className='font-bold text-2xl my-6'>Sales</h3>
                      <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.</p>
                  </div>
              </div>
              <div className='bg-white rounded-xl shadow-2xl hover:-translate-y-7 ease-in-out duration-500'>
                  <div className='p-8'>
                      <AcademicCapIcon className='w-16 p-4 bg-[#cc4839] text-white rounded-lg mt-[-4rem]' />
                      <h3 className='font-bold text-2xl my-6'>Technical Support</h3>
                      <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.</p>
                  </div>
              </div>
              <div className='bg-white rounded-xl shadow-2xl hover:-translate-y-7 ease-in-out duration-500'>
                  <div className='p-8'>
                      <AcademicCapIcon className='w-16 p-4 bg-[#cc4839] text-white rounded-lg mt-[-4rem]' />
                      <h3 className='font-bold text-2xl my-6'>Media Inquiries</h3>
                      <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.</p>
                  </div>
              </div>

              <div className='bg-white rounded-xl shadow-2xl hover:-translate-y-7 ease-in-out duration-500'>
                  <div className='p-8'>
                      <AcademicCapIcon className='w-16 p-4 bg-[#cc4839] text-white rounded-lg mt-[-4rem]' />
                      <h3 className='font-bold text-2xl my-6'>Sales</h3>
                      <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.</p>
                  </div>
              </div>
              <div className='bg-white rounded-xl shadow-2xl hover:-translate-y-7 ease-in-out duration-500'>
                  <div className='p-8'>
                      <AcademicCapIcon className='w-16 p-4 bg-[#cc4839] text-white rounded-lg mt-[-4rem]' />
                      <h3 className='font-bold text-2xl my-6'>Technical Support</h3>
                      <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.</p>
                  </div>
              </div>
              <div className='bg-white rounded-xl shadow-2xl hover:-translate-y-7 ease-in-out duration-500'>
                  <div className='p-8'>
                      <AcademicCapIcon className='w-16 p-4 bg-[#cc4839] text-white rounded-lg mt-[-4rem]' />
                      <h3 className='font-bold text-2xl my-6'>Media Inquiries</h3>
                      <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.</p>
                  </div>
              </div>
          </div>
      </div>
  </div>
  );
};

export default Support;
