import React from 'react'
import styles from '../../style'
import { determined, icon, positive, success } from '../../assets'

const Choice = () => {
  return (
    <section className={`${styles.flexCenter} mb-10 mt-2 align-items-center justify-center items-center text-center flex`}>
        {/* */}

     <div className='flex flex-col mb-10'>
        {/* card */}
        <div className=' justify-content-center w-[390px] mt-4 h-[320px] rounded-[12px] bg-white'>
          <div className='mx-auto p-4 text-black neue-bold h-[60px] '>
           
          <h1 className=' text-[20px] track font-medium'>Determination for Change</h1>
        </div>
        <div className='h-[320px] object-contain'>
          <img src={determined} alt="" className='round'/>
        </div>
        </div>


      
        {/* card */}
        <div className=' justify-content-center w-[390px] mt-5  rounded-[12px] bg-white'>
          <div className='mx-auto p-4 text-black neue-bold h-[60px] '>
           
          <h1 className=' text-[20px] track font-medium'>Postive Minded</h1>
        </div>
        <div className=' object-contain'>
          <img src={positive} alt="" className='round'/>
        </div>
        </div>


      
        {/* card */}
        <div className=' justify-content-center w-[390px] mt-5 h-[320px] rounded-[12px] bg-white'>
          <div className='mx-auto p-4 text-black neue-bold h-[60px] '>
           
          <h1 className=' text-[20px] track font-medium'>Passion for success</h1>
        </div>
        <div className='h-[320px] object-contain'>
          <img src={success} alt="" className='round'/>
        </div>
        </div>


      







     </div>
      
    </section>
  )
}

export default Choice
 