import React from 'react'
import styles from '../../style'

const Event = () => {
  return (
    <section id='register'  className={`flex md:flex-row flex-col  ${styles.paddingY} mb-5 `}>
       <div className={`flex-1 ${styles.flexStart} flex-col text-center `}>
     <div className='w-[24px] h-[24px] bg-white mx-4 '>
      
     </div>
     <h2 className='text-white text-[40px] neue-bold mx-4'>
      Latest Event:
       </h2>

      
      </div>
        </section>
  )
}

export default Event