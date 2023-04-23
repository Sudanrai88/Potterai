import React from 'react'
import Hero2 from '@/components/Hero2'
import AboutExplan from '@/components/AboutExplan'

function About() {
  return (
    <div className='secondBack z-10'>
      <Hero2 heading={'About me'} description={'This is about why I love pots and stuff' }/>
      <AboutExplan />
    </div>

  )
}

export default About