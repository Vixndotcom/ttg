import React from 'react'
import { poster } from '../../assets'
import Event from './Event'

const Announcement = () => {
  return (
    <section className='md:w-[720px] xs:w-[470px]'>
      <Event />
      <div className='mb-10'>
        <img src={poster} alt="" />
      </div>
        <div className=''>
            <h2 className='neue-bold text-[20px]'>
                <span className='neue-bold text-[40px]'>A </span> mind blowing  session for teenagers and undergraduates coming up on the <br />
                 <span className='mt-2 neue-bold text-[28px] text-red-700'> 17th of August 2024.

                 </span>
            </h2>
            <h2 className='mt-10 text-[20px] neue-bold border-b-[2px] w-[280px]'>
            Early - Bird Session
            </h2>
            <p className='neue-bold mt-5 track'>9am - 12pm</p>

            <h2 className='mt-10 text-[20px] neue-bold border-b-[2px] w-[280px]'>
            Noon Session
            </h2>
            <p className='neue-bold mt-5 track '>1pm - 2pm</p>
            {/* theme */}
            <h2 className='mt-10 text-[28px] neue-bold border-b-[2px] w-[280px]'>
            Theme
            </h2>
            <p className='neue-bold text-[20px] mt-5  text-red-700'>MY LIFE MY BRAND!</p>
            
            <h2 className='mt-10 text-[20px] neue-bold track'>
            The registration fee is <span className='mt-2 neue-bold text-[28px] text-red-700'> 5,000 Naira Only</span>
            </h2>
            <p className='neue-bold text-[20px] track mt-10'>
                You have a purpose that makes you uniquely different and outstanding in all that you do
            </p>
            <p className='neue-bold  text-[20px] track mt-5'>
                What are you waiting for! it's time to take the bull by the horn in discovering who you
                 truly are and living your best life.

            </p>

        </div>
    </section>
  )
}

export default Announcement