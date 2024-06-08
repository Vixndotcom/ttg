import React from 'react'
import Hero from './Hero'
import styles from '../../style'
import { heroo } from '../../assets'
import Welcome from './Welcome'
import Choice from './Choice'


function Home() {
  return (
    <div className='bg-white w-full overflow-hidden'>
      <div className={`${styles.flexStart}`}>
    <div className={`${styles.boxWidth}`}>
      <Hero />
    </div>
      </div>




      < div className={` ${styles.paddingX} ${styles.flexStart}  mt-5`}>
      
      <div className={`${styles.boxWidth}  `}> 
 


      < Welcome />
   
    
       
       
        
      </div>
      </div> 

      

< div className={`  ${styles.flexCenter} bg-gry `}>
      
      <div className={`${styles.boxWidth}  `}> 
      
      <h2 className='text-black mt-10 mb-4 text-[28px] p-2 text-center'>
        WHAT MAKES US DIFFERENT
        </h2> 
      
       < Choice /> 
      
      
       
       
        
      </div>
      </div>  
    </div>
  )
}

export default Home
