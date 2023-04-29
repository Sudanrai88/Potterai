import React from 'react';
import InstagramImg from './InstagramImg';

const Instagram = () => {
  return (
    <div className='max-w-[1240px] mx-auto text-center mt-[100px]'>
      <div className="m-[30px]">
        <p className='tracking-[0.1em] font-bold text-3xl mb-2 text-gray-800'> Join us on Instagram </p>
        <p className='pb-4 text-black' > @SusCeramics</p>
      </div>
      <div className='grid gap-[5px] cursor-pointer'>
          <div className='grid grid-cols-3 gap-[5px]'>
            <InstagramImg socialImg='/assets/IMG_5948.JPG' />
            <InstagramImg socialImg={'/assets/IMG_5943.JPG'} />
            <InstagramImg socialImg={'/assets/IMG_5944.JPG'} />
          </div>
          <div className='grid grid-cols-2 gap-[5px]'>
              <InstagramImg socialImg={'/assets/IMG_5945.JPG'} />
              <InstagramImg socialImg={'/assets/IMG_6119.JPG'} />
          </div>
          <div className='grid grid-cols-3 gap-[5px]'>
            <InstagramImg socialImg={'/assets/IMG_5952.JPG'} />
            <InstagramImg socialImg={'/assets/IMG_6118.JPG'} />
            <InstagramImg socialImg={'/assets/IMG_5881.JPG'} />
          </div>
    </div>
    </div>
  )
}

export default Instagram;