import React from 'react'
import AboutExplan from '@/components/AboutExplan'
import Hero from '@/components/Hero'

function About() {
  return (
    <div className='secondBack z-10'>
      <Hero heading={'About me'} description={'This is about why I love pots and stuff' } image={'https://i.imgur.com/RUwU1Zd.jpg'}/>
      <AboutExplan />
    </div>
  )
}

export default About