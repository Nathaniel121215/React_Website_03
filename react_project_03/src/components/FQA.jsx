import React from 'react';
import { CheckIcon } from '@heroicons/react/24/outline';

const FQA = () => {
  return (
    
    <div name="fqa" className='w-full py-[5.5rem] px-4 2xl:h-screen flex flex-col justify-center'>
      <div className='max-w-[1240px] mx-auto px-4'>
        <h2 className='text-4xl font-bold text-center'>Frequently Asked Questions</h2>
        <p className='text-xl py-12 text-gray-500'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis,
          ab. Officia sunt nulla aspernatur culpa, eaque tenetur excepturi
          nostrum tempore. Officia sunt nulla aspernatur culpa, eaque tenetur excepturi
          nostrum tempore.
        </p>

        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-[1rem]'>

          <div className='flex my-3 hover:-translate-y-7 ease-in-out duration-500'>
            <div>
              <CheckIcon className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>How to start?</h3>
              <p className='text-lg pt-2 pb-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores maxime deserunt voluptatibus consequatur similique
                voluptates!
              </p>
            </div>
          </div>
          <div className='flex my-3 hover:-translate-y-7 ease-in-out duration-500'>
            <div>
              <CheckIcon className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>What are the requirements?</h3>
              <p className='text-lg pt-2 pb-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores maxime deserunt voluptatibus consequatur similique
                voluptates!
              </p>
            </div>
          </div>
          <div className='flex my-3 hover:-translate-y-7 ease-in-out duration-500'>
            <div>
              <CheckIcon className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>How long does the program take?</h3>
              <p className='text-lg pt-2 pb-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores maxime deserunt voluptatibus consequatur similique
                voluptates!
              </p>
            </div>
          </div>
          <div className='flex my-3 hover:-translate-y-7 ease-in-out duration-500'>
            <div>
              <CheckIcon className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Do you offer refund?</h3>
              <p className='text-lg pt-2 pb-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores maxime deserunt voluptatibus consequatur similique
                voluptates!
              </p>
            </div>
          </div>
          <div className='flex my-3 hover:-translate-y-7 ease-in-out duration-500'>
            <div>
              <CheckIcon className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Can i cancel my subscription?</h3>
              <p className='text-lg pt-2 pb-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores maxime deserunt voluptatibus consequatur similique
                voluptates!
              </p>
            </div>
          </div>
          <div className='flex my-3 hover:-translate-y-7 ease-in-out duration-500'>
            <div>
              <CheckIcon className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Will i get personal assistance after signing up?</h3>
              <p className='text-lg pt-2 pb-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores maxime deserunt voluptatibus consequatur similique
                voluptates!
              </p>
            </div>
          </div>
          <div className='flex my-3 hover:-translate-y-7 ease-in-out duration-500'>
            <div>
              <CheckIcon className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Will i get notified?</h3>
              <p className='text-lg pt-2 pb-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores maxime deserunt voluptatibus consequatur similique
                voluptates!
              </p>
            </div>
          </div>
          <div className='flex my-3 hover:-translate-y-7 ease-in-out duration-500'>
            <div>
              <CheckIcon className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Is this legit?</h3>
              <p className='text-lg pt-2 pb-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores maxime deserunt voluptatibus consequatur similique
                voluptates!
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FQA;
