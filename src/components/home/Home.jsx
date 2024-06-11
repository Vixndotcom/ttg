import React from 'react'
import Hero from './Hero'
import styles from '../../style'
import { heroo, mission, vision } from '../../assets'
import Welcome from './Welcome'
import Choice from './Choice'
import Mission from './Mission'
import Vision from './Vision'


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
      
      <h2 className='text-black mt-10 mb-4 text-[40px] p-2 text-center neue-bold '>
        What Makes Us Different
        </h2> 
      
       < Choice /> 
      
      
       
       
        
      </div>
      </div>  

      < div className={` ${styles.paddingX} ${styles.flexStart}  mt-10`}>
      
      <div className={`${styles.boxWidth}  `}> 
       <div className='flex flex-row'>
   
<h2 className='text-[40px] text-black neue-bold'>
        Our Mission
        </h2>

        <img src={mission} alt="" className='w-[64px] h-[64px] mb-2'/>
        </div>
      < Mission />
   
    
       
       
        
      </div>
      </div> 

      < div className={` ${styles.paddingX} ${styles.flexStart}  mt-10`}>
      
      <div className={`${styles.boxWidth}  `}> 
       <div className='flex flex-row'>
   
<h2 className='text-[40px] text-black neue-bold'>
        Our Vision
        </h2>

        <img src={vision} alt="" className='w-[64px] h-[64px] mb-2'/>
        </div>
      < Vision/>
   
    
       
       
        
      </div>
      </div> 

      





    </div>
  )
}

export default Home
