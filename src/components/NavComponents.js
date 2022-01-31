import React, {useState} from 'react';
import { Squeeze as Hamburger } from 'hamburger-react'
import {Link} from 'react-scroll'
import './NavStyles.css'
const NavComponents = () => {
  const [isOpen, setOpen] = useState(false)
  return (
<header>
<nav className="navbar navbar-expand-md">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Nerva<span className='dot'>.</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <Hamburger toggled={isOpen} toggle={setOpen} />
        </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to='hero' className='nav-link'>Home</Link>
        </li>
        <li className="nav-item">
        <Link to='services' className='nav-link'>Our Services</Link>
        </li>
        <li className="nav-item">
          <Link to='work' className='nav-link'>Our Work</Link>
        </li>

        <li className="nav-item">
        <Link to='contact' className='nav-link'>Contact</Link>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#"></a>
        </li>
        
      </ul>
     
    </div>
  </div>
</nav>
</header>  
    );
};

export default NavComponents;
