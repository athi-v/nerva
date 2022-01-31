import React from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import './ContactStyles.css'
const Contact = () => {
  return (
  <div className='contact'>
      <div class="container-fluid">
      <div class="row">
      <div className='text col-lg-12'>
    <h1>Contact Us</h1>
</div>
      <div class="text-just col-lg-6">
<FaEnvelope className='icons' /> <br/>
<p>nervadevelop@gmail.com</p>
</div>
<div class="text-just col-lg-6">
<FaPhone className='icons'/> <br />
<p>(+27)733901637</p>
</div>

<div className='text col-lg-12'>
<button className='btn'>Get in touch</button>
</div>

</div>
    
</div>
</div>


    );
};

export default Contact;
