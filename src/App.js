import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarComponent from './component/NavbarComponent';
import FooterComponent from './component/FooterComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css';
import './styles/navAndFooter.css';
import './styles/jobs.css';
import './styles/roleselection.css';
import './styles/about.css';
import './styles/login.css';

import Index from './pages/index';
import About from './pages/about';
import JobsLanding from './pages/jobsLanding';
import Roleselection from './pages/roleselection'; 
import Login from './pages/login'; 

function App() {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/jobsLanding" element={<JobsLanding />} />
        <Route path="/roleselection" element={<Roleselection />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <FooterComponent />
    </Router>
  );
}

export default App;
