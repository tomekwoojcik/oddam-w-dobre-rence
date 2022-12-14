import React, { useContext } from 'react'
import InputContactForm from '../../atoms/inputContactForm/inputContactForm'
// import InputContactFormEmail from '../../atoms/InputContactFormEmail/InputContactFormEmail'
import TextAreaInput from '../../atoms/textAreaInput/textAreaInput'
import DatabaseContext from '../../context/databaseContext'
const ContactForm = () => {
  const { setUserName, setUserEmail, setMessage, userEmail, userName, message, sentDataContactUs, inputError } = useContext(DatabaseContext)
  return (
    <form className='contactForm'>
      <div className='rowForm'>
        <InputContactForm handleInput={setUserName} value={userName} type={'text'} labelText={'Wpisz swoje imię'} placeholderText={'Krzysztof'} />
        <InputContactForm handleInput={setUserEmail} value={userEmail} type={'email'} labelText={'Wpisz swój email'} placeholderText={'abc@xyz.pl'} />
        {/* <InputContactFormEmail handleInput={setUserEmail}  type={'email'} labelText={'Wpisz swój mail'} placeholderText={'abc@xyz.pl'} /> */}
      </div>
      <TextAreaInput value={message} handleInput={setMessage} labelText={'Wpisz swoją wiadomość'} placeholderText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'} />
      <button onClick={() => { sentDataContactUs() }} className='formButton'>Wyślij</button>
      {}
    </form>
  )
}

export default ContactForm
