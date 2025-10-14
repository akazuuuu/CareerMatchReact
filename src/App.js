import React, { useEffect } from "react";
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
import ApplicationTracker from "./pages/applicationTracker";
import SeekerProfile from "./pages/SeekerProfile";

function AppContent() {
  const location = useLocation();
  const path = location.pathname.toLowerCase();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    const elements = document.querySelectorAll(".scroll-animate");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [location]); // run again when route changes

  const seekerNavbarPaths = ["/mainpage", "/resumebuilder", "/applicationtracker", "/seekerprofile"];
  const companyNavbarPaths = ["/jobpost", "/viewapplicants"];
  const hideNavbarPaths = [
    "/loginseeker",
    "/logincompany",
    "/registerseeker",
    "/registercompany",
  ];

  const showSeekerNavbar = seekerNavbarPaths.includes(path);
  const showCompanyNavbar = companyNavbarPaths.includes(path);
  const showDefaultNavbar =
    !hideNavbarPaths.includes(path) && !showSeekerNavbar && !showCompanyNavbar;

  return (
    <div className="app-layout">
      {showSeekerNavbar && <NavbarSeeker />}
      {showCompanyNavbar && <NavbarCompany />}

      <div className="main-wrapper">
        {showDefaultNavbar && <NavbarComponent />}

        <div className="page-content">
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
            <Route path="/viewapplicants" element={<ViewApplicants />} />
            <Route path="/applicationtracker" element={<ApplicationTracker />} />
            <Route path="/seekerprofile" element={<SeekerProfile />} />
          </Routes>
        </div>

        <FooterComponent />
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
