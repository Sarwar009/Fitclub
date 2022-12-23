import React, { useRef } from 'react'
import './Join.css'
import emailjs from '@emailjs/browser';

export const Join = () => {

  const form =useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lgzc9be', 'template_06jyp5c', form.current, 'LXIawooaVboA4EWlo')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='join-container' id='join-us'>
    
        <div className='left-j'>

            <hr />
            <div>
              <span className='stroke-text'>ready to</span>
              <span> level up</span>
            </div>
            <div>
              <span>your body</span>
              <span className='stroke-text'> with us?</span>
            </div>

        </div>


        <div className='right-j'>

            <form className='email-container' ref={form} onSubmit={sendEmail}>
              <input type='email' name='user_email' placeholder='Enter your email' />
              <button className='btn btn-j'>Join us</button>
            </form>

        </div>

    </div>
  )
}
