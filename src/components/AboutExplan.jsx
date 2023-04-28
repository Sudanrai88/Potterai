import React from 'react'
import AboutImg from './AboutImg'

function AboutExplan() {
  return (
    <div className='mx-auto text-center py-24 max-w-[990px] px-10'>
      <div>
        <p className='text-3xl'>Sus.ceramics is a small pottery shop</p>
        <p class='mt-5 mb-12 text-2xl'> I am an independent beginner potterer who loves to create, design and produce unique peices of work. So creative, using it actually food taste better.</p> 
      </div>
      <div className='grid gap-[5px] cursor-pointer'>
          <div className='grid grid-cols-2 gap-[5px]'>
            <AboutImg aboutImages={'/assets/IMG1.JPG'} />
            <AboutImg aboutImages={'/assets/IMG2.JPG'} />
          </div>
          <div className='grid grid-cols-4 gap-[5px]'>
              <AboutImg aboutImages={'/assets/IMG4.JPG'} />
              <AboutImg aboutImages={'/assets/IMG5.JPG'} />
              <AboutImg aboutImages={'/assets/IMG3.JPG'} />
              <AboutImg aboutImages={'/assets/IMG6.JPG'} />
            </div>
          <div className='grid grid-cols-2 gap-[5px]'>
            <AboutImg aboutImages={'/assets/IMG7.JPG'} />
            <AboutImg aboutImages={'/assets/IMG8.JPG'} />
          </div>
          <div className='grid grid-cols-1 gap-[5px]'>
            <AboutImg aboutImages={'/assets/IMG11.JPG'} />
          </div>
          <div className='grid grid-cols-3 gap-[5px]'>
            <AboutImg aboutImages={'/assets/IMG9.JPG'} />
            <AboutImg aboutImages={'/assets/IMG10.JPG'} />
            <AboutImg aboutImages={'/assets/IMG12.JPG'} />
          </div>
    </div>
    </div>

  )
}

export default AboutExplan
