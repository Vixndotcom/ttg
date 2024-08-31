import React from 'react'
import styles from '../../style'
import { four, one, three, two } from '../../assets'

const Slist = () => {
  return (
   <section className={`${styles.flexCenter} mx-auto flex-col`}>
    <div className={`${styles.flexCenter} flex flex-col mx-auto `}>
     <img src={three} alt="" className='w-[80%] h-[50%] img-shadow'/>
     <img src={four} alt="" className='w-[50%] h-[45%] img-shadow mt-5'/>
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