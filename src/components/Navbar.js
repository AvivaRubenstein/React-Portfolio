import React from 'react';

// TODO: Add a comment explaining how we are able to extract the key value pairs from props

function Navbar({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#aboutMe"
          //when someone clicks the home link on the navBar, we call the handlePageChange function
          //and pass in 'Home' as the value
          //then, in the portfolio container, handlePageChange will run the setCurrentPage function, passing that same
          //'Home' in as a parameter, so the currentPage will be set to that page
          onClick={() => handlePageChange('AboutMe')}
          //*  TODO: BONUS: Add a comment explaining what kind of operator this is and what it is checking for
          //the ternary operator is checking whether the currentPage is set to home.
          //if it is, the className is set to nav-link active and if not set to nav-link
          className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          //  TODO: Add a comment explaining what this logic is doing
  
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          //  TODO: Add a comment explaining what this logic is doing

          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          //  TODO: Add a comment explaining what this logic is doing

          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default Navbar;
