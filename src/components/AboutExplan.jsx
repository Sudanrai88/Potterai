import React from 'react'
import { useState } from 'react';
import TestModal from './TestModal';
import InstagramImg from './InstagramImg';
import { ModalData2 } from './ModalData';
import BlazeSlider from 'blaze-slider'

function AboutExplan() {

  const [modalImage, setModalImage] = useState(null);

  const onClick = (socialImg) => {
    setModalImage(socialImg);
  }

  return (
    <div>
      <div className='mx-auto text-center pt-24 max-w-[990px] px-6 mb-[150px]'>
        <div>
          <p className='text-3xl'>Sus.ceramics is a small pottery shop</p>
          <p className='mt-5 mb-12 text-2xl'> I am an independent beginner potterer who loves to create, design and produce unique peices of work. So creative, using it actually food taste better.</p>
        </div>
        <div className='grid gap-[5px] cursor-pointer'>
      
          <div className='grid grid-cols-2 gap-[5px]'>
            <InstagramImg onClick={onClick} socialImg={ModalData2[0].image} />
            <InstagramImg onClick={onClick} socialImg={ModalData2[1].image} />
          </div>
          <div className='grid grid-cols-4 gap-[5px]'>
            <InstagramImg onClick={onClick} socialImg={ModalData2[2].image} />
            <InstagramImg onClick={onClick} socialImg={ModalData2[3].image} />
            <InstagramImg onClick={onClick} socialImg={ModalData2[4].image} />
            <InstagramImg onClick={onClick} socialImg={ModalData2[5].image} />
          </div>
          <div className='grid grid-cols-2 gap-[5px]'>
            <InstagramImg onClick={onClick} socialImg={ModalData2[6].image} />
            <InstagramImg onClick={onClick} socialImg={ModalData2[7].image} />
          </div>
          <div className='grid grid-cols-1 gap-[5px]'>
            <InstagramImg onClick={onClick} socialImg={ModalData2[8].image} />
          </div>
          <div className='grid grid-cols-3 gap-[5px]'>
            <InstagramImg onClick={onClick} socialImg={ModalData2[9].image} />
            <InstagramImg onClick={onClick} socialImg={ModalData2[10].image} />
            <InstagramImg onClick={onClick} socialImg={ModalData2[11].image} />
          </div>
        </div>
      </div>
      {modalImage && <TestModal socialImg={modalImage} onClose={() => setModalImage(null)} />}
    </div>

  )
}

export default AboutExplan
