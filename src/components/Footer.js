import React from 'react';
import {Link} from 'react-router-dom'
import {FaFacebook, FaGithub, FaLinkedin, FaTwitter, FaInstagram} from 'react-icons/fa'
import About from '../routes/Work'
import './Footer.css'
const Footer = () => {
  return (
<div className='footer'>
            <div className='container'>
                <div className='col col-1'>
                    <h1>Nerva<span>.</span></h1>
                </div>
                <div className='col'>
                    <h5>Support</h5>
                    <span className='bar'></span>
                        <a href='/'>Contact Us</a>
                        <a href='/'>FAQ</a>

                </div>
                <div className='col'>
                    <h5>Developers</h5>
                    <span className='bar'> </span>
                        <a href='/'>API</a>
                   
                </div>
                <div className='col'>
                    <h5>Company</h5>
                    <span className='bar'> </span>
                        <Link to={About}>About</Link>
                </div>
                <div className='col'>
                    <h5>Social</h5>
                    <span className='bar'> </span>
                        <a href='https://twitter.com/NervaDevelopers?t=mhze0yoM_CMD03UvaFDmmw&s=09'><FaTwitter className='icon'/></a>
                        <a href=' https://www.instagram.com/tv/CWobMJagbyB/?utm_medium=copy_link'><FaInstagram className='icon'/></a>
                        <a href='/'><FaLinkedin className='icon'/></a>
                </div>
            </div>
            
        </div>
  )
}

export default Footer;
