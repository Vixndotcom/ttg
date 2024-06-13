import React from 'react'
import styles from '../../style'

const Event = () => {
  return (
    <section id='register'  className={`flex md:flex-row flex-col  ${styles.paddingY} mb-5 `}>
       <div className={`flex-1 ${styles.flexStart} flex-col text-center  `}>
     <div className='w-[24px] h-[24px] bg-welcome'>
      
     </div>
     <h2 className='text-black text-[40px] neue-bold'>
      Latest Event:
       </h2>

       {/* <p className='text-white '>
        Our Motto: Success, is a must!

       </p> */}
      </div>
        </section>
  )
}

export default Event