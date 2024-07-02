// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    
    <nav className="bg-black-800 p-4">
      <ul className="flex justify-center space-x-8">
        <li><Link to="/" className="text-white hover:text-gray-400">Home</Link></li>
        <li><Link to="/about" className="text-white hover:text-gray-400">About</Link></li>
        <li><Link to="/projects" className="text-white hover:text-gray-400">Projects</Link></li>
        <li><Link to="/gallery" className="text-white hover:text-gray-400">Gallery</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
