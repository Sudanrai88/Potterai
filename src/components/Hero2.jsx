import React from 'react'


function Hero2({heading, description}) {
  return (
    <div className='flex items-center justify-center h-screen mb-6 mx-4 bg-fixed bg-center bg-cover about-custom'>
        {/*Overlay*/}
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/50 z-[2]'/>
        <div className='p-5 text-white z-[2] ml-[-12rem] mt-[-8rem]'>
            <h2 className='text-5xl font-bold'>{heading}</h2>
            <p className='py-5 text-xl'>{description}</p>
            <button className='px-7 py-2 border'> Book </button>
        </div>
    </div>
  )
}

export default Hero2