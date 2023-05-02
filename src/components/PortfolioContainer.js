import React, { useState } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Resume from './pages/Resume';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Header from './Header';
import Footer from './Footer'

export default function PortfolioContainer() {
  return (
<Router>
<div className="flex-column justify-flex-start min-100-vh">
  <Header/>
  <div className="container">
    <Routes>
      <Route
      path="/"
      element={<AboutMe />}
      />
      <Route
      path="/resume"
      element={<Resume />}
      />
      <Route
      path="/portfolio"
      element={<Portfolio />}
      />
      <Route
      path="/contact"
      element={<Contact />}
      />
        
    </Routes>
  </div>
  <Footer />
  </div>
</Router>
  );
}
