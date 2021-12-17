import React from 'react';
import { Routes, Route } from 'react-router-dom';

import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';

function Main() {
  return (
    <Routes>
      <Route exact path="/" element={<About />}></Route>
      <Route exact path="/about" element={<About />}></Route>
      <Route exact path="/HW20-React-Portfolio" element={<About />}></Route>
      <Route exact path="/portfolio" element={<Portfolio />}></Route>
      <Route exact path="/contact" element={<Contact />}></Route>
      <Route exact path="/resume" element={<Resume />}></Route>
    </Routes>
  );
}

export default Main;
