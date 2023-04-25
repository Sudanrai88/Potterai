import React from 'react';
import InstagramImg from './InstagramImg';

const Instagram = () => {
  return (
    <div className='max-w-[1240px] mx-auto text-center py-24'>
        <p className='text-4xl font-bold text-black'> Follow me on Insta!</p>
        <p className='pb-4 text-black' > @SusCeramics</p>
        <div>
          <div className='grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-2 p-4'>
            <InstagramImg socialImg='/assets/IMG_5948.JPG' />
            <InstagramImg socialImg={'/assets/IMG_5943.JPG'} />
            <InstagramImg socialImg={'/assets/IMG_5944.JPG'} />
          </div>
          <div className='grid col-auto grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2 p-4'>
            <div className='col-span-1 md:col-span-2 lg:col-span-4'>
              <InstagramImg socialImg={'/assets/IMG_5945.JPG'} />
            </div>
            <div className='col-span-1 md:col-span-2 lg:col-span-4'>
              <InstagramImg socialImg={'/assets/IMG_6119.JPG'} />
            </div>
          </div>
          <div className='grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-2 p-4'>
            <InstagramImg socialImg={'/assets/IMG_5952.JPG'} />
            <InstagramImg socialImg={'/assets/IMG_6118.JPG'} />
            <InstagramImg socialImg={'/assets/IMG_5881.JPG'} />
          </div>
        
        </div>
        
    </div>
  )
}

export default Instagram;