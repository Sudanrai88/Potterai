import React from 'react'
import { Close } from '@mui/icons-material'
import { useState } from 'react';


function TestModal({ socialImg, onClose }) {

  return (
    <div className="modal-container fixed top-[0]  w-[100%] h-[100%] bg-black/40 z-50" onClick={onClose}>

      <div className="close-modal absolute right-[15px] text-white z-20" onClick={onClose}> <Close fontSize='large' /></div>
      <div className='aspect-square sm:aspect-4/3  absolute modal bg-white        min-h-[98%] min-w-[98%]      sm:min-h-[65%] sm:min-w-[70%]  max-w-[80%] max-h-[80%]              top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 m-auto flex  flex-col sm:flex-row ' onClick={(dontWantThisToHappen) => {dontWantThisToHappen.stopPropagation(); return false;}}>
        <div className="modal-image h-[60%] w-[100%] sm:h-[100%] sm:w-[60%]  ">
          <img className="h-[100%] w-[100%] object-cover" src={socialImg} alt='/' />
        </div>
        <div className="modal-content h-[40%] w-[100%] sm:w-[40%] sm:h-[100%]">
          <p> Comments  </p>
        </div>
      </div>



    </div>


  )
}

export default TestModal