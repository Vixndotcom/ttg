import React from 'react'
import { ceo, cert, group } from '../../assets'

const Ceo = () => {
  return (
    <section>
      <div className='neue-light md:w-[720px] xs:w-[470px] p-4 track mx-auto'>
      <p >
       
      <span className='text-[36px] neue-bold text-black '>Tolulope Abolade Bello </span> 
is a Nigerian certified management consultant with several years of experience as a customer relationship officer in a financial institution.

<div className='mt-4 text-center flex flex-col '>
  <img src={ceo} alt="mrs-tolu" className='rounded-[4px]' />
  <h2 className='mt-4 mx-auto text-center neue-bold text-black font-bold'>Mrs Tolulope Abolade Bello</h2>
  <p>CEO Titogems</p>
</div>

<p className='mt-10 mb-4'>
She has been on speaking platforms as a guest for insightful teachings on motivational topics.

She is also a self motivated coach with a passion to grooming others to being the best version of themselves.</p>


        <div>
          <img src={cert} alt="" className='rounded-[4px]' />
        </div>

<h2 className='mt-10 mx-auto text-center neue-bold text-black font-bold'>In Her Words <br /><span className='text-red-500 font-normal text-[28px] mt-4 borderline'>" Success in your world without you is incomplete"</span>
  
  </h2>

        </p>


       
      </div>
    </section>
  )
}

export default Ceo
