import React from 'react'
import Image from 'next/image'

const AboutImg = ({aboutImages}) => {
        return (
          <div className='relative'>
              <Image src={aboutImages} alt='/' className=' aspect-4/3' layout='responsive' width={100} height={100} />
              <div className='flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-white/30 group ease-in duration-300 '>
          </div>
          </div>
        )
      }

export default AboutImg