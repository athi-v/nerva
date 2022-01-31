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
<a href='https://www.instagram.com/tv/CWobMJagbyB/?utm_medium=copy_link'><FaInstagram className='icons' /></a>
<a href='https://twitter.com/NervaDevelopers?t=mhze0yoM_CMD03UvaFDmmw&s=09'><FaTwitter className='icons' /></a>
<FaLinkedin className='icons' />

</div>
          </div>
      </div>
  </footer>;
};

export default Footer;
