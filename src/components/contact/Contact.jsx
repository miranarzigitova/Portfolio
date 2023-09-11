import React from 'react'
import './contact.css'
import { useRef } from 'react'
import { useState } from 'react'
import emailjs from 'emailjs-com'
import {BsEnvelope} from 'react-icons/bs'
import {FaHatWizard} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'


const Contact = () => {
  const form = useRef();
  const [msg, setMsg] = useState("");
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_k21tg8s', 'template_8aq38hi', form.current, '5SzJoWUkRHKf1tpY1')
    setMsg("Message")
    e.target.reset()
  };
  return (
    <section id='contact'>
      <h2 className='text-light'>Contacts</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <BsEnvelope className="contact__option-icon"/>
            <h4>E-mail</h4>
            <h5>qwerty.test@gmail.com</h5>
            <a href="#">Message</a>
          </article>
          <article className="contact__option">
            <FaHatWizard className="contact__option-icon"/>
            <h4>Site</h4>
            <h5>GitHub</h5>
            <a href="#" target="_blank" rel="noopener noreferrer">git.com</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon"/>
            <h4>WhatsApp</h4>
            <h5>+996999999999</h5>
            <a href="#" target="_blank" rel="noopener noreferrer">Message</a>
          </article>
        </div>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email" required />
            <textarea name="message" rows="7" required placeholder="Text"></textarea>
            <button type="submit" className="btn btn-primary">Send</button><span>{msg}</span>
          </form>
      </div>
    </section>
  )
}

export default Contact