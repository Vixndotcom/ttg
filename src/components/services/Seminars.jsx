import React from 'react'
import { seminars, training } from '../../assets'
import styles from '../../style'

const Seminars = () => {
  return (
    <section className={`${styles.flexCenter}`}>
           <div className='text-start boxx p-4 '>
        <div>
            <img src={seminars} className='w-[72px] h-[72px]'  />
        </div>
        <h2 className=' neue-lightt mt-4 text-[20px] p-4 flex flex-row'><span> 
            <div className='w-[24px] h-[24px]  bg-white mr-2'>
      
      </div>
      </span> 
    Seminars
        </h2>
      </div>
    </section>
  )
}

export default Seminars