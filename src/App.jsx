import React from 'react';
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import githublogo from '/src/img/github.svg';
import home from '/src/img/home.png';
import location from '/src/img/location.svg';
import linkedinlogo from '/src/img/linkedin.svg';
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx';
import Project from './components/Project.jsx';
import Footer from './components/Footer.jsx';
import Navbar from './components/Navbar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'; // For Bootstrap



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={
          <section className="bg-[#9CE2D3] min-h-screen w-screen flex justify-center rounded-t-3xl p-10">
            <div className="flex flex-col items-center space-y-5 w-full">              
            <About className="w-full" />
            </div>
          </section>

        } />
        <Route path="/experience" element={
          <section className="bg-[#9CE2D3] min-h-screen w-screen flex justify-center rounded-t-3xl p-10">
            <div className="flex flex-col items-center space-y-5 w-full">
              {/* <div className="flex text-3xl font-medium">Experience</div> */}
              {/* <div className="text-base">
                Here is a quick summary of my most recent experiences:
              </div> */}
              <Experience className="w-full" />
            </div>
          </section>
        } />
        <Route path="/projects" element={
          <section className="min-h-screen w-screen flex justify-center rounded-t-3xl p-10">
            <div className="flex flex-col items-center space-y-5 w-full">
              <div className="flex text-3xl font-medium">Selected Projects</div>
              <div className="text-base">Here are some projects I have built:</div>
              <Project className="w-full" />
            </div>
          </section>
        } />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;