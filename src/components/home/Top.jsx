import React, { useEffect, useState } from 'react'
import { black, top } from '../../assets';

const Top = () => {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsVisible(scrollTop > 1000);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top:0,
      behavior: 'smooth'
    });
  };

  return (
    <button className={`scroll-to-top ${isVisible ? 'visible' : ''}` } onClick={scrollTop}>
      <img src={top} alt="" className='w-[60%]'/>
      </button>
  )
}

export default Top