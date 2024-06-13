import React, { useState } from 'react'
import styles from '../../style'
import { cancel,  open } from '../../assets';
import { Link } from 'react-router-dom';
import Announcement from './Announcement';


const Register = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
  setShowForm (!showForm)
  };
 
 
 
   return (
     <section id='register ' className={`${styles.paddingX} mt-20 mb-20 p-4`}>
        <div className={`${styles.boxWidth}`}>
      <Announcement />
     
     <h2 className=' neue-bold text-[24px]  mt-10 md:w-[1020px] sm:w-[470px]'>
         
        To Participate 
       </h2>
       
        
   <div className=''>
 
   
     <div className=' '>



 
    <button onClick={toggleForm} className='neue-ligh font-normal text-[20px] flex'>
      <button className='mt-4 circle text-white neue-bold mr-4'>01</button> <span className='mt-4 mr-4'>Fill out the form below </span>
    <img src={showForm ? cancel : open } className='w-[8%] mt-6' />
    </button> 

   
      
    
   </div>
   
 
   {showForm && (
 
     <div className={`${styles.flexCenter} justify-content-center mt-10 mb-5 `}>
       <div className='mx-auto text-center '>
       {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfSHzjLdoicTX1ZOEfGmRkK_zW3s-4-q3cpzGDdg-E9R1egHw/viewform?embedded=true" 
       width="640" height="1280" frameborder="0" marginheight="0" marginwidth="0" className='forms'>Loading Form</iframe>  */}
<iframe src="https://docs.google.com/forms/d/e/1FAIpQLScAxqwhw9EGUjoOHxANVyJdUf7i9urHgo9xYI2qX6-E02qTiw/viewform?embedded=true" width="640" height="1280" 
frameborder="0" marginheight="0" marginwidth="0" className='forms' >Loading…</iframe>
       </div>
     </div>
 
 
   )}
     </div>
     <h2 className=' neue-bold text-[24px]  mt-10 md:w-[1020px] sm:w-[470px]'>
         
         Make Payment
       </h2>

   <button  className='neue-ligh mt-5 font-normal text-[20px] flex'>
     <button className='mt-4 circle text-white neue-bold mr-4'>02</button> <span className='mt-4 mr-4'>Click on the link below </span>
    
   </button> 

     </div>
     </section>
 
   )
 }
export default Register