import React from 'react';
import Image from 'next/image';
import { FaInstagram } from 'react-icons/fa';
import { useState } from 'react';
import TestModal from './TestModal';


const InstagramImg = ({ socialImg, onClick, showInsta = false}) => {


  return (
    <div>
      <div className='relative' onClick={() => onClick(socialImg)}>

        <Image src={socialImg} alt='/' className={(showInsta ? 'aspect-square object-cover' : 'aspect-[4/3]')} layout='responsive' width={100} height={100} quality={50}/>
        {/* Overlay*/}

        {showInsta ? <div className='flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/50 group ease-in duration-300'>
          <p className='text-gray-300 hidden group-hover:block'> <FaInstagram size={30} /> </p>
        </div> : <div className='flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-white/30 group ease-in duration-300 '/> }

        
      </div>
    </div>
  )
}

export default InstagramImg