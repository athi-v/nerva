import React from 'react';
import {FaInstagram, FaTwitter, FaLinkedin, FaCopyright} from 'react-icons/fa'
import './Footer.css'
const Footer = () => {
  return <footer>
      <div className='container-fluid'>
          <div className='row'>
          <div class="text-left col-lg-6">
          <p>Nerva. 2021 - 2022 </p>
</div>
<div class="text-right col-lg-6">
<FaInstagram className='icons' />
<FaTwitter className='icons' />
<FaLinkedin className='icons' />

</div>
          </div>
      </div>
  </footer>;
};

export default Footer;
