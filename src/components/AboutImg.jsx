import React from 'react'

const AboutImg = ({aboutImages}) => {
        return (
          <div className='relative'>
              <img src={aboutImages} alt='/' className='w-full h-full aspect-4/3' layout='responsive'  />
              <div className='flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-white/30 group ease-in duration-300 '>
          </div>
          </div>
        )
      }

export default AboutImg