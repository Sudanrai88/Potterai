import React from 'react'
import AboutExplan from '@/components/AboutPage/AboutExplan'
import Hero from '@/components/Hero'

function About() {
  return (
    <div className='secondBack z-10'>
      <Hero heading={''} description={''} image={'https://i.imgur.com/RUwU1Zd.jpg'}
      backgroundVH={"50vh"} showButton={false}/>
      <AboutExplan />
    </div>
  )
}

export default About