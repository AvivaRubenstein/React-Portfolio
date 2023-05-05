import React from 'react';
import {Link} from 'react-router-dom';

import {colors} from '../utils/helpers';

const styles = {
  headerStyle: {
    background: colors.Moonstone,
    fontSize: '25px',
  },
  navbarBrand : {
    fontSize: '30px',
    
  },
  navItems : {
    justifyContent: 'space-between',
    marginLeft: '40px',
    marginRight: '9px',
    textDecoration: 'none',
    color: colors.Vanilla
  }
}

export default function Header() {
  return ( 
    <header className="navbar navbar-expand-lg" style={styles.headerStyle}>
<div className="navbar-brand"  style={styles.navbarBrand}>Aviva Rubenstein</div>
<Link style={styles.navItems} to='/'>
  <h1>
    About Me
  </h1>
</Link>
<Link style={styles.navItems} to='/portfolio'>
  <h1>
    Portfolio
  </h1>
</Link>
<Link style={styles.navItems} to='/resume'>
  <h1>
    Resume
  </h1>
</Link>
<Link style={styles.navItems} to='/contact'>
  <h1>
    Contact
  </h1>
</Link>

    </header>
  );
}