import React from 'react';

import '../css/navbar.css'
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <nav className="navbar">
      <a href="/" className="logo">fitnessZone</a>
      <ul className="nav-links">
     <li> <Link to='/'>Home</Link></li>
     <li> <Link to='/about'>About</Link></li>
     <li> <Link to='/contact'>Contact</Link></li>
       
      </ul>
      <Link to='/login'>
      <button className="login-button">Login</button>
      </Link>
    </nav>
  );
}

export default Navbar;
