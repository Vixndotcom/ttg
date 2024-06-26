import React from 'react'
import styles from '../../style'
import AboutHead from './AboutHead'
import Motto from './Motto'
import Ceo from './Ceo'
import Image from './Image'
import Quote from './Quote'


function About ()  {
  return (
    <div className=' w-full overflow-hidden'>
    <div className={`${styles.flexStart} bg-about`}>
  <div className={`${styles.boxWidth}`}>
    <AboutHead />
  </div>
    </div>


    <div className={`${styles.flexStart} `}>
  <div className={`${styles.boxWidth}`}>
    <Motto />
  </div>
    </div>

     <div className={`${styles.flexCenter} bg-welcome`}>
     <Image />
     </div>


     <div className={`${styles.flexCenter} mb-10 mt-5`}>
      <div className='neue-light md:w-[720px] xs:w-[470px] p-8 pbox track'>
     <p className='neue-light  text-center w-[470px]'> </p>
<p className='mt-1'><span className='text-[28px] neue-bold text-green'>This is a vision </span>
that is drawn out of a dogged determination to reverse the trend of aimless drifting which is
 the order of the day in today's world.

You are about to be a <span className='text-[20px] neue-bold text-green'>change agent!</span>
</p>
     </div>
     </div>





    <div className={`${styles.flexStart} `}>
  <div className={`${styles.boxWidth} mt-5`}>
    <h2 className='text-black mt-10 mb-5 text-[28px] p-2 text-center neue-bold underborder w-[200px] '>
        Our Team
        </h2> 

    <Ceo />
  </div>
    </div>

   <div className={`${styles.flexCenter} bg-white`}>
     <Quote />
   </div>

    
    </div>
    


  )
}

export default About
