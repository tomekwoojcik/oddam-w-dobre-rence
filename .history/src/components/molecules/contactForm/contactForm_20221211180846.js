import React, { useContext } from 'react'
import InputContactForm from '../../atoms/inputContactForm/inputContactForm'
import TextAreaInput from '../../atoms/textAreaInput/textAreaInput'
const ContactForm = () => {
  const { setUserName, setUserEmail, setMessa }=useContext(DatabaseContext)
  return (
        <form className='contactForm'>
            <div className='rowForm'>
                <InputContactForm type={'text'} labelText={'Wpisz swoje imię'} placeholderText={'Krzysztof'} />
                <InputContactForm type={'email'} labelText={'Wpisz swój mail'} placeholderText={'abc@xyz.pl'} />
            </div>
          <TextAreaInput labelText={'Wpisz swoją wiadomość'} placeholderText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'} />
            <button className='formButton'>Wyślij</button>
        </form>
  )
}

export default ContactForm
