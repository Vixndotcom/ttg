import React from 'react'
import styles from '../../style'
import { icon } from '../../assets'

const Choice = () => {
  return (
    <section className={`${styles.flexCenter} align-items-center justify-center items-center text-center flex`}>
        {/* */}

     <div className='flex flex-col'>
        {/* card */}
        <div className=' justify-content-center w-[320px] h-[200px]  rounded-[16px] bg-white'>
          <div className='mx-auto p-4'>
           <img src={icon} alt="" className='w-[40%] mx-auto' /> 
          <h1 className='neue-light text-[28px] sm:text-[20px]'>Success Guaranteed</h1>
        </div>
        </div>
        {/* card */}
        {/* card */}
        <div className=' justify-content-center w-[320px] h-[200px] mt-4 rounded-[16px] bg-white'>
          <div className='mx-auto p-4'>
           <img src={icon} alt="" className='w-[40%] mx-auto' /> 
          <h1 className='neue-light text-[28px] sm:text-[20px]'>Success Guaranteed</h1>
        </div>
        </div>
        {/* card */}
        {/* card */}
        <div className=' justify-content-center w-[320px] h-[200px] mt-4  rounded-[16px] bg-white'>
          <div className='mx-auto p-4'>
           <img src={icon} alt="" className='w-[40%] mx-auto' /> 
          <h1 className='neue-light text-[28px] sm:text-[20px]'>Success Guaranteed</h1>
        </div>
        </div>
        {/* card */}
     </div>
      
    </section>
  )
}

export default Choice
 