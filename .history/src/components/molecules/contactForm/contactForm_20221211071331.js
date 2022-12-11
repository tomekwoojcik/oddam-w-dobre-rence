import React from 'react'
import InputContactForm from '../../atoms/inputContactForm/inputContactForm'

const ContactForm = () => {
  return (
      <form className='contactForm'>
          <InputContactForm labelText={'Wpisz swoje imię'}/>
          <InputContactForm />
      </form>
  )
}

export default ContactForm
