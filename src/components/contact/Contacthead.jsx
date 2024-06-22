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
    <button className='neue-ligh mt-5 text-white bg-white w-[360px] h-[64px] flex flex-row'>
    <p className='neue-bold w-[290px] text-center mx-3 mt-4 text-[20px]'>+234-08028484717 </p>
    <span className='w-[70px]'>
    <a href="tel:+2348028484717">

    <img src={black} alt="" className=' w-[60%]  mt-1'/>

    </a>
    </span>
    </button>
     
     </div>
  )
}

export default Contacthead