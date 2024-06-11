import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {nav} from '../constants'
import { icon, menu, close, black, arrow } from '../assets'

export const Navbar = () => {
  const[navList, setNavList] = useState (false);  
  const [active, setActive] = useState("Home");
 
 
 const handleSelection =() => {
  setNavList(false);
 
 };
 



  return (
    <>
    <navbar classname='nav-section xl:w-[40%]  md:w-[80%]  sm:w-[88%] ss:w-[100%]  top-0 w-full z-[999] '>
   <div className='w-full flex py-4 justify-between items-center navbar bg-transparent '>
    
{/* logo */}
<div className='flex flex-row z-[999]  '>
<img src={icon} alt="" className='w-[64px] h-[64px]'/>
<h4 className='text-[28px] green mt-4 neue-bold '>
  TitoGems
</h4>
</div>
{/* logo */}

{/* list items */}
<div className='mr-4'>
<ul className='sm:flex hidden list-none justify-between items-center flex-1'> 
   {nav.map((list, index) => (
            <li key= {index} className={`font-poppins font-normal cursor-pointer text-[20px]
            black  ${index === nav.length - 1 ? 'mr-0' : 'mr-10'} `} onClick={() => setActive(list.text)} >
            <Link to={list.path}>{list.text}</Link>
            </li>
          )
           
          
          
          )}

         </ul>

      

{/* toggle */}

 {/* toggle */}

 <div className='sm:hidden flex flex-1 justify-end '>
  
<img src={navList ? close : menu} alt=""  className='w-[112px] h-[56px]  cursor-pointer  z-[99]'
onClick={() => setNavList((prev) => !prev)}/>

<div className={`${navList ? 'flex' : 'hidden'} p-6 bg-white
absolute  right-0   w-full h-screen top-0 sidebar`}>


<ul className='  list-none justify-end items-center flex-1 mt-20 '>
 {nav.map((list, index) => (
  <li key={list.path} className={`font-poppins font-normal cursor-pointer p-4 mt-4  text-[32px]
  ${index === nav.length - 1 ? 'mr-0' : 'mb-4'}`} 
  onClick={handleSelection}>


<Link to={list.path}>{list.text}</Link>


  </li>
 ))}
 
   <p className=' mt-4 green outlinee'></p> 

  <div className='flex flex-row text-center'>
    {/* <button className='reg text-white neue-regular text-[20px] '>Register Today!</button>
    <img src={black} alt="" className=' w-[10%] mx-4 mb-3'/> */}
     <button className='reg text-[20px] text-white text-center mx-auto neue-regular flex flex-row '>
        <Link to ='/contact' className='neue-regular text-center flex flex-row  '>Register Today!  
        </Link>
        <img src={arrow} alt="" className=' w-[10%] mx-4 mb-3'/>
    </button>
  </div>
 
</ul>


</div>





</div>


 {/* toggle */}



{/* toggle */}







</div>



{/* list items */}

   </div>


    


    </navbar>
    </>
  )
}
