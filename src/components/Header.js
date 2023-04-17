import React from 'react';
import Navbar from './Navbar';


export default function Header({currentPage, handlePageChange}) {
  return ( 
    <header>
<Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
    </header>
  );
}