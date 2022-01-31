import React from 'react';
import Ideas from '../assets/clean.png'
import {Link} from 'react-scroll'
import './HeroStyles.css'
const Hero = () => {
  return (
<div className='hero'>
<div class="container-fluid">
<div class="row">

<div class="col-lg-6">
<img className='hero-image' src={Ideas} alt='/'/>
</div>

<div class="text col-lg-6">
<h2 >We Create Websites.</h2>
<h2>We Bring Your Vision To Life..</h2>
<Link to='contact'><button className='btn btn-primary'>Contact</button>
</Link>
</div>
</div>
</div>
  </div>
    );
};

export default Hero;
