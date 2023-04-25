import React, {useEffect, useState} from 'react'
import { SliderData } from './SliderData';
import Image from 'next/image';
import {FaArrowCircleLeft} from 'react-icons/fa';
import {FaArrowCircleRight} from 'react-icons/fa';
import { Zoom } from 'react-slideshow-image';

const Slider = ({ slides }) => {
const [current, setCurrent] = useState(0)
const length = slides.length

const nextSlide = () => {
    setCurrent(current === length - 1 ? 0: current + 1)
}
const prevSlide = () => {
    setCurrent(current === 0 ? length - 1: current - 1)
}

if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
}

//Image that is to the index -1 or +1 of the current is shown to the left and right, transparent

  return (

    <div className='justify-center items-center max-w-[600px] mx-auto relative'>
    <div id='gallery' className='absolute top-[-6em]'/>
        <h1 className='text-2xl font-bold text-center p-4 px-0 py-4 text-black'> Gallery </h1>
        <div className='relative flex justify-center p-4'>

        <FaArrowCircleLeft onClick={prevSlide}  className='absolute top-[50%] left-[30px] text-black/40 sm:text-black/40 cursor-pointer select-none z-[5] ' size={40}/>
                
        <FaArrowCircleRight onClick={nextSlide} className='absolute top-[50%] right-[30px] text-black/40 sm:text-black/40 cursor-pointer select-none z-[5] ' size={40}/>

            {SliderData.map((slide, index) => {
                return (
                    <div className={(index === current ? 'opacity-[1] transform-gpu scale-110 duration-1000': 'opacity-0')}  key={index}>


                      <img src={slide.image} 
                        alt="Something should be here"
                        className= {(index!== current && "hidden ") + 'rounded-xl mt-9'}
                        width={400}
                        height={200}/>
                    
                      
                    
                </div>
            )  ;
            })}
        </div>
    </div>
  )
}

export default Slider;