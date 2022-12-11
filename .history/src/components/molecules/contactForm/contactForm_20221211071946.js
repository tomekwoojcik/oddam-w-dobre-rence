import React from 'react'
import InputContactForm from '../../atoms/inputContactForm/inputContactForm'

const ContactForm = () => {
  return (
      <form className='contactForm'>
          <InputContactForm type={'text'} labelText={'Wpisz swoje imię'} placeholderText={'Krzysztof'} />
          <InputContactForm type={'email'} labelText={'Wpisz swój mail'} placeholderText={'abc@xyz.pl'} />
      </form>
  )
}

export default ContactForm
