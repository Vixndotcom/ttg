import React from 'react'
import styles from '../../style'
import { arrow, black } from '../../assets'

const Contacthead = () => {
  return (
    <div className={`flex-1 ${styles.flexStart} flex-col text-center p-8 textt`}>
    <div className='w-[24px] h-[24px] bg-welcome text-start'>
     
    </div>

    <h2 className='text-black text-[40px] neue-bold mb-10 text-white text-start'>
     Contact Us Today!
      </h2>
     
      <h2 className='text-[28px] neue-bold text-white'>
        Phone Number
    </h2>
    <button className='neue-ligh mt-5 text-white bg-white w-[320px] h-[64px] flex flex-row'>
    <p className='neue-bold text-center mx-6 mt-4 text-[20px]'>+234-0802848717 </p>
    <img src={black} alt="" className=' w-[10%] mx-2 mt-2 mb-3'/>
    </button>
     
     </div>
  )
}

export default Contacthead