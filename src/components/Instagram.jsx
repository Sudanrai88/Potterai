import React from 'react';
import InstagramImg from './InstagramImg';
import IgImg1 from 'public/assets/IMG_5948.JPG'
import IgImg2 from 'public/assets/IMG_5943.JPG'
import IgImg3 from 'public/assets/IMG_5944.JPG'
import IgImg4 from 'public/assets/IMG_5945.JPG'
import IgImg5 from 'public/assets/IMG_5881.JPG'
import IgImg6 from 'public/assets/IMG_5952.JPG'
import IgImg7 from 'public/assets/IMG_6118.JPG'
import IgImg8 from 'public/assets/IMG_6119.JPG'

const Instagram = () => {
  return (
    <div className='max-w-[1240px] mx-auto text-center py-24'>
        <p className='text-4xl font-bold'> Follow me on Insta!</p>
        <p className='pb-4'> @SusCeramics</p>
        <div>
          <div className='grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-2 p-4'>
            <InstagramImg socialImg={IgImg1} />
            <InstagramImg socialImg={IgImg2} />
            <InstagramImg socialImg={IgImg3} />
          </div>
          <div className='grid col-auto grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2 p-4'>
            <div className='col-span-1 md:col-span-2 lg:col-span-4'>
              <InstagramImg socialImg={IgImg4} />
            </div>
            <div className='col-span-1 md:col-span-2 lg:col-span-4'>
              <InstagramImg socialImg={IgImg8} />
            </div>
          </div>
          <div className='grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-2 p-4'>
            <InstagramImg socialImg={IgImg6} />
            <InstagramImg socialImg={IgImg7} />
            <InstagramImg socialImg={IgImg5} />
          </div>
        
        </div>
        
    </div>
  )
}

export default Instagram;