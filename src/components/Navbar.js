import React from 'react';

import {colors} from '../utils/helpers';

const styles = {
  headerStyle: {
    background: colors.Moonstone,
    fontSize: '25px',
  },
  navbarBrand : {
    fontSize: '30px'
  },
  navItems : {
    marginLeft: '40px',
    marginRight: '9px'
  }
}

function Navbar({ currentPage, handlePageChange }) {
  return (
<nav className="navbar navbar-expand-lg" style={styles.headerStyle}>
  <div className="container-fluid">
    {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> */}
    {/* <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}
    <div className="navbar-brand"  style={styles.navbarBrand}>Aviva Rubenstein</div>
    <ul ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item" style={styles.navItems}>
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
      <li className="nav-item" style={styles.navItems}>
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          //  The portfolioContainer component is passing us the handlePageChange function
          // The page which is passed in -- which in this case is Portfolio -- is set as the currentPage
              //The current page will be rendered by the PortfolioContainer component and
          //then, depending on what currentPage is set to we conditionally tell the nav-bar which navbar link is active, to style that one differently
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item" style={styles.navItems}>
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}

          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
      <li className="nav-item" style={styles.navItems}>
        <a
          href="#contact"

          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
    </ul>
    {/* </div> */}
    </div>
  </nav>  

    
  );
}

export default Navbar;
