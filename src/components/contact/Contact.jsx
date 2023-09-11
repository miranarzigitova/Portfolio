import React from 'react'
import './contact.css'
import {BsEnvelope} from 'react-icons/bs'
import {FaGithubSquare} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'
import {FaTelegramPlane} from 'react-icons/fa'


const Contact = () => {
 
  return (
    <section id='contact'>
      <h2 className='text-light'>Contacts</h2>
      <div className="container contact__container">
        <div className="contact__options">
        <article className="contact__option">
            <FaTelegramPlane className="contact__option-icon"/>
            <h4>Telegram</h4>
            <h5>@qwertytest</h5>
            <a href="#" target="_blank" rel="noopener noreferrer">Message</a>
          </article>
          <article className="contact__option">
            <BsEnvelope className="contact__option-icon"/>
            <h4>E-mail</h4>
            <h5>qwerty.test@gmail.com</h5>
            <a href="#">Message</a>
          </article>
          <article className="contact__option">
            <FaGithubSquare className="contact__option-icon"/>
            <h4>Portfolio GitHub</h4>
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
      </div>
    </section>
  )
}

export default Contact