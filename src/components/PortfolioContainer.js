import React, { useState } from 'react';
import Navbar from './Navbar';
import Resume from './pages/Resume';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // TODO: Add a comment describing the functionality of this method
  //we are passing in the currentPage we are on, which has the default value of being set to "Home"
  const renderPage = () => {
    //when currentPage === Resume, we pass in / render the Resume component
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    return <Contact />;
  };

  //when we change pages, whatever page triggers the handlePageChange function will be passed
  //in as the the new value that the currentPage is being set to
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* // TODO: Add a comment describing what we are passing as props
      we are passing props into the NavTabs component:
      the currentPage value is passed in as currentPage= 
      and we are passing in the handlePageChange functionality  */}
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* // TODO: Add a comment explaining what is happening on the following line */}
      {renderPage()}
    </div>
  );
}
