import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import imageByIndex from './AboutPage/imageByIndex'


const Slider = (props) => {
  const { slides, options } = props
  const [emblaRef] = useEmblaCarousel(options, [Autoplay()])

  return (

    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container"> 
        {/*A new array where slides is mapped according to the index?*/}
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">
                <span>{index + 1}</span>
              </div>
              <Image
                loading='lazy'
                quality={60}               
                className="embla__slide__img"
                src={imageByIndex(index)}    
                alt="AHHHHHHHHH"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Slider

