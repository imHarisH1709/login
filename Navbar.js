import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <a href="#" className="nav-link">Logo</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Forums</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Article</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Service</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Activities</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Contact</a>
        </li>
        <div className='sign'>
        <li className="nav-item">

          <a href="#" className="nav-link">LOGIN</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link"></a>
        </li>
        </div>
        <div className='create'>

        <li className="nav-item">
          <a href="#" className="nav-link"></a>
        </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;