import React from 'react';
// import Navbar from './Navbar';
import {Link} from 'react-router-dom';


export default function Header() {
  return ( 
    <header>
<Link to='/'>
  <h1>
    About Me
  </h1>
</Link>
<Link to='/portfolio'>
  <h1>
    Portfolio
  </h1>
</Link>
<Link to='/resume'>
  <h1>
    Resume
  </h1>
</Link>
<Link to='/contact'>
  <h1>
    Contact
  </h1>
</Link>

    </header>
  );
}