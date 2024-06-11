import React from 'react'
import styles from '../../style'
import { group } from '../../assets'

const Motto = () => {
  return (
    <section className={`${styles.flexStart}`}>
      <div className='neue-light md:w-[720px] xs:w-[470px] p-4 track'>
        <p >
        <span className='text-[36px] text-black neue-bold '>Titogems Company Limited </span> is a purpose driven company aimed at building mindsets for success and purpose fulfilment.



 </p>

 <div className='mt-4 '>
          <img src={group} alt="" className='rounded-[4px]' />
        </div>


<p className='neue-light mt-10'>
The company was birthed out of the need to groom young minds and adults alike in discovering who they really are and what makes
 them uniquely different from others.
</p>
<br />




<h2 className='mt-4 mx-auto text-center neue-bold text-black font-bold'>OUR MOTTO: Success, is a must!</h2>


        
      </div>
    </section>
  )
}

export default Motto
