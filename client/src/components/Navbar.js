// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">EduStream <img
  src="https://as2.ftcdn.net/v2/jpg/04/89/98/93/1000_F_489989331_6fwpiyO81M6yLrnGdHISMAfhRx7rGITS.jpg"
  alt="EduStream Logo"
  className="mb-3"
  style={{ maxWidth: '30px', borderRadius: '50%' }} // Corrected border-radius
/>
</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/"> Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/add"> Add Student</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/list"> View Students</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
