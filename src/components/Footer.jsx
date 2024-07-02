// src/components/Footer.jsx
import React from 'react';
import githublogo from '/src/img/github.svg';
import linkedinlogo from '/src/img/linkedin.svg';
import email from '/src/img/email.svg'

function Footer() {
  return (
    <footer className="bg-black p-4 mt-8">
      <div className="flex flex-col items-center space-y-2">
        <div className="flex space-x-4">
          <a href="https://github.com/kat-wei"><img src={githublogo} alt="Github" className="h-6 w-6" /></a>
          <a href="https://www.linkedin.com/in/katherine-wei7/"><img src={linkedinlogo} alt="LinkedIn" className="h-6 w-6" /></a>
          <a href="mailto:kzw9@cornell.edu"><img src={email} alt="Email" className="h-6 w-6" /></a>
        </div>    
        <p className="text-white">© Katherine Wei</p>
      </div>
    </footer>
  );
}

export default Footer;
