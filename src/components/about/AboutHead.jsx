import React from 'react'
import styles from '../../style'

const AboutHead = () => {
  return (
    <section id='about'  className={`flex md:flex-row flex-col md:mt-24  mt-36  ${styles.paddingY} mb-5 `}>
       <div className={`flex-1 ${styles.flexStart} flex-col text-center p-8 textt`}>
     <div className='w-[24px] h-[24px] bg-white'>
      
     </div>
     <h2 className='text-white text-[40px] neue-bold'>
      ABOUT- US
       </h2>

       <p className='text-white'>
        Our Motto: Success, a must!

       </p>
      </div>
        </section>
  )
}

export default AboutHead
