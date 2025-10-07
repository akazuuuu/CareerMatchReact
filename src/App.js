import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import NavbarComponent from './component/NavbarComponent';
import FooterComponent from './component/FooterComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css';
import './styles/navAndFooter.css';
import './styles/jobs.css';
import './styles/roleselection.css';
import './styles/about.css';
import './styles/LoginSeeker.css';
import './styles/LoginCompany.css';

import Index from './pages/index';
import About from './pages/about';
import JobsLanding from './pages/jobsLanding';
import Roleselection from './pages/roleselection'; 
import LoginSeeker from './pages/LoginSeeker';
import LoginCompany from './pages/LoginCompany';

function AppContent() {
  const location = useLocation();
  
  
  const hideNavbarPaths = ['/LoginSeeker', '/LoginCompany'];
  
  const shouldShowNavbar = !hideNavbarPaths.includes(location.pathname);

  return (
    <>
      {shouldShowNavbar && <NavbarComponent />}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/jobsLanding" element={<JobsLanding />} />
        <Route path="/roleselection" element={<Roleselection />} />
        <Route path="/LoginSeeker" element={<LoginSeeker />} />
        <Route path="/LoginCompany" element={<LoginCompany />} />
      </Routes>
      <FooterComponent />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;