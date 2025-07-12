import React from 'react'
import HeroSection from '../components/HeroSection'
import MainSection from '../components/MainSection'
import MainSection1 from '../components/MainSection1'
import MainSection2 from '../components/MainSection2'
import MainSection3 from '../components/MainSection3'
import LastSection from '../components/LastSection'
import FloatingWhatsapp from '../components/FloatingWhatsapp'

function Home() {
  return (
    <div className='relative '>
       <HeroSection />
      <MainSection/>
      <MainSection1/>
      <MainSection2/>
      <MainSection3/>
      <LastSection/>
      <FloatingWhatsapp/>
    </div>
  )
}

export default Home
