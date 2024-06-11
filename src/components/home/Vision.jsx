import React from 'react'
import { world } from '../../assets'
import styles from '../../style'

const Vision = () => {
  return (
    <section className={`${styles.flexStart} text-start mt-4 p-4 flex flex-col`}>

    {/* card 1 */}
  <div className='text-start box p-8'>
    <div>
        <img src={world} className='w-[72px] h-[72px] p-2'  />
    </div>
    <h2 className='text-[28px] neue-light mt-4'><span> <div className='w-[24px] h-[24px] bg-black'>
  
  </div></span> To become a global reference for all that we stand for.
    </h2>
  </div>
  </section>
  )
}

export default Vision
