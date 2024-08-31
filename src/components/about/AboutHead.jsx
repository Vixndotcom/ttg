import React from 'react'
import styles from '../../style'

const AboutHead = () => {
  return (
    <section id='about'  className={`flex md:flex-row flex-col md:mt-24  mt-32  ${styles.paddingY} mb-5 `}>
       <div className={`flex-1 ${styles.flexStart} flex-col text-center p-4 textt bg-white  w-[360px]`}>
     <div className='w-[24px] h-[24px] bg-welcome'>
      
     </div>

     <h2 className='blue text-[32px] neue-bold'>
      ABOUT- US
       </h2>

       <p className='blue '>
        Our Motto: Success, is a must!

       </p>
       </div>
    
        </section>
  )
}

export default AboutHead
