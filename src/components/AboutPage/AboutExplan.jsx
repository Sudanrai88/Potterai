import React from 'react'
import { useState } from 'react';
import TestModal from '../TestModal';
import InstagramImg from '../InstagramImg';
import { ModalData2 } from '../ModalData';
import TheStory from "./TheStorySection";

function AboutExplan() {

  const [modalImage, setModalImage] = useState(null);

  const onClick = (socialImg) => {
    setModalImage(socialImg);
  }

  return (
    <>
   
      <TheStory  />
<div className='flex flex-col justify-center align-middle items-center mx-auto max-w-[990px]'>
      <div className='grid mx-auto px-6 mb-[150px]'>
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
    </>
  )
}

export default AboutExplan
