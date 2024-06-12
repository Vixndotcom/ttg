import React from 'react'
import styles from '../../style'

const Hed = () => {
  return (
    <section id='about'  className={`flex md:flex-row flex-col md:mt-24  mt-36  ${styles.paddingY} mb-5 `}>
         <div className={`flex-1 ${styles.flexStart} flex-col text-center p-8 textt`}>
         <div className='w-[24px] h-[24px] bg-black'>
      
      </div>
         <h2 className='text-BLACK text-[40px] neue-bold'>
      OUR SERVICES
       </h2>

      
         </div>
    </section>
  )
}

export default Hed