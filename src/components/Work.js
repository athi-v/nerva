import React from 'react';
import {Link} from 'react-router-dom'
import './Work.css'
const Work = () => {

  
  return (
      <div className='work'>
          <div className='container-fluid'>
              <div className='row'>
                  <div className='col-lg-12'>
                      <h1>Our Work</h1>
                  </div>

                  <div className='text col-lg-12'>
                  <div className='row'>

                  <div className='text-cards col-lg-3'>
                  <div className='lock'>
                        <h3>Plan</h3>
                        <p>We plan the website with you.</p>
                      </div></div>
                      
                      <div className='text-cards col-lg-3'>
                      <div className='lock'>  

                       <h3>Design</h3>
                        <p>We design websites that are easy to use.</p>
                      </div>
                      </div>

                      <div className='text-cards col-lg-3'>
                        <div className='lock'>  
                        <h3>Develop</h3>
                        <p>We write code that runs smoothly and responsive on all devices.</p>
                      </div></div>
                      

                      <div className='text-cards col-lg-3'>
                      <div className='lock'>  

                        <h3>Deploy</h3>
                        <p>We deploy to your website with minimum hassles so that everyone can access it.</p>
                      </div>
                      </div>
                  </div>
                   </div>
                  <div className='text col-lg-12'>
                  <button className='btn'>See our work</button>
                  </div>
              </div>
          </div>
      </div>
  );
};

export default Work;
