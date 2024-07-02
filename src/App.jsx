import React from 'react';
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Projects from './components/Project.jsx';
import Gallery from './components/Gallery.jsx';

import Footer from './components/Footer.jsx';
import Navbar from './components/Navbar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'; // For Bootstrap

// import '/src/lightbox.min.css';
// import '/src/lightbox-plus-jquery.min.js';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={
          <section className="bg-[#FFFFFF] min-h-screen w-screen flex justify-center rounded-t-3xl p-10">
            <div className="flex flex-col items-center space-y-5 w-full">              
            <About className="w-full" />
            </div>
          </section>

        } />
        
        <Route path="/projects" element={
          <section className="min-h-screen w-screen flex justify-center rounded-t-3xl p-10">
            <div className="flex flex-col items-center space-y-5 w-full">
              <div className="flex text-3xl font-medium">Selected Projects</div>
              <div className="text-base">Here are some projects I have built:</div>
              <Projects className="w-full" />
            </div>
          </section>
        } />
        <Route path="/gallery" element={
          <section className="min-h-screen w-screen flex justify-center rounded-t-3xl p-10">
            <div className="flex flex-col items-center space-y-5 w-full">
              <div className="flex text-3xl font-medium">Gallery</div>
              <div className="text-base">Beautiful pictures in beautiful places.</div>
              <Gallery className="w-full" />
            </div>
          </section>
        } />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;