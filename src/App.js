import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import NavbarComponent from './component/NavbarComponent';
import FooterComponent from './component/FooterComponent';
import NavbarSeeker from './component/NavbarSeeker';

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
import './styles/navbarSeeker.css';

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

// Firebase
import { db } from './pages/Firebase';

function AppContent() {
  const location = useLocation();
  const path = location.pathname.toLowerCase();

  // Pages that use the Seeker vertical navbar
  const seekerNavbarPaths = ['/mainpage', '/resumebuilder'];

  // Pages that should hide all navbars (login/register)
  const hideNavbarPaths = ['/loginseeker', '/logincompany', '/registerseeker'];

  // Pages that should hide the footer
  const hideFooterPaths = ['/mainpage', '/resumebuilder'];

  // Navbar logic
  const showSeekerNavbar = seekerNavbarPaths.includes(path);
  const showDefaultNavbar = !hideNavbarPaths.includes(path) && !showSeekerNavbar;

  // Footer logic
  const showFooter = !hideFooterPaths.includes(path);

  // Debug logs (remove after testing)
  console.log('Current path:', path);
  console.log('Show Default Navbar:', showDefaultNavbar);
  console.log('Show Seeker Navbar:', showSeekerNavbar);

  return (
    <>
      {/* Only one navbar is visible at a time */}
      {showDefaultNavbar && (
        <div className="navbar-wrapper navbar-default-wrapper">
          <NavbarComponent />
        </div>
      )}

      {showSeekerNavbar && (
        <div className="navbar-wrapper navbar-seeker-wrapper">
          <NavbarSeeker />
        </div>
      )}

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/jobslanding" element={<JobsLanding />} />
        <Route path="/roleselection" element={<Roleselection />} />
        <Route path="/loginseeker" element={<LoginSeeker />} />
        <Route path="/logincompany" element={<LoginCompany />} />
        <Route path="/registerseeker" element={<RegisterSeeker />} />
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/resumebuilder" element={<ResumeBuilder />} />
      </Routes>

      {/* Footer hidden on seeker pages */}
      {showFooter && <FooterComponent />}
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
