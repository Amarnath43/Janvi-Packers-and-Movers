import React from 'react'
import Hero from '@/components/home/Hero/Hero'
import QuoteFormSection from '@/components/home/Hero/Form'
import TrustStats from '@/components/home/Hero/Trust'
import ServicesSection from '@/components/home/Hero/Services'
import Branches from '@/components/home/Branches'
import FAQSection from '@/components/home/FAQ'
import CTASection from '@/components/home/CTA'
import About from '@/components/home/About'


const HomePage = () => {
  return (
    <div>
      <Hero/>
      <QuoteFormSection/>
      <TrustStats/>
      <ServicesSection/>
      <Branches/>
      <About/>
      <FAQSection/>
      <CTASection/>
      
    </div>
  )
}

export default HomePage
