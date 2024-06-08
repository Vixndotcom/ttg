import React from 'react'
import { icon } from '../assets'
import styles from '../style'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} mt-10 bottom-0`}>
      <div className={`${styles.flexCenter} flex md:flex-row flex-col text-center `}>

    
      {/* card */}
    <div className='text-center '>
        <div className={`${styles.flexCenter} mt-5 flex flex-col  text-center`}>
        <img src={icon} className='w-[64px] h-[64px] bg-white'/>
        <h1 className='text-[28px] neue-bold   text-white mt-1'>TitoGems Company  <br />Limited</h1>  
        <br />
        </div>

        <div className='text-center'>
            
            <p className='text-[20px] neue-lightt mb-5'> Success is a Must!</p>
        </div>


        {/* links */}
        <div className={`${styles.flexCenter}`}>
              <div className='mb-5 mt-5'>
                  <h1 className='text-[28px] w-[320px] text-white neue-bold font-bold mt-5 border-t-[1px] pt-2 pb-2 border-t-[white] border-b-[1px]'>Useful Links</h1>  
                  <ul className='mt-5 flex flex-col mb-5 cursor-pointer font-semibold'>
                  <Link  className='text-[20px] mt-5 hover:text-white neue-ligh ' to='/'>Home </Link>
                  <Link  className='text-[20px] mt-5 hover:text-white neue-ligh' to='/about'>About </Link>
                  <Link  className='text-[20px] mt-5 hover:text-white neue-ligh' to='/services'>Services </Link>
                  <Link  className='text-[20px] mt-5 hover:text-white neue-ligh' to='/contact'>Contact </Link>
              </ul>
              </div>
          </div>
      
      {/* foot */}
      <div className={`${styles.flexCenter} w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] 
        border-t-[#fff] md:mt-5 mb-5 `}>

<p className="mx-auto text-center  text-[14px] text-white">
2024 Titogems. All Rights Reserved.
</p>
</div>


        {/* links */}
    </div>






      {/* card */}





     </div>




















      
    </section>
  )
}

export default Footer
