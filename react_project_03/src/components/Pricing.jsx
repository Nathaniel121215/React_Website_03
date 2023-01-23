import React from 'react';

import { CheckIcon } from '@heroicons/react/24/solid';

const Pricing = () => {
  return (
    <div name='pricing' className='w-full text-white bg-[#160f0f] md:h-screen flex flex-col justify-center'>

      <div className='max-w-[1240px] mx-auto py-12'>

        <div className='text-center py-8 text-slate-300'>
          <h2 className='text-2xl uppercase'>Pricing</h2>
          <h3 className='text-4xl font-bold text-white py-8'>The right price for your research.</h3>
          <p className='text-xl'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia
            laudantium odio ullam inventore aliquid ipsum quasi tenetur velit
            voluptatum iste.
          </p>
        </div>

        <div className='grid md:grid-cols-2 max-w-[900px] mx-auto px-4 gap-4 md:gap-7'>

          <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl max-w-[500px] mx-auto hover:-translate-y-7 ease-in-out duration-500'>
            <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Standard</span>
            <div>
              <p className='text-5xl font-bold py-4 flex'>$49<span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span></p>
            </div>
            <p className='text-xl py-2 text-slate-500'>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            <div className='text-xl'>
                <p className='flex py-3'><CheckIcon className='w-8 mr-5 text-green-600'  />Lorem, ipsum dolor.</p>
                <p className='flex py-3'><CheckIcon className='w-8 mr-5 text-green-600'  />Lorem, ipsum dolor.</p>
                <p className='flex py-3'><CheckIcon className='w-8 mr-5 text-green-600'  />Lorem, ipsum dolor.</p>
                <p className='flex py-3'><CheckIcon className='w-8 mr-5 text-green-600'  />Lorem, ipsum dolor.</p>
                <p className='flex py-3'><CheckIcon className='w-8 mr-5 text-green-600'  />Lorem, ipsum dolor.</p>
                {/* <button className='w-full py-4 my-4'>Get Started</button> */}
            </div>
          </div>


          <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl max-w-[500px] mx-auto hover:-translate-y-7 ease-in-out duration-500'>
            <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Standard</span>
            <div>
              <p className='text-5xl font-bold py-4 flex'>$49<span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span></p>
            </div>
            <p className='text-xl py-2 text-slate-500'>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            <div className='text-xl'>
                <p className='flex py-3'><CheckIcon className='w-8 mr-5 text-green-600'  />Lorem, ipsum dolor.</p>
                <p className='flex py-3'><CheckIcon className='w-8 mr-5 text-green-600'  />Lorem, ipsum dolor.</p>
                <p className='flex py-3'><CheckIcon className='w-8 mr-5 text-green-600'  />Lorem, ipsum dolor.</p>
                <p className='flex py-3'><CheckIcon className='w-8 mr-5 text-green-600'  />Lorem, ipsum dolor.</p>
                <p className='flex py-3'><CheckIcon className='w-8 mr-5 text-green-600'  />Lorem, ipsum dolor.</p>
                {/* <button className='w-full py-4 my-4'>Get Started</button> */}
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default Pricing;
