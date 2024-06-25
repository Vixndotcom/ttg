import React from 'react'
import styles from '../../style'

const Quote = () => {
  return (
    <section className={`${styles.flexCenter}   mb-20 `}>
    <div className='text-center boxxx  mt-4'>
        <div >
         <h2 className='mt-4 mx-auto text-center neue-bold text-black font-bold underborder w-[200px] p-4'>In her words</h2>
        </div> 
        <h2 className=' neue-bold text-[24px]   p-4 '>
      
   "Success in your world <br /> without you <br /> is incomplete "
        </h2>
      </div>
    </section>
  )
}

export default Quote
