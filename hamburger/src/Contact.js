import React from 'react'
import bannerImage from './assets/2blackbean.jpg'

const Contact = () => {
  return (
    <div className='contact'>
    <div className='leftSide' style={{backgroundImage:`url(${bannerImage})`}}></div>
    <div className='rightSide'>

        <h1>Contact us</h1>
        <form id='contact-form'>
    <label htmlFor='name'>Full Name</label>
    <input name='name' type='text'  placeholder='enter your name'/>
    <label htmlFor='email'>Email</label>
    <input name='mail' type='email'  placeholder='enter your mail'/>
    <label htmlFor='message'>Message</label>
    <textarea name="message" placeholder='enter your message'></textarea>
    <button type='submit'>send message </button>
        </form>
        
     </div>
    </div>
  )
}

export default Contact