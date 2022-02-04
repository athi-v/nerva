import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaPhone } from 'react-icons/fa'
import './ContactStyles.css'

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_hm7voyp', 'template_x0nyocr', form.current, 'user_OA7DWTJNaVXrrjR1MCBWo')
          .then((result) => {
            //   console.log(result.text);
              alert("Email sent successfully!");
          }, (error) => {
              console.log(error.text);
          });
      };
    return (
        <div className='contact'>
            <div className='container-fluid'>
                <div className='row'>
                <div className='col-lg-12'>
                <div><h1 className='text'>Get in touch</h1>
                        </div>
                </div>
                    <div className='ic col-lg-6'>
                         <div className='icons'>
                            <FaPhone style={{marginRight: '1rem'}} /> (+27)733901637
                            <p></p>
                        </div>
                        <div className='icons'>
                            <FaEnvelope style={{marginRight: '1rem'}} /> athenkosivinqi25@gmail.com
                            <p></p>
                        </div>
                      
                    </div>
                    <div className='ic col-lg-6'>
                    <form ref={form} onSubmit={sendEmail}>
                        <input type='text' name='name' placeholder='Full name'  />
                        <input type='email' name='user_email' placeholder='Email' />
                        <textarea name='message' placeholder='Message' cols='30' rows='10'></textarea>
                        
                        <button className='btn' type='submit'>Send</button>

                    </form>
                </div>
                </div>
                
            </div>
        </div>
    )
}

export default Contact
