import React from 'react'
import styles from '../../style'

const AboutHead = () => {
  return (
    <section id='about'  className={`flex md:flex-row flex-col md:mt-24  mt-20  ${styles.paddingY} mb-5 `}>
       <div className={`flex-1 ${styles.flexStart} flex-col text-center p-4 textt `}>
        <div className='w-[320px] bg-white text-start '>
     <div className='w-[24px] h-[24px] bg-welcome mx-2 mt-2'>
      
     </div>

     <h2 className='text-black text-[32px] neue-bold mx-2'>
      ABOUT- US
       </h2>
       </div>
       <div className='bg-white mt-5 w-[320px] text-start '>
       <p className='text-black mt-2 mb-2 mx-2 '>
        Our Motto: Success, is a must!

       </p>
       </div>
       </div>
    
        </section>
  )
}

export default AboutHead
