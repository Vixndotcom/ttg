import React from 'react'
import styles from '../../style'
import { icon, positive } from '../../assets'

const Choice = () => {
  return (
    <section className={`${styles.flexCenter} mt-2 align-items-center justify-center items-center text-center flex`}>
        {/* */}

     <div className='flex md:flex-row md:gap-4 xs:flex-col'>
        {/* card */}
        <div className=' justify-content-center w-[320px] h-[200px] mt-4  rounded-[16px] determination'>
          <div className='mx-auto p-4 text-white'>
           
          <h1 className=' text-[28px] sm:text-[20px]  font-bold'>Determination for Change</h1>
        </div>
        </div>
        {/* card */}
        {/* card */}
        <div className=' justify-content-center w-[320px] h-[200px] mt-4 rounded-[16px] positive'>
          <div className='mx-auto p-4 '>
           
          <h1 className='text-white font-bold text-[28px] sm:text-[20px]'>Positive Minded</h1>
        </div>
        </div>
        {/* card */}
        {/* card */}
        <div className=' justify-content-center w-[320px] h-[200px] mt-4  rounded-[16px] success'>
          <div className='mx-auto p-4'>
           
          <h1 className='text-white font-bold  text-[28px] sm:text-[20px]'>Passion for Success</h1>
        </div>
        </div>
        {/* card */}
     </div>
      
    </section>
  )
}

export default Choice
 