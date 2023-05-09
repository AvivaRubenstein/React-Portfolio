import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Resume from './pages/Resume';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Header from './Header';
import Footer from './Footer';
import {colors} from '../utils/helpers'
const styles = {
  page: {
    backgroundColor: colors.Peach,
    maxWidth: '100vw', // set max width to 100vw
    minHeight: '100vh', // set min height to 100vh
    marginLeft: 'calc(-50vw + 50%)', // center the container horizontally
    marginRight: 'calc(-50vw + 50%)',
  }
}

export default function PortfolioContainer() {
  return (
<Router>
<div className="d-flex flex-column min-vh-100">
  <Header/>
  <div className="container container-fluid flex-grow-1" style={styles.page} >
    <Routes >
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
