// src/pages/Home.tsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add('home-bg');
    return () => document.body.classList.remove('home-bg');
  }, []);

  return (
    <section className="hero fullpage">
      <div className="hero-overlay">
        <div className="frosted-wrap">
          <div className="frosted-box">
            <p className="hero-tagline">Welcome to</p>
            <h1 className="hero-title">Our Platform Release Hub</h1>
            <p className="hero-subtitle">
              Stay up to date with the latest changes, improvements, and features in our platform.
            </p>
            <div className="hero-actions">
              <button className="btn primary" onClick={() => navigate('/releases')}>View latest releases</button>
              <button className="btn ghost" onClick={() => navigate('/build-your-platform')}>Learn how to build your own</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
