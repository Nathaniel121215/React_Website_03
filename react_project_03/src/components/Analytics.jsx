import React from 'react'
import Support from '../assets/support.jpg'

const Analytics = () => {
  return (
    <div name="aboutus" className='bg-white py-[5rem] px-4'>
        <div className='grid md:grid-cols-2 max-w-[1240px] mx-auto gap-5'>
            <div className='flex justify-center'>
                <img src={Support} alt='' className='w-[30rem] object-cover '></img>
            </div>
            <div className='flex flex-col justify-center'>
                <div className='text-[#cc4839] font-bold'>COMPANY INFORMATION</div>
                <div className='text-2xl sm:text-3xl md:text-4xl font-bold py-1'>Sampang Law Office</div>
                <div className=''>
                <b>Atty. Anacleto Sampang Jr.</b> is a private legal practitioner in wide practice areas in the legal profession. 
                Currently a Senior Lawyer at The Law Firm of Casauay Coloma Francisco Estrellado & Associates, a full service law firm, 
                he has earned for himself an extensive litigation and legal documentation experience in different areas of law such as criminal law, 
                civil law, labor law, and etc.
                </div>

                <button className='bg-[#cc4839] py-3 w-[200px] rounded-md font-bold my-6 mx-auto md:mx-0 text-white hover:-translate-y-3 ease-in-out duration-500'>Learn More</button>
            </div>

        </div>



    </div>
  )
}

export default Analytics