import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container d-flex align-items-center justify-content-center vh-100">
      <div className="text-center">
        {/* Logo */}
        <img
  src="https://as2.ftcdn.net/v2/jpg/04/89/98/93/1000_F_489989331_6fwpiyO81M6yLrnGdHISMAfhRx7rGITS.jpg"
  alt="EduStream Logo"
  className="mb-4"
  style={{ maxWidth: '100px', borderRadius: '50%', marginTop: '-50px' }} // Adjust marginTop to push the logo up
/>


        <h1 className="display-4 fw-bold mb-3">Welcome to EduStream</h1>
        <p className="lead mb-4">Easily manage student information with a sleek and simple interface.</p>
        <p className="lead mb-4">"Smart, Seamless, and Secure Student Management."</p>

        <Link to="/add" className="btn btn-success btn-lg me-3">Add Student</Link>
        <Link to="/list" className="btn btn-success btn-lg">View Students</Link>
      </div>
    </div>
  );
};

export default Home;
