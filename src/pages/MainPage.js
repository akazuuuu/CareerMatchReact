import React, { useState, useEffect, useRef } from 'react';
import { collection, getDocs, orderBy, query, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../pages/Firebase';
import NavbarSeeker from '../component/NavbarSeeker';
import '../styles/MainPage.css';

const SWIPE_THRESHOLD = 120;

const MainPage = () => {
  const [jobs, setJobs] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const startXRef = useRef(0);
  const currentXRef = useRef(0);
  const draggingRef = useRef(false);
  const activeCardRef = useRef(null);
  const cardStackRef = useRef(null);

  useEffect(() => {
    const loadJobs = async () => {
      try {
        const q = query(collection(db, 'jobPosts'), orderBy('datePosted', 'desc'));
        const snapshot = await getDocs(q);
        const jobsData = snapshot.docs.map((doc) => doc.data());
        setJobs(jobsData);
      } catch (err) {
        console.error('Error loading jobs:', err);
      }
    };
    loadJobs();
  }, []);

  useEffect(() => {
    updateCardPositions();
  }, [currentIndex, jobs]);

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

  const saveSwipe = async (job, status) => {
    try {
      await addDoc(collection(db, 'userApplications'), {
        jobTitle: job.title,
        company: job.company, 
        status,
        timestamp: serverTimestamp(),
      });
    } catch (err) {
      console.error('Error saving swipe:', err);
    }
  };

  const endSwipe = () => {
    if (!draggingRef.current) return;
    draggingRef.current = false;

    const card = activeCardRef.current;
    if (!card) return;
    const diff = currentXRef.current - startXRef.current;
    card.style.transition = 'transform 0.35s ease, opacity 0.35s ease';

    const isLastCard = currentIndex === jobs.length - 1;
    const effectiveThreshold = isLastCard ? 50 : SWIPE_THRESHOLD;

    if (diff > effectiveThreshold) {
      card.style.transform = `translateX(1200px) rotate(30deg)`;
      card.style.opacity = '0';
      saveSwipe(jobs[currentIndex], 'Accepted');
      setTimeout(() => setCurrentIndex((p) => p + 1), 300);
    } else if (diff < -effectiveThreshold) {
      card.style.transform = `translateX(-1200px) rotate(-30deg)`;
      card.style.opacity = '0';
      saveSwipe(jobs[currentIndex], 'Denied');
      setTimeout(() => setCurrentIndex((p) => p + 1), 300);
    } else {
      card.style.transform = `translateX(0px) rotate(0deg)`;
      const a = card.querySelector('.swipe-indicator.accept');
      const d = card.querySelector('.swipe-indicator.decline');
      if (a) a.style.opacity = 0;
      if (d) d.style.opacity = 0;
    }

    setTimeout(() => {
      if (activeCardRef.current) {
        activeCardRef.current.style.transition = '';
      }
      activeCardRef.current = null;
    }, 350);
  };

  const handlePointerDown = (e, index) => {
    if (index !== currentIndex) return;
    const card = e.currentTarget;
    draggingRef.current = true;
    activeCardRef.current = card;
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

  const handleTouchEnd = () => {
    endSwipe();
  };

  const animateSwipe = (direction) => {
    const card = document.querySelector(`[data-index="${currentIndex}"]`);
    if (!card) return;
    const job = jobs[currentIndex];
    if (!job) return;

    card.style.transition = 'transform 0.35s ease, opacity 0.35s ease';
    card.style.transform =
      direction === 'right'
        ? 'translateX(1200px) rotate(30deg)'
        : 'translateX(-1200px) rotate(-30deg)';
    card.style.opacity = '0';

    if (direction === 'right') saveSwipe(job, 'Accepted');
    if (direction === 'left') saveSwipe(job, 'Denied');

    setTimeout(() => setCurrentIndex((p) => p + 1), 300);
  };

  const swipeLeft = () => animateSwipe('left');
  const swipeRight = () => animateSwipe('right');

  const renderCard = (job, index) => {
    const logo = job?.logo
      ? `<img src="${job.logo}" alt="Logo" style="width:100%;height:100%;border-radius:16px;object-fit:cover;">`
      : job?.company?.substring(0, 2).toUpperCase() || 'CM';

    return (
      <div
        key={index}
        className="job-card"
        data-index={index}
        onPointerDown={(e) => handlePointerDown(e, index)}
        onTouchStart={(e) => handleTouchStart(e, index)}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        role="button"
        tabIndex={0}
      >
        <div className="company-logo" dangerouslySetInnerHTML={{ __html: logo }} />
        <div className="job-title">{job.title}</div>
        <div className="company-name">{job.company}</div>
        <div className="job-details">
          <div className="detail-item"><span>📍</span> {job.location}</div>
          <div className="detail-item"><span>💼</span> {job.type}</div>
          <div className="detail-item"><span>🎓</span> {job.degree || 'Any'}</div>
          <div className="detail-item"><span>🕒</span> {job.experience || 'Not specified'}</div>
          <div className="detail-item"><span>⚡</span> {job.employmentLevel || 'Not specified'}</div>
          <div className="detail-item"><span>🛠️</span> {job.skills || 'Not specified'}</div>
        </div>
        <div className="salary">{job.salary || 'Not specified'}</div>
        <div className="job-description">{job.description || ''}</div>
        <div className="swipe-indicator accept">APPLY</div>
        <div className="swipe-indicator decline">DECLINE</div>
      </div>
    );
  };

  return (
    <div className="main-page">
      <NavbarSeeker />
      <div className="Herospace">
        <div className="swipe-container">
          <div className="header">
            <p>Swipe right to apply, left to decline.</p>
          </div>

          <div className="card-stack" ref={cardStackRef}>
            {jobs.length === 0 ? (
              <p>Loading jobs...</p>
            ) : currentIndex >= jobs.length ? (
              <div className="no-more">No more jobs to review!</div>
            ) : (
              jobs.map((job, idx) => renderCard(job, idx))
            )}
          </div>

          <div className="actions">
            <button className="action-btn-decline-btn" onClick={swipeLeft}>✕</button>
            <button className="action-btn-accept-btn" onClick={swipeRight}>✓</button>
          </div>
        </div>
      </div>
      <footer className="footer">...</footer>
    </div>
  );
};

export default MainPage;
