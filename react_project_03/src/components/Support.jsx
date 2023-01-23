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
              <div className='py-2 text-xl text-slate-300'>Law school electives that will prepare you to practice in any number of legal fields. Our law specializations list highlights some of the most popular types of law.  Investigate options you may not have previously considered and choose your electives accordingly.</div>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
              <div className='bg-white rounded-xl shadow-2xl hover:-translate-y-7 ease-in-out duration-500'>
                  <div className='p-8'>
                      <AcademicCapIcon className='w-16 p-4 bg-[#cc4839] text-white rounded-lg mt-[-4rem]' />
                      <h3 className='font-bold text-2xl my-6'>Corporate law</h3>
                      <p className='text-gray-600 text-xl'>Law that is more likely to deal with the financial and structural status of an established company, as well as the provision of legal advice on day-to-day dealings.</p>
                  </div>
              </div>
              <div className='bg-white rounded-xl shadow-2xl hover:-translate-y-7 ease-in-out duration-500'>
                  <div className='p-8'>
                      <AcademicCapIcon className='w-16 p-4 bg-[#cc4839] text-white rounded-lg mt-[-4rem]' />
                      <h3 className='font-bold text-2xl my-6'>Constitutional Law</h3>
                      <p className='text-gray-600 text-xl'>Often considered one of the most broad and involved branches of law, constitutional law requires a deep understanding of the U.S. Constitution in order to understand its every possible interpretation and implementation.</p>
                  </div>
              </div>
              <div className='bg-white rounded-xl shadow-2xl hover:-translate-y-7 ease-in-out duration-500'>
                  <div className='p-8'>
                      <AcademicCapIcon className='w-16 p-4 bg-[#cc4839] text-white rounded-lg mt-[-4rem]' />
                      <h3 className='font-bold text-2xl my-6'>Criminal Law</h3>
                      <p className='text-gray-600 text-xl'>Criminal law revolves around governmental prosecution of anyone who is purported to have committed a criminal act, as defined by public law.</p>
                  </div>
              </div>

              <div className='bg-white rounded-xl shadow-2xl hover:-translate-y-7 ease-in-out duration-500'>
                  <div className='p-8'>
                      <AcademicCapIcon className='w-16 p-4 bg-[#cc4839] text-white rounded-lg mt-[-4rem]' />
                      <h3 className='font-bold text-2xl my-6'>Environmental Law</h3>
                      <p className='text-gray-600 text-xl'>Environmental law mostly stems from a group of federal enactments passed in 1970 that forced agencies and businesses to take into account the effect of their practices on the environment.</p>
                  </div>
              </div>
              <div className='bg-white rounded-xl shadow-2xl hover:-translate-y-7 ease-in-out duration-500'>
                  <div className='p-8'>
                      <AcademicCapIcon className='w-16 p-4 bg-[#cc4839] text-white rounded-lg mt-[-4rem]' />
                      <h3 className='font-bold text-2xl my-6'>Health Care Law</h3>
                      <p className='text-gray-600 text-xl'>Since it is primarily the state's duty to maintain public health, most heath laws and regulations are state-based. Federal health law centers on the Department of Health and Human Services.</p>
                  </div>
              </div>
              <div className='bg-white rounded-xl shadow-2xl hover:-translate-y-7 ease-in-out duration-500'>
                  <div className='p-8'>
                      <AcademicCapIcon className='w-16 p-4 bg-[#cc4839] text-white rounded-lg mt-[-4rem]' />
                      <h3 className='font-bold text-2xl my-6'>Patent Law</h3>
                      <p className='text-gray-600 text-xl'>Patents grant an inventor a limited period of exclusive rights to a human-made invention or an improvement on an existing invention, providing the United States Patent and Trademark Office deems it worthy of both technical and legal merit.</p>
                  </div>
              </div>
          </div>
      </div>
  </div>
  );
};

export default Support;
