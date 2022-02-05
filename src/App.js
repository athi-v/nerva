import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import NavComponents from './components/NavComponents'
import Hero from './components/Hero';
import Services from './components/Services';
import Work from './components/Work';
import Workbut from './components/Workbut'
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>


<ScrollToTop smooth height='20' />
<NavComponents />
<Hero />
<Services />
<Work />
<Workbut />
<Contact />
<Footer />
    </>
  );
}

export default App;
