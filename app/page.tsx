import ContactForm from '@/components/Contact'
import Firstpart from '@/components/Firstpart'

import ServicesSection from '@/components/Services'

import React from 'react'


const page = () => {
  return (
    <>
      <Firstpart />
      <ServicesSection />
      <div className='flex mx-6 my-8'>
        <ContactForm />
      </div>
      
    </>
  )
}

export default page

