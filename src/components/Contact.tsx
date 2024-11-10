import React from 'react'
import '../app/styles/contact.css';
const Contact = () => {
  return (
    <div id='contact' className='contact-container'>
        <div className='contact-grid md:grid-cols-2'>
            <div className='contact-space'>
                <h2 className='contact-heading' data-aos="zoom-in-down">Get in Touch</h2>
                <p className='contact-text' data-aos="zoom-in-down">
                    Drop me a line, give me a call, or send me a message by submitting the form.
                </p>
                <div className='email' data-aos="zoom-in-down">sahitoshahzaib888@gmail.com</div>
                <div className='phone' data-aos="zoom-in-down">(021) 000-0000</div>
            </div>
            <div className='contact-space'>
              <div className='form'>
                <label htmlFor='name'>Name</label>
                <input type='text'className='a2' id='name'/>
              </div>
              
              <div className='form' data-aos="zoom-in-down">
                <label htmlFor='email'>Email</label>
                <input type='text'className='input-field' id='email'/>
                </div>
                
              <div className='form' data-aos="zoom-in-down">
                <label htmlFor='msg'>Message</label>
                <textarea className= 'textarea-field' id='msg' rows={8}>
                </textarea>
              </div>
              <button className='button' data-aos="zoom-in-down">Send</button>
              </div>
            </div>
        </div>
  
  )
}

export default Contact
