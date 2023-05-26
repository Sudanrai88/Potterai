import React from 'react'
import Image from 'next/image'

function Hero({ heading, description, image }) {
  return (
    <div id='homeee' className='flex items-center justify-center h-[110vh]  bg-fixed bg-center bg-cover' style={{ 'background-image': `url(${image})` }}>
      {/*Overlay*/}
      <div className='absolute h-[110vh] top-0 left-0 right-0 bottom-0 bg-black/50 z-[2]' />
      <div className='p-5 text-white z-[2]  mt-[-8rem] sm:ml-[-15rem]'>
        <h2 className='text-5xl font-bold'>{heading}</h2>
        <p className='py-5 text-xl'>{description}</p>
        <button className='px-7 py-2 border' > Book </button>
      </div>
    </div>
  )
}

export default Hero