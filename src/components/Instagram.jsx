import React from 'react';
import InstagramImg from './InstagramImg';
import IgImg1 from 'public/assets/IMG_5948.JPG'

const Instagram = () => {
  return (
    <div className='max-w-[1240px] mx-auto text-center py-24'>
        <p className='text-4xl font-bold'> Follow me on Insta!</p>
        <p className='pb-4'> @SusCeramics</p>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
            <InstagramImg socialImg={IgImg1} />
            <InstagramImg socialImg={IgImg1} />
            <InstagramImg socialImg={IgImg1} />
            <InstagramImg socialImg={IgImg1} />
            <InstagramImg socialImg={IgImg1} />
            <InstagramImg socialImg={IgImg1} />
        </div>
    </div>
  )
}

export default Instagram;