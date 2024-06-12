import React from 'react'
import { outreach, training, workshop } from '../../assets'
import styles from '../../style'

const Outreach = () => {
  return (
    <section className={`${styles.flexCenter}`}>
           <div className='text-start boxx p-4 '>
        <div>
            <img src={outreach} className='w-[72px] h-[72px]'  />
        </div>
        <h2 className=' neue-lightt mt-4 text-[20px] p-4 flex flex-row '><span> 
            <div className='w-[24px] h-[24px]  bg-white mr-2'>
      
      </div>
      </span> 
      Outreaches
        </h2>
      </div>
    </section>
  )
}

export default Outreach