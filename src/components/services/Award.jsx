import React from 'react'
import { awards, training } from '../../assets'
import styles from '../../style'

const Awards = () => {
  return (
    <section className={`${styles.flexCenter}`}>
           <div className='text-start boxx p-4 '>
        <div>
            <img src={awards} className='w-[72px] h-[72px]'  />
        </div>
        <h2 className=' neue-lightt mt-4 text-[20px] flex flex-row p-4'><span> 
            <div className='w-[24px] h-[24px] mr-2 bg-white'>
      
      </div>
      </span> 
      Human impact recognition awards
        </h2>
      </div>
    </section>
  )
}

export default Awards