import { useState } from 'react';
import { Link } from 'react-router-dom';



function Navbar() {
  return (
    <>
      <nav className="nav">
        <Link to="/" className="site-brand" reloadDocument>Site Brand</Link>
        <ul>
          <li>
            <Link to="/friends" className="nav-option">Friends</Link>
          </li>
          <li>
            <Link to="/login" className="nav-option">Login</Link>
          </li>
          <li>
            <Link to="/signup" className="nav-option">Sign Up</Link>
          </li>
          <li>
            <Link to="/about" className="nav-option">About</Link>
          </li>
        </ul>
      </nav>
    </>
      );
}


export default Navbar;
