import React, { useContext } from 'react'
import InputContactForm from '../../atoms/inputContactForm/inputContactForm'
// import InputContactFormEmail from '../../atoms/InputContactFormEmail/InputContactFormEmail'
import TextAreaInput from '../../atoms/textAreaInput/textAreaInput'
import DatabaseContext from '../../context/databaseContext'
const ContactForm = () => {
  const { setUserName, setUserEmail, setMessage, userEmail, userName, message, sentDataContactUs, inputError } = useContext(DatabaseContext)
  return (
    <form id='contact'  className='contactForm'>
      <div className='rowForm'>
        <InputContactForm handleInput={setUserName} value={userName} type={'text'} labelText={'Wpisz swoje imię'} placeholderText={'Krzysztof'} />
        <InputContactForm handleInput={setUserEmail} value={userEmail} type={'email'} labelText={'Wpisz swój email'} placeholderText={'abc@xyz.pl'} />
      </div>
      <TextAreaInput value={message} handleInput={setMessage} labelText={'Wpisz swoją wiadomość'} placeholderText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'} />
      <button onClick={(e) => { sentDataContactUs(e) }} className='formButton'>Wyślij</button>
      {inputError && <p className='inputError'>{inputError}</p>}
    </form>
  )
}

export default ContactForm
