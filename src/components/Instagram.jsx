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
        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 p-4'>
            <InstagramImg socialImg={IgImg1} />
            <InstagramImg socialImg={IgImg2} />
            <InstagramImg socialImg={IgImg3} />
            <InstagramImg socialImg={IgImg4} />
            <InstagramImg socialImg={IgImg5} />
            <InstagramImg socialImg={IgImg6} />
            <InstagramImg socialImg={IgImg7} />
            <InstagramImg socialImg={IgImg8} />
        </div>
    </div>
  )
}

export default Instagram;