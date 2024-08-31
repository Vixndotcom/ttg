import React from 'react'
import styles from '../../style'

const Hed = () => {
  return (
    <section id='about'  className={`flex md:flex-row flex-col md:mt-24  mt-20  ${styles.paddingY} mb-5 `}>
    <div className={`flex-1 ${styles.flexStart} flex-col text-center p-4 textt `}>
     <div className='w-[320px]  text-start mt-20'>
  <div className='w-[24px] h-[24px] bg-welcome mx-2 mt-4'>
   
  </div>

  <h2 className='text-black text-[32px] neue-bold mx-2 mt-2'>
   OUR SERVICES
    </h2>
    </div>
 
    </div>
 
     </section>
  )
}

export default Hed 