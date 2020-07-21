import React, { Component } from 'react'
import ContactForm from '../ContactForm'
import './style.css'

class Contact extends Component {
  render () {
    return (
      <div className='contact-page-container' id='main-contact-page'>
        <h2 className='contact-title' id='contact-page'>Contact Me</h2>
        <div className='contact-content-container'>
          <ContactForm />
        </div>
      </div>
    )
  }
}

export default Contact
