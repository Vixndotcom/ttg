import React, { useState } from 'react'
import styles from '../../style'
import { arrow, cancel, open } from '../../assets';

const Works = () => {

const [showItem, setItem] = useState(false);

const toggleItem = () => {
    setItem(!showItem)
};
const [showItemm, setItemm] = useState(false);

const toggleItemm = () => {
    setItemm(!showItemm)
};
const [showItemmm, setItemmm] = useState(false);

const toggleItemmm = () => {
    setItemmm(!showItemmm)
};




  return (
    <section className={`${styles.flexCenter} flex flex-row`}>
      
 <div className='mb-5  mx-auto mt-5'>

{/* card */}

<div className='text-center alignitems-center mx-auto justify-content-center'>
    <div className={`${styles.flexCenter} flex`}>
       <div className=' border-step p-4 mx-auto'>
            <button onClick={toggleItem} className='flex text-[20px] p-4'>
                <h2 className=' mr-20 flex  flex-row text-[20px] track font-medium '>
                <span><div className='w-[24px] h-[24px]  bg-welcome mr-4'>
      
               </div></span>
                    what we  do?
                </h2>
                <img src={showItem ? cancel : open} className='ml-20 w-[5%] mt-2'/>
            </button>
       </div>
    </div>

{showItem && (
<div>
    <p className='max-[470px] mt-5 mx-auto text-start p-4 neue-light'>
       We are a motivational brand, we host coaching events to build and foster leadership skills.
    </p>
</div>
    )}
</div>
{/* card */}
{/* card */}

<div className='text-center alignitems-center mx-auto justify-content-center'>
    <div className={`${styles.flexCenter} flex`}>
       <div className=' border-step p-4 mx-auto'>
            <button onClick={toggleItemm} className='flex text-[20px] p-4'>
                <h2 className=' mr-20 flex  flex-row text-[20px] track font-medium '>
                <span><div className='w-[24px] h-[24px]  bg-welcome mr-4'>
      
               </div></span>
                    How to Register
                </h2>
                <img src={showItemm ? cancel : open} className='ml-11 w-[5%] mt-2'/>
            </button>
       </div>
    </div>

{showItemm && (
<div>
    <p className='max-[470px] mt-5 mx-auto text-start p-4 neue-light flex flex-row '><span><div className='w-[8px] h-[8px] rounded-full bg-welcome mr-2 mt-1'></div></span>
       Click on the register button
    </p>
    <p className='max-[470px] mt-2 mx-auto text-start p-4 neue-light flex flex-row '><span><div className='w-[8px] h-[8px] rounded-full bg-welcome mr-2 mt-1'></div></span>
       Fill out the google form
    </p>
    <p className='max-[470px] mt-2 mx-auto text-start p-4 neue-light  flex flex-row'><span><div className='w-[8px] h-[8px] rounded-full bg-welcome mr-2 mt-1'></div></span>
       Click on Ticket link to make payment
    </p>
</div>
    )}
</div>
{/* card */}
{/* card */}

<div className='text-center alignitems-center mx-auto justify-content-center'>
    <div className={`${styles.flexCenter} flex`}>
       <div className=' border-step p-4 mx-auto'>
            <button onClick={toggleItemmm} className='flex text-[20px] p-4'>
                <h2 className=' mr-20 flex  flex-row text-[20px] track font-medium '>
                <span><div className='w-[24px] h-[24px]  bg-welcome mr-4'>
      
               </div></span>
                    How much is a ticket
                </h2>
                <img src={showItemmm ? cancel : open} className=' w-[5%] mt-2'/>
            </button>
       </div>
    </div>

{showItemmm && (
<div>
    <p className='max-[470px] mt-5 mx-auto text-start p-4 neue-light'>
       A ticket costs 5,000 Naira only.
    </p>
</div>
    )}
</div>
{/* card */}







 </div>

    </section>
  )
}

export default Works