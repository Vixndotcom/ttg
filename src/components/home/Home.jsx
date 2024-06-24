import React from 'react'
import Hero from './Hero'
import styles from '../../style'
import { arrow,  mission, vision } from '../../assets'
import Welcome from './Welcome'
import Choice from './Choice'
import Mission from './Mission'
import Vision from './Vision'
import Image from './Image'
import Works from './Works'
import { Link } from 'react-router-dom'

import TopTickets from './TopTickets'


function Home() {
  return (
    <div className=' w-full  overflow-hidden '>
      
      <div className={`${styles.flexStart} bg-hero`}>
    <div className={`${styles.boxWidth}`}>
      <Hero />
    </div>
      </div>

     <div className='bg-top w-[100%] h-[200px] '>
      <TopTickets/>
     </div>

      < div className={` ${styles.paddingX} ${styles.flexStart} bg-welcome  `}>
      
      <div className={`${styles.boxWidth}  `}> 
 


      < Welcome />
   
    {/* button: */}
       <button className='p-4 get-started cursor-pointer mb-10 flex learn'>
        <Link to ='/about'><div className='flex flex-row'><h2 className='neue-bold cursor-pointer  text-[20px] text-white mt-1'>Learn More</h2>
        <img src={arrow} className='w-[32px] h-[32px] mx-4 ' />
        </div> </Link>
      </button>
       
       
        
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
   
<h2 className='text-[40px] text-black neue-bold mx-2'>
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
       <img src={vision} alt="" className='w-[64px] h-[64px] mb-2'/>
<h2 className='text-[40px] text-black neue-bold mx-2'>
        Our Vision
        </h2>

        
        </div>
      < Vision/>
   
    
       
       
        
      </div>
      </div> 

      
     <div className={`${styles.boxWidth} mt-10 bg-welcome`}>
      <Image />
     </div>

     
< div className={`  ${styles.flexCenter} bg-white `}>
      
      <div className={`${styles.boxWidth}  `}> 
      
      <h2 className='text-black mt-10 mb-4 text-[40px] p-2 text-center neue-bold '>
        Frequently asked questions
        </h2> 
      
       < Works /> 
      
      
       
       
        
      </div>
      </div>  
       
       <div className={`${styles.boxWidth} mb-20`}>
       <button className='reg text-[20px] text-white text-center mx-auto neue-regular flex flex-row  '>
        <Link to ='/register' className='neue-regular text-center mx-8 flex flex-row cursor-pointer '>Register Today!
        <img src={arrow} alt="" className=' w-[12%] mx-4 mb-3'/>
        </Link>
        
    </button>
       </div>



    </div>
  )
}

export default Home
