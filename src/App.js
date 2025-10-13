import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// Components
import NavbarComponent from "./component/NavbarComponent";
import FooterComponent from "./component/FooterComponent";
import NavbarSeeker from "./component/NavbarSeeker";
import NavbarCompany from "./component/NavbarCompany";

// Pages
import Index from "./pages/index";
import About from "./pages/about";
import JobsLanding from "./pages/jobsLanding";
import Roleselection from "./pages/roleselection";
import LoginSeeker from "./pages/LoginSeeker";
import LoginCompany from "./pages/LoginCompany";
import RegisterSeeker from "./pages/RegisterSeeker";
import RegisterCompany from "./pages/RegisterCompany";
import MainPage from "./pages/MainPage";
import ResumeBuilder from "./pages/ResumeBuilder";
import JobPost from "./pages/JobPost";
import ViewApplicants from "./pages/ViewApplicants"; 

function AppContent() {
  const location = useLocation();
  const path = location.pathname.toLowerCase();

  const seekerNavbarPaths = ["/mainpage", "/resumebuilder"];
  const companyNavbarPaths = ["/jobpost", "/viewapplicants"]; //  Added ViewApplicants here
  const hideNavbarPaths = [
    "/loginseeker",
    "/logincompany",
    "/registerseeker",
    "/registercompany",
  ];
  const hideFooterPaths = ["/mainpage", "/resumebuilder", "/jobpost", "/viewapplicants"]; //  Added ViewApplicants

  const showSeekerNavbar = seekerNavbarPaths.includes(path);
  const showCompanyNavbar = companyNavbarPaths.includes(path);
  const showDefaultNavbar =
    !hideNavbarPaths.includes(path) && !showSeekerNavbar && !showCompanyNavbar;
  const showFooter = !hideFooterPaths.includes(path);

  return (
    <div className="app-layout">
      {/* Sidebar Navbars */}
      {showSeekerNavbar && <NavbarSeeker />}
      {showCompanyNavbar && <NavbarCompany />}

      <div className="main-content">
        {/* Default Navbar */}
        {showDefaultNavbar && <NavbarComponent />}

        {/* Pages */}
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/jobslanding" element={<JobsLanding />} />
          <Route path="/roleselection" element={<Roleselection />} />
          <Route path="/loginseeker" element={<LoginSeeker />} />
          <Route path="/logincompany" element={<LoginCompany />} />
          <Route path="/registerseeker" element={<RegisterSeeker />} />
          <Route path="/registercompany" element={<RegisterCompany />} />
          <Route path="/mainpage" element={<MainPage />} />
          <Route path="/resumebuilder" element={<ResumeBuilder />} />
          <Route path="/jobpost" element={<JobPost />} />
          <Route path="/viewapplicants" element={<ViewApplicants />} /> {/*  NEW ROUTE */}
        </Routes>

        {/* Footer */}
        {showFooter && <FooterComponent />}
      </div>
    </div>
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
