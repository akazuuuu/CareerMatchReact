import React, { useState, useEffect, useRef } from 'react';
import { db } from '../pages/Firebase';
import { collection, getDocs } from 'firebase/firestore';
import NavbarCompany from '../component/NavbarCompany';
import '../styles/MainPage.css';

const SWIPE_THRESHOLD = 120;

const ViewApplicants = () => {
  const [applicants, setApplicants] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const startXRef = useRef(0);
  const currentXRef = useRef(0);
  const draggingRef = useRef(false);
  const activeCardRef = useRef(null);
  const cardStackRef = useRef(null);

  useEffect(() => {
    const fetchApplicants = async () => {
      try {
        const snapshot = await getDocs(collection(db, 'resumes'));
        const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setApplicants(data);
      } catch (err) {
        console.error('Error fetching applicants:', err);
      }
    };
    fetchApplicants();
  }, []);

  useEffect(() => {
    updateCardPositions();
  }, [currentIndex, applicants]);

  const updateCardPositions = () => {
    const cards = document.querySelectorAll('.job-card');
    cards.forEach((card) => {
      const idx = parseInt(card.dataset.index, 10);
      const diff = idx - currentIndex;
      if (diff < 0) {
        card.style.display = 'none';
      } else if (diff === 0) {
        card.style.display = 'block';
        card.style.transform = 'translateX(0) rotate(0deg) scale(1)';
        card.style.opacity = '1';
        card.style.zIndex = '10';
      } else if (diff === 1) {
        card.style.display = 'block';
        card.style.transform = 'scale(0.95) translateY(10px)';
        card.style.opacity = '0.85';
        card.style.zIndex = '9';
      } else {
        card.style.display = 'block';
        card.style.transform = 'scale(0.9) translateY(20px)';
        card.style.opacity = '0.6';
        card.style.zIndex = '8';
      }

      const accept = card.querySelector('.swipe-indicator.accept');
      const decline = card.querySelector('.swipe-indicator.decline');
      if (accept) accept.style.opacity = 0;
      if (decline) decline.style.opacity = 0;
      card.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
    });
  };

  const handleMove = (clientX) => {
    if (!draggingRef.current) return;
    currentXRef.current = clientX;
    const diff = clientX - startXRef.current;
    const card = activeCardRef.current;
    if (!card) return;
    const rotation = diff / 20;
    card.style.transition = 'none';
    card.style.transform = `translateX(${diff}px) rotate(${rotation}deg)`;

    const accept = card.querySelector('.swipe-indicator.accept');
    const decline = card.querySelector('.swipe-indicator.decline');
    if (accept) accept.style.opacity = diff > 0 ? Math.min(diff / 150, 1) : 0;
    if (decline) decline.style.opacity = diff < 0 ? Math.min(-diff / 150, 1) : 0;
  };

  const endSwipe = () => {
    if (!draggingRef.current) return;
    draggingRef.current = false;

    const card = activeCardRef.current;
    if (!card) return;
    const diff = currentXRef.current - startXRef.current;
    card.style.transition = 'transform 0.35s ease, opacity 0.35s ease';

    if (diff > SWIPE_THRESHOLD) {
      card.style.transform = 'translateX(1200px) rotate(30deg)';
      card.style.opacity = '0';
      setTimeout(() => setCurrentIndex((p) => p + 1), 300);
    } else if (diff < -SWIPE_THRESHOLD) {
      card.style.transform = 'translateX(-1200px) rotate(-30deg)';
      card.style.opacity = '0';
      setTimeout(() => setCurrentIndex((p) => p + 1), 300);
    } else {
      card.style.transform = 'translateX(0) rotate(0)';
      const accept = card.querySelector('.swipe-indicator.accept');
      const decline = card.querySelector('.swipe-indicator.decline');
      if (accept) accept.style.opacity = 0;
      if (decline) decline.style.opacity = 0;
    }

    setTimeout(() => {
      if (activeCardRef.current) activeCardRef.current.style.transition = '';
      activeCardRef.current = null;
    }, 350);
  };

  const handlePointerDown = (e, index) => {
    if (index !== currentIndex) return;
    draggingRef.current = true;
    activeCardRef.current = e.currentTarget;
    startXRef.current = e.clientX;
    currentXRef.current = e.clientX;

    const moveHandler = (ev) => handleMove(ev.clientX);
    const upHandler = () => {
      window.removeEventListener('pointermove', moveHandler);
      window.removeEventListener('pointerup', upHandler);
      endSwipe();
    };

    window.addEventListener('pointermove', moveHandler);
    window.addEventListener('pointerup', upHandler);
  };

  const handleTouchStart = (e, index) => {
    if (index !== currentIndex) return;
    draggingRef.current = true;
    activeCardRef.current = e.currentTarget;
    startXRef.current = e.touches[0].clientX;
    currentXRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    if (!draggingRef.current) return;
    handleMove(e.touches[0].clientX);
    e.preventDefault();
  };

  const handleTouchEnd = () => endSwipe();

  const animateSwipe = (direction) => {
    const card = document.querySelector(`[data-index="${currentIndex}"]`);
    if (!card) return;
    card.style.transition = 'transform 0.35s ease, opacity 0.35s ease';
    card.style.transform =
      direction === 'right' ? 'translateX(1200px) rotate(30deg)' : 'translateX(-1200px) rotate(-30deg)';
    card.style.opacity = '0';
    setTimeout(() => setCurrentIndex((p) => p + 1), 300);
  };

  const swipeLeft = () => animateSwipe('left');
  const swipeRight = () => animateSwipe('right');

  const renderCard = (applicant, index) => {
    const initials = applicant.fullName
      ? applicant.fullName.split(' ').map((n) => n[0]).join('')
      : 'NA';
    return (
      <div
        key={applicant.id}
        className="job-card"
        data-index={index}
        onPointerDown={(e) => handlePointerDown(e, index)}
        onTouchStart={(e) => handleTouchStart(e, index)}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        role="button"
        tabIndex={0}
      >
        <div className="company-logo">{initials}</div>
        <div className="job-title">{applicant.fullName}</div>
        <div className="company-name">{applicant.email}</div>

        <div className="job-details">
          <div className="detail-item"><span>👤</span> {applicant.aboutMe}</div>
          <div className="detail-item"><span>🎂</span> {applicant.birthday}</div>
          <div className="detail-item"><span>🏙️</span> {applicant.city}</div>
          <div className="detail-item"><span>🎓</span> {applicant.education}</div>
          <div className="detail-item"><span>⚧</span> {applicant.gender}</div>
          <div className="detail-item"><span>💼</span> {applicant.jobPreferences}</div>
          <div className="detail-item"><span>🗣️</span> {applicant.languages}</div>
          <div className="detail-item"><span>💍</span> {applicant.maritalStatus}</div>
          <div className="detail-item"><span>📞</span> {applicant.phoneNumber}</div>
          <div className="detail-item"><span>🛠️</span> {applicant.skills}</div>
          <div className="detail-item"><span>🏢</span> {applicant.workExperience}</div>
          <div className="detail-item"><span>⏰</span> {applicant.submittedAt ? new Date(applicant.submittedAt.seconds * 1000).toLocaleString() : 'N/A'}</div>
        </div>

        <div className="swipe-indicator accept">APPLY</div>
        <div className="swipe-indicator decline">DECLINE</div>
      </div>
    );
  };

  return (
    <div className="main-page">
      <NavbarCompany />
      <div className="Herospace">
        <div className="swipe-container">
          <div className="header"><p>Swipe right to accept, left to decline.</p></div>

          <div className="card-stack" ref={cardStackRef}>
            {applicants.length === 0 ? (
              <p>Loading applicants...</p>
            ) : currentIndex >= applicants.length ? (
              <div className="no-more">No more applicants to review!</div>
            ) : (
              applicants.map((app, idx) => renderCard(app, idx))
            )}
          </div>

          <div className="actions">
            <button className="action-btn-decline-btn" onClick={swipeLeft}>✕</button>
            <button className="action-btn-accept-btn" onClick={swipeRight}>✓</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewApplicants;
