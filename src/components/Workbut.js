import React from 'react';
import { Link } from 'react-router-dom';
import './Workstyles.css'
const Workbut = () => {
  return (
<div className='workroutes'>
<div className='container-fluid'>
<div className='row'>
<div className='text col-lg-12'>
<p>
  <button class="btn" type="button" data-bs-toggle="collapse" data-bs-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">See our work</button></p>
<div class="row">
  <div class="col">
    <div class="collapse multi-collapse" id="multiCollapseExample1">
      <div class="card card-body">
      <a href='https://chainpal-crypto.netlify.app/'>ChainPal</a>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="collapse multi-collapse" id="multiCollapseExample2">
      <div class="card card-body">
      <a href='https://covidcorona2019.netlify.app/'>Covid</a>
      </div>
    </div>
  </div>

  
</div>
<div class="row">
  <div class="col">
    <div class="collapse multi-collapse" id="multiCollapseExample1">
      <div class="card card-body">
      <a href='https://weather-app-athi.netlify.app/'>Weather</a>
    </div>
    </div>
  </div>
  <div class="col">
    <div class="collapse multi-collapse" id="multiCollapseExample2">
      <div class="card card-body">
      <a href='https://active-data.netlify.app/'>ActiveData</a>
      </div>
    </div>
  </div>

  
</div>

<div class="row">
  <div class="col">
    <div class="collapse multi-collapse" id="multiCollapseExample1">
      <div class="card card-body">
      <a href='https://telect.netlify.app/'>Telect</a>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="collapse multi-collapse" id="multiCollapseExample2">
      <div class="card card-body">
      <a href='https://dogtinder-2020.netlify.app/'>DogTinder</a>
      </div>
    </div>
  </div>

  
</div>
</div>
</div>
</div>
</div>
  );
};

export default Workbut;
