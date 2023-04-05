import React, { useState } from 'react';
import Navbar from './Navbar';
import Resume from './pages/Resume';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

export default function PortfolioContainer() {
  //currentPage is set to the AboutMe section by default
  const [currentPage, setCurrentPage] = useState('AboutMe');
  //we are passing in the currentPage we are on, which has the default value of being set to "Home"
  //and then we are using the currentPage we are on to return the relevant component 
  const renderPage = () => {
    //when currentPage === Resume, we pass in / render the Resume component
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    return <AboutMe />;
  };

  //when we change pages, whatever page triggers the handlePageChange function will be passed
  //in as the the new value that the currentPage is being set to
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* we are passing props into the NavTabs component:
      the currentPage value is passed in as currentPage= 
      and we are passing in the handlePageChange functionality to be able to update/set a new page */}
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component */}
      {renderPage()}
    </div>
  );
}
