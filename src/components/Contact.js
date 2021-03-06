import React, { useRef } from 'react'
import { FaEnvelope, FaPhone } from 'react-icons/fa'
import './ContactStyles.css'

const Contact = () => {

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
                            <FaPhone style={{marginRight: '1rem'}} /> (+27) 78 952 9447
                            <p></p>
                        </div>
                        <div className='icons'>
                            <FaEnvelope style={{marginRight: '1rem'}} /> nervadevelop@gmail.com
                            <p></p>
                        </div>
                      
                    </div>
                    <div className='ic col-lg-6'>
                    <form action="https://getform.io/f/e533a688-8098-41c8-85f6-cb0f42115a8e" method="POST">
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
