import React from 'react';
import InstagramImg from './InstagramImg';
import { useState } from 'react';
import TestModal from './TestModal';
import { ModalData } from './ModalData';

const Instagram = () => {

  const [modalImage, setModalImage] = useState(null);

  const onClick = (socialImg) => {
    setModalImage(socialImg);
  }
  
  return (
    <div>
      <div className='max-w-[1240px] mx-auto text-center mt-[100px] mb-[150px]'>
        <div className="m-[30px]">
          <p className='tracking-[0.1em] font-bold text-3xl mb-2 text-gray-800'> Join us on Instagram </p>
          <a className='pb-4 text-black' href='https://www.instagram.com/sus.ceramics/' target='_blank'> @SusCeramics</a>
        </div>
        <div className='grid gap-[5px] cursor-pointer'>

          <div className='grid grid-cols-3 gap-[5px]'>
            <InstagramImg showInsta= {true} onClick={onClick} socialImg={ModalData[0]} />
            <InstagramImg showInsta= {true} onClick={onClick} socialImg={ModalData[1]} />
            <InstagramImg showInsta= {true} onClick={onClick} socialImg={ModalData[2]} />
          </div>
          <div className='grid grid-cols-2 gap-[5px]'>
            <InstagramImg showInsta= {true} onClick={onClick} socialImg={ModalData[3]} />
            <InstagramImg showInsta= {true} onClick={onClick} socialImg={ModalData[4]} />
          </div>
          <div className='grid grid-cols-3 gap-[5px]'>
            <InstagramImg showInsta= {true} onClick={onClick} socialImg={ModalData[5]} />
            <InstagramImg showInsta= {true} onClick={onClick} socialImg={ModalData[6]} />
            <InstagramImg showInsta= {true} onClick={onClick} socialImg={ModalData[7]} />
          </div>
        </div>
      </div>
      {modalImage && <TestModal socialImg={modalImage} onClose={() => setModalImage(null)} />}
    </div>

  )
}

export default Instagram;