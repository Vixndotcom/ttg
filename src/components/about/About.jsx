import React from 'react'
import styles from '../../style'
import AboutHead from './AboutHead'
import Motto from './Motto'
import Ceo from './Ceo'
import Image from './Image'


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

     <div className={`${styles.flexCenter}`}>
     <Image />
     </div>


     <div className={`${styles.flexCenter}`}>
      <div className='neue-light md:w-[720px] xs:w-[470px] p-4 track'>
     <p className='mt-4'>From recognition awards to parties that are already unrelentingly in the business of educating and developing talents, to impacting transformative nuggets, this is a vision that is drawn out of a dogged determination to reverse the trend of aimless drifting which is the order of the day in today's world.

You are about to be a change agent!</p>
     </div>
     </div>





    <div className={`${styles.flexStart} `}>
  <div className={`${styles.boxWidth}`}>
    <h2 className='text-black mt-10 mb-4 text-[28px] p-2 text-center neue-bold'>
        Our Team
        </h2> 

    <Ceo />
  </div>
    </div>



    
    </div>
    


  )
}

export default About
