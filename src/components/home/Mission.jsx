import React from 'react'
import styles from '../../style'
import { devt, groom, path, recognise } from '../../assets'

const Mission = () => {
  return (
    <section className={`${styles.flexStart} text-start mt-4 p-4 flex flex-col`}>

        {/* card 1 */}
      <div className='text-start box p-8'>
        <div>
            <img src={groom} className='w-[72px] h-[72px] p-2'  />
        </div>
        <h2 className=' neue-light mt-4'><span> <div className='w-[24px] h-[24px]  bg-welcome'>
      
      </div></span> To groom youngsters for a purposeful future
        </h2>
      </div>
        {/* card 1 */}
      <div className='text-start box p-8 mt-4'>
        <div>
            <img src={recognise} className='w-[72px] h-[72px] p-2'  />
        </div>
        <h2 className=' neue-light mt-4'><span> <div className='w-[24px] h-[24px]  bg-welcome'>
      
      </div></span> To recognise institutions that have impacted lives and are still in the business of doing so
        </h2>
      </div>
        {/* card 1 */}
      <div className='text-start box p-8 mt-4'>
        <div>
            <img src={path} className='w-[72px] h-[72px] p-2'  />
        </div>
        <h2 className=' neue-light mt-4'><span> <div className='w-[24px] h-[24px] bg-welcome'>
      
      </div></span> To redirect every human we are opportune to train back on the path of a rejuvenated life
        </h2>
      </div>
        {/* card 1 */}
      <div className='text-start box p-8 mt-4'>
        <div>
            <img src={devt} className='w-[72px] h-[72px] p-2'  />
        </div>
        <h2 className=' neue-light mt-4'><span> <div className='w-[24px] h-[24px] bg-welcome'>
      
      </div></span> To be a catalyst for growth and development wherever we are called to train.
        </h2>
      </div>



    </section>
  )
}

export default Mission
