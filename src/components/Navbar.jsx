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
  <navbar classname='nav-section xl:w-[40%]  md:w-[80%]  sm:w-[88%] ss:w-[100%]   z-[999]  top-0  '>
        <div className='w-full flex py-4 justify-between items-center navbar  bg-transparent '>
    
{/* logo */}
<div className='flex flex-row logo   '>
<img src={icon} alt="" className='w-[64px] h-[64px]'/>
<h4 className='text-[28px] green mt-3 neue-bold font-bold '>
  TitoGems
</h4>
</div>
{/* logo */}

{/* list items */}
<div className='mr-4'>
<ul className='sm:flex hidden list-none justify-between items-center flex-1'> 
   {nav.map((list, index) => (
            <li key= {index} className={`neue-bold font-normal cursor-pointer text-[20px]
            green  ${index === nav.length - 1 ? 'mr-0' : 'mr-10'} `} onClick={() => setActive(list.text)} >
            <Link to={list.path}>{list.text}</Link>
            </li>
          )
           
          
          
          )}

         </ul>

      

{/* toggle */}

 {/* toggle */}

 <div className='sm:hidden flex flex-1  justify-end '>
  
<img src={navList ? close : menu} alt=""  className='w-[112px] h-[56px]   cursor-pointer  z-[99]'
onClick={() => setNavList((prev) => !prev)}/>

<div className={`${navList ? 'flex' : 'hidden'} p-2 bg-welcome
  right-0   w-full h-screen top-0 sidebar absolute`}>

<div className='mt-24'>
<ul className='  list-none justify-end items-center flex-1 mt-24  '>
 {nav.map((list, index) => (
  <li key={list.path} className={` font-medium neue-bold cursor-pointer border p-6 mt-2 bg-white  text-[32px]
  ${index === nav.length - 1 ? 'mr-0' : 'mb-4'}`} 
  onClick={handleSelection}>


<Link to={list.path}>{list.text}</Link>


  </li>
 ))}
 
   <p className='  outlinee text-[28px] neue-bold green mt-5'>Titogems <span className='neue-regular mb-1 text-white text-[16px]'>company ltd.</span></p> 

  <div className='flex flex-row text-center'>
 
  </div>
 
</ul>

</div>


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
