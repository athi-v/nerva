import React from 'react';
import {FaReact, FaWordpress, FaNode} from 'react-icons/fa'
import './ServicesStyles.css'
const Services = () => {
  return (
      <div className='services'>
          <div class="container-fluid">
<div class="row">
<div className='text col-lg-12'>
    <h1>Our Services</h1>
</div>
<div className='text col-lg-4'>
<FaReact className='icons' />
</div>
<div className='text col-lg-4'>
<FaWordpress className='icons' />
    </div>
    <div className='text col-lg-4'>
    <FaNode className='icons' />
</div>
      </div>
      </div>
      </div>
  )
};

export default Services;
