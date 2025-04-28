import React from 'react'
import ContactMap from '../components/contact/ContactMap'
import ContactForm from '../components/contact/ContactForm'
import Waitlist from '../components/home/Waitlist'
import ShopHero from '../components/shop/ShopHero'

const Contact = () => {
  return (
  <>
  
  
  <ShopHero tittle="Contact Us"/>
  <ContactMap/>
  <ContactForm/>
  <Waitlist/>
  
  </>
  )
}

export default Contact
