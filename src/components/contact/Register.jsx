import React, { useState } from 'react'
import styles from '../../style'
import { cancel,  open, poster } from '../../assets';
import { Link } from 'react-router-dom';
import Announcement from './Announcement';
import Event from './Event';
poster

const Register = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
  setShowForm (!showForm)
  };
 
 
 
   return (
     <section id='register ' >
      {/* event poster */}

      <div className='bg-welcome'>
    <Event />
      <div className='mb-10 p-8'>
        <img src={poster} alt="" className='md:w-[80%] mx-auto' />
      </div>
      </div>


      {/* event poster */}
      <div className={`${styles.paddingX} ${styles.flexCenter} flex-col mt-10 mb-20 p-4`}>
        <div className={`${styles.boxWidth}`}>
      <Announcement />
     
     <h2 className=' neue-bold text-[24px]  mt-10 md:w-[1020px] sm:w-[470px]'>
         
        To Participate 
       </h2>
       
        
   <div className=''>
 
   
     <div className=' '>



 
    <button onClick={toggleForm} className='neue-ligh font-normal text-[20px] flex'>
      <button className='mt-4 circle text-white neue-bold mr-4'>01</button>
       <p className='mt-4 mr-4 text-start'>Please fill out the form below</p> 
    <img src={showForm ? cancel : open } className='w-[8%] mt-6 mx-4' />
    </button> 

   
      
    
   </div>
   
 
   {showForm && (
 
     <div className={`${styles.flexCenter} justify-content-center mt-10 mb-5  `}>
       <div className='mx-auto text-center p-4  '>
       {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdmIvEz13_W5Ll8HcJETAhGEhqa2kEc9jL9JKFV2_Z0UX4abA/viewform?embedded=true" width="640" height="535" 
       frameborder="0" marginheight="0" marginwidth="0" className='forms'>Loading…</iframe> */}
       <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdmIvEz13_W5Ll8HcJETAhGEhqa2kEc9jL9JKFV2_Z0UX4abA/viewform?embedded=true" width="640" height="535"
        frameborder="0" marginheight="0" marginwidth="0" className='forms' >please wait…</iframe>
       </div>
     </div>
 
 
   )}
     </div>
     <h2 className=' neue-bold text-[24px]  mt-10 md:w-[1020px] sm:w-[470px]'>
         
         Buy Tickets
       </h2>

   <button  className='neue-ligh mt-5 font-normal text-[20px] flex '>
     <button className='mt-4 circle text-white neue-bold mr-4 '>02</button> <span className='mt-4 mr-4 text-start'>Click on the button below to purchase </span>
     
   </button> 
   <div className='mt-4 flex text-center mx-auto ticket-note  '>
     <a href="https://shows.ng/event/Mentorship-session-for-teenagers-and-undergraduates-234" target="_blank" rel="noopener noreferrer" className='text-white mx-auto mt-8 shadoww text-[20px] neue-bold'>Mentorship session Tickets </a>
     </div>
    
     </div>
     </div>
     </section>
 
   )
 }
export default Register