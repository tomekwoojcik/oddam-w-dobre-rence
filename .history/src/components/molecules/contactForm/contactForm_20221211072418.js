import React from 'react'
import InputContactForm from '../../atoms/inputContactForm/inputContactForm'
import TextAreaInput from '../../atoms/textAreaInput/textAreaInput'

const ContactForm = () => {
  return (
      <form className='contactForm'>
          <InputContactForm type={'text'} labelText={'Wpisz swoje imię'} placeholderText={'Krzysztof'} />
          <InputContactForm type={'email'} labelText={'Wpisz swój mail'} placeholderText={'abc@xyz.pl'} />
          <TextAreaInput labelText={'Wpisz swoją wiadomość'} placeholderText={''} />
      </form>
  )
}

export default ContactForm
