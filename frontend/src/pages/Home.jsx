import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'
import AboutComps from '../components/AboutComps'
import ContactComps from '../components/ContactComps'

const Home = () => {
  return (
    <div>
      <Hero/>
      <LatestCollection/>
      <BestSeller/>
      <AboutComps/>
      <ContactComps/>
      <OurPolicy/>
      <NewsletterBox/>
    </div>
  )
}

export default Home