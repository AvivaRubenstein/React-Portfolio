import React from 'react';
import {Link} from 'react-router-dom';
import {colors} from '../utils/helpers';
//button colors are set up in separate css file to allow regular and :hover functionality 
import '../Assets/styles/header.css';

const styles = {
  headerStyle: {
    background: colors.Moonstone,
    fontSize: '20px',
  },
  navbarBrand : {
    paddingLeft: '5px',
    fontSize: '20px',
    color: colors['Carribean-Current']
    
  },
  navItems : {
    justifyContent: 'space-between',
    marginLeft: '40px',
    marginRight: '9px',
    textDecoration: 'none',
    // color: colors.Vanilla,
    border:`1px solid ${colors['Uranian-Blue']}`,
    borderRadius: '30px',
    fontSize: '20px',
    paddingLeft: '9px',
    paddingRight: '9px',
    // background: colors['Carribean-Current']
    
  }
}

export default function Header() {
  return ( 
    <header className="navbar navbar-expand-lg" style={styles.headerStyle}>
<div className="navbar-brand"  style={styles.navbarBrand}>Aviva Rubenstein</div>
<Link className="navLink" style={styles.navItems} to='/'>
    About Me
</Link>
<Link className="navLink"  style={styles.navItems} to='/portfolio'>
    Portfolio
</Link>
<Link className="navLink"  style={styles.navItems} to='/resume'>
    Resume
</Link>
<Link className="navLink"  style={styles.navItems} to='/contact'>
    Contact
</Link>

    </header>
  );
}