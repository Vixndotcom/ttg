import React from 'react'
import styles from '../../style'
import { four, one, three, two } from '../../assets'

const Slist = () => {
  return (
   <section className={`${styles.flexCenter} mx-auto flex-col`}>
    <div className={`${styles.flexCenter} flex flex-row gap-2 mx-auto `}>
     <img src={three} alt="" className='w-[55%] h-[60%]'/>
     <img src={four} alt="" className='w-[40%] h-[45%]'/>
    </div>
    <div>
        <h2 className='text-center neue-bold text-[32px] mt-5'>
            BECOME AN <br />
            AGENT OF CHANGE
        </h2>
    </div>
   </section>
  )
}

export default Slist