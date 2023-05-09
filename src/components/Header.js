import React from 'react';
import {Link} from 'react-router-dom';

import {colors} from '../utils/helpers';

const styles = {
  headerStyle: {
    background: colors.Moonstone,
    fontSize: '25px',
  },
  navbarBrand : {
    paddingLeft: '5px',
    fontSize: '30px',
    color: colors['Carribean-Current']
    
  },
  navItems : {
    justifyContent: 'space-between',
    marginLeft: '40px',
    marginRight: '9px',
    textDecoration: 'none',
    color: colors.Vanilla,
    border:`1px solid ${colors['Uranian-Blue']}`,
    borderRadius: '30px',
    fontSize: '28px',
    paddingLeft: '9px',
    paddingRight: '9px',
    background: colors['Carribean-Current']
    
  }
}

export default function Header() {
  return ( 
    <header className="navbar navbar-expand-lg" style={styles.headerStyle}>
<div className="navbar-brand"  style={styles.navbarBrand}>Aviva Rubenstein</div>
<Link style={styles.navItems} to='/'>
    About Me
</Link>
<Link style={styles.navItems} to='/portfolio'>
    Portfolio
</Link>
<Link style={styles.navItems} to='/resume'>
    Resume
</Link>
<Link style={styles.navItems} to='/contact'>
    Contact
</Link>

    </header>
  );
}