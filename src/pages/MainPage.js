import React, { useState, useEffect, useRef } from 'react';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from '../pages/Firebase';
import NavbarSeeker from '../component/NavbarSeeker'; // ✅ import your navbar
import '../styles/MainPage.css';

const MainPage = () => {
  const [jobs, setJobs] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);

  const cardStackRef = useRef(null);

  // Load jobs from Firestore
  const loadJobs = async () => {
    try {
      const q = query(collection(db, "jobPosts"), orderBy("datePosted", "desc"));
      const snapshot = await getDocs(q);
      const jobsData = snapshot.docs.map((doc) => doc.data());
      setJobs(jobsData);
    } catch (err) {
      console.error("Error loading jobs:", err);
    }
  };

  // Create job cards
  const createCard = (job, index) => {
    const logo = job.logo 
      ? `<img src="${job.logo}" alt="Logo" style="width:100%;height:100%;border-radius:16px;object-fit:cover;">`
      : job.company?.substring(0, 2).toUpperCase() || "CM";

    return (
      <div 
        key={index}
        className="job-card"
        data-index={index}
        onMouseDown={handleDragStart}
        onTouchStart={handleDragStart}
      >
        <div className="company-logo" dangerouslySetInnerHTML={{ __html: logo }} />
        <div className="job-title">{job.title}</div>
        <div className="company-name">{job.company}</div>
        <div className="job-details">
          <div className="detail-item"><span>📍</span> {job.location}</div>
          <div className="detail-item"><span>💼</span> {job.type}</div>
          <div className="detail-item"><span>🎓</span> {job.degree || "Any"}</div>
          <div className="detail-item"><span>🕒</span> {job.experience || "Not specified"}</div>
          <div className="detail-item"><span>⚡</span> {job.employmentLevel || "Not specified"}</div>
          <div className="detail-item"><span>🛠️</span> {job.skills || "Not specified"}</div>
        </div>
        <div className="salary">{job.salary || "Not specified"}</div>
        <div className="job-description">{job.description || ""}</div>
        <div className="swipe-indicator accept">APPLY</div>
        <div className="swipe-indicator decline">DECLINE</div>
      </div>
    );
  };

  // Update card stacking
  const updateCardPositions = () => {
    const cards = document.querySelectorAll(".job-card");
    cards.forEach((card) => {
      const diff = parseInt(card.dataset.index) - currentIndex;
      if (diff < 0) {
        card.style.display = "none";
      } else if (diff === 0) {
        card.style.transform = "scale(1)";
        card.style.opacity = "1";
        card.style.zIndex = "10";
      } else if (diff === 1) {
        card.style.transform = "scale(0.95) translateY(10px)";
        card.style.opacity = "0.8";
        card.style.zIndex = "9";
      } else {
        card.style.transform = "scale(0.9) translateY(20px)";
        card.style.opacity = "0.6";
        card.style.zIndex = "8";
      }
    });
  };

  // Drag handlers
  const handleDragStart = (e) => {
    if (currentIndex >= jobs.length) return;
    const card = e.currentTarget;
    if (parseInt(card.dataset.index) !== currentIndex) return;
    
    setIsDragging(true);
    const clientX = e.type === "mousedown" ? e.clientX : e.touches[0].clientX;
    setStartX(clientX);
    setCurrentX(clientX);

    document.addEventListener("mousemove", handleDragMove);
    document.addEventListener("mouseup", handleDragEnd);
    document.addEventListener("touchmove", handleDragMove);
    document.addEventListener("touchend", handleDragEnd);
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    const clientX = e.type === "mousemove" ? e.clientX : e.touches[0].clientX;
    setCurrentX(clientX);
    
    const diff = clientX - startX;
    const card = document.querySelector(`[data-index="${currentIndex}"]`);
    if (card) {
      const rotation = diff / 20;
      card.style.transform = `translateX(${diff}px) rotate(${rotation}deg)`;
    }
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    const diff = currentX - startX;
    const card = document.querySelector(`[data-index="${currentIndex}"]`);
    
    document.removeEventListener("mousemove", handleDragMove);
    document.removeEventListener("mouseup", handleDragEnd);
    document.removeEventListener("touchmove", handleDragMove);
    document.removeEventListener("touchend", handleDragEnd);
    
    if (diff > 100) {
      animateSwipe(card, "right");
    } else if (diff < -100) {
      animateSwipe(card, "left");
    } else if (card) {
      card.style.transform = "";
    }
  };

  const animateSwipe = (card, direction) => {
    if (!card) return;
    const moveX = direction === "right" ? 1000 : -1000;
    card.style.transform = `translateX(${moveX}px) rotate(${direction === "right" ? 30 : -30}deg)`;
    card.style.opacity = "0";
    
    setTimeout(() => setCurrentIndex((prev) => prev + 1), 300);
  };

  const swipeLeft = () => {
    if (currentIndex >= jobs.length) return;
    const card = document.querySelector(`[data-index="${currentIndex}"]`);
    animateSwipe(card, "left");
  };

  const swipeRight = () => {
    if (currentIndex >= jobs.length) return;
    const card = document.querySelector(`[data-index="${currentIndex}"]`);
    animateSwipe(card, "right");
  };

  useEffect(() => {
    updateCardPositions();
  }, [currentIndex, jobs]);

  useEffect(() => {
    loadJobs();
  }, []);

  return (
    <div className="main-page">
      {/* ✅ Replaced old navbar with imported NavbarSeeker */}
      <NavbarSeeker />

      {/* Main Content */}
      <div className="Herospace">
        <div className="swipe-container">
          <div className="header">
            <p>Swipe right to accept, left to decline.</p>
          </div>

          <div className="card-stack" id="cardStack" ref={cardStackRef}>
            {jobs.length === 0 ? (
              <p>Loading jobs...</p>
            ) : currentIndex >= jobs.length ? (
              <div className='no-more'>No more jobs to review!</div>
            ) : (
              jobs.map((job, index) => createCard(job, index))
            )}
          </div>

          <div className="view-details">
            <button className="view-details-btn">View Details</button>
          </div>

          <div className="actions">
            <button className="action-btn-decline-btn" onClick={swipeLeft}>✕</button>
            <button className="action-btn-accept-btn" onClick={swipeRight}>✓</button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-container">
            <div className="footer-grid">
              <div className="footer-section footer-brand">
                <h2 className="brand-logo">CareerMatch</h2>
                <p className="brand-description">
                  CareerMatch helps individuals find jobs that align with their skills, interests, and career goals. 
                  It provides tailored recommendations, resume assistance, and resources to support interview preparation.
                </p>
              </div>

              <div className="footer-section">
                <h3>Services</h3>
                <ul className="footer-links">
                  <li><a href="#">Job Recommendations</a></li>
                  <li><a href="#">Resume Builder</a></li>
                </ul>
              </div>

              <div className="footer-section">
                <h3>Support</h3>
                <ul className="footer-links">
                  <li><a href="#">Help Center</a></li>
                  <li><a href="#">Our Team</a></li>
                </ul>
              </div>
            </div>

            <div className="footer-bottom">
              <p>&copy; 2025 CareerMatch. All rights reserved.</p>
              <div className="footer-legal">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainPage;
