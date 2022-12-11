import React from 'react'
import DecorationAssets from '../../atoms/decorationAssets/decorationAssets'
import ContactForm from '../contactForm/contactForm'
const ContactUsForm = () => {
  return (
        <div className='contactUsForm'>
          <h4 className='contactUsFormTitle'>Skontaktuj się z nami</h4>
          <DecorationAssets />
          <ContactForm />
        </div>
  )
}

export default ContactUsForm
