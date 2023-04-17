import React from 'react';

import '../css/navbar.css'
import { useNavigate } from 'react-router-dom';


function Nav() {
  const nav=useNavigate();
  const logout=()=>{
    localStorage.clear();
    nav('/login')
  }
  return (

    <nav className="navbar">
      <a href="/" className="logo">fitnessZone</a>
     <button  className='logout-button'  onClick={()=>logout()}>Log out</button>
    </nav>
  );
}

export default Nav;
