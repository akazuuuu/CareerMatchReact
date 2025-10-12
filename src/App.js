import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import NavbarComponent from './component/NavbarComponent';
import FooterComponent from './component/FooterComponent';

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css';
import './styles/navAndFooter.css';
import './styles/jobs.css';
import './styles/roleselection.css';
import './styles/about.css';
import './styles/LoginSeeker.css';
import './styles/LoginCompany.css';
import './styles/RegisterSeeker.css';
import './styles/MainPage.css';
import './styles/ResumeBuilder.css';

// Pages
import Index from './pages/index';
import About from './pages/about';
import JobsLanding from './pages/jobsLanding';
import Roleselection from './pages/roleselection'; 
import LoginSeeker from './pages/LoginSeeker';
import LoginCompany from './pages/LoginCompany';
import RegisterSeeker from './pages/RegisterSeeker';
import MainPage from './pages/MainPage';
import ResumeBuilder from './pages/ResumeBuilder';


// ✅ Firebase setup (global, initializes once)
import { db } from './pages/Firebase';

function AppContent() {
  const location = useLocation();

  // Hide navbar
  const hideNavbarPaths = ['/LoginSeeker', '/LoginCompany', '/RegisterSeeker', '/MainPage'];
  const shouldShowNavbar = !hideNavbarPaths.includes(location.pathname);

  //  Hide footer 
  const hideFooterPaths = ['/MainPage', '/ResumeBuilder'];
  const shouldShowFooter = !hideFooterPaths.includes(location.pathname);

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
        <Route path="/RegisterSeeker" element={<RegisterSeeker />} />
        <Route path="/MainPage" element={<MainPage />} />
        <Route path="/ResumeBuilder" element={<ResumeBuilder />} />
      </Routes>

      {shouldShowFooter && <FooterComponent />}  {/* ✅ Conditionally render footer */}
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
