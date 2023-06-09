import React from 'react'


function Hero({ heading, description, image, backgroundVH, showButton, opacity}) {
  const containerStyle = {
    height: backgroundVH, // Set the height of the container using the backgroundVH prop
    backgroundImage: `url(${image})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed'
  };

  const overlay = {
    height: backgroundVH, // Set the height of the overlay div using the backgroundVH prop
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: `rgba(0, 0, 0, ${opacity})`,
    zIndex: 2
  };

  return (
    <div id='homeee' className="flex  items-center justify-center relative" style={containerStyle}>
      <div className="absolute" style={overlay}/>
        <div className='p-5 text-white z-[2]  mt-[-8rem] sm:ml-[-15rem]'>
          <h2 className='text-5xl font-bold'>{heading}</h2>
              <p className='py-5 text-xl'>{description}</p>
        {showButton && <button className='px-7 py-2 border' > Book </button>}
      </div>
    </div>
  )
}

export default Hero