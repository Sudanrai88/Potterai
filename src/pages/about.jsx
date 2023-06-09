import React from 'react'
import AboutExplan from '@/components/AboutPage/AboutExplan'
import Hero from '@/components/Hero'

function About() {
  return (
    <div className='secondBack z-10'>
      <Hero heading={''} description={''} image="https://imgur.com/hINwUg3.jpg"
      backgroundVH={"50vh"} showButton={false} opacity={'0.5'}/>
      
      <AboutExplan />
    </div>
  )
}

export default About