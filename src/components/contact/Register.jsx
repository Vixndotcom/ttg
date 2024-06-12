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
     <section id='register ' className={`${styles.paddingX} mt-20 p-4`}>
        <div className={`${styles.boxWidth}`}>
      <Announcement />
     
     <p className=' neue-bold text-[24px]  mt-10 md:w-[1020px] sm:w-[470px]'>
         
        To participate 
       </p>
       

   <div className='sm:px-16 px-4'>
 
   
     <div className='p-4 '>



 
    <button onClick={toggleForm} className='neue-ligh font-normal text-[20px] flex'> <span className='mt-4 mr-4'>Fill out the form below </span>
    <img src={showForm ? cancel : open } className='w-[8%] mt-6' />
    </button> 
 
    
   </div>
   
 
   {showForm && (
 
     <div className={`${styles.flexCenter} justify-content-center mt-10 mb-5 `}>
       <div className='mx-auto text-center '>
       {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfSHzjLdoicTX1ZOEfGmRkK_zW3s-4-q3cpzGDdg-E9R1egHw/viewform?embedded=true" 
       width="640" height="1280" frameborder="0" marginheight="0" marginwidth="0" className='forms'>Loading Form</iframe>  */}

       </div>
     </div>
 
 
   )}
     </div>
     </div>
     </section>
 
   )
 }
export default Register