// src/pages/Home.tsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomeAnimations.css';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  // Body class for homepage background (even if it's just white now)
  useEffect(() => {
    document.body.classList.add('home-bg');
    return () => document.body.classList.remove('home-bg');
  }, []);

  const scrollToAbout = () => {
    const target = document.getElementById("about-section");
    if (!target) return;

    const startY = window.scrollY;
    const targetY = target.getBoundingClientRect().top + window.scrollY;
    const distance = targetY - startY;

    const duration = 1000; // ⬅️ Change this number to make slower or faster (ms)
    let startTime: number | null = null;

    const easeInOutCubic = (t: number) => 
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;


    const animation = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const elapsed = timestamp - startTime;

      const progress = Math.min(elapsed / duration, 1);
      const eased = easeInOutCubic(progress);

      window.scrollTo(0, startY + distance * eased);

      if (progress < 1) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  // Tiny motion on scroll for elements with .reveal-on-scroll
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('.reveal-on-scroll');

    if (!('IntersectionObserver' in window)) {
      // Fallback: show everything if observer isn't supported
      elements.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target); // animate only once
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="hero fullpage">
        <div className="hero-overlay">
          <div className="frosted-wrap">
            <div className="frosted-box fade-in">
              <p className="hero-tagline">Welcome to</p>
              <h1 className="hero-title">Our Platform Release Hub</h1>
              <p className="hero-subtitle">
                Stay up to date with the latest changes, improvements, and features in our
                platform.
              </p>

              <div className="hero-actions">
                <button className="btn primary" onClick={() => navigate('/releases')}>
                  View latest releases
                </button>
                <button className="btn ghost" onClick={() => navigate('/build-your-platform')}>
                  Build your own
                </button>
              </div>

              <div
                className="scroll-down"
                onClick={scrollToAbout}
                role="button"
                aria-label="Scroll down"
              >
                ↓
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about-section" className="about">
        <div className="about-content reveal-on-scroll">
          <div className="about-eyebrow">Why the Platform Portal</div>

          <h2>What is the Platform Portal?</h2>

          <p>
            The Platform Portal is an internal hub that streamlines release management and
            provides clear documentation for building, deploying, and maintaining your own
            digital platform.
          </p>
          <p>
            Our customers use it to track release notes, review feature updates, and access
            resources that make integration and scaling easier. Whether you&apos;re a developer or
            project manager, the Portal helps you stay informed and efficient.
          </p>

          <div className="about-grid">
            <div className="about-stat">
              <span className="about-stat-number">3×</span>
              <span className="about-stat-label">Faster release overview</span>
            </div>
            <div className="about-stat">
              <span className="about-stat-number">24/7</span>
              <span className="about-stat-label">Self-service documentation</span>
            </div>
            <div className="about-stat">
              <span className="about-stat-number">1 place</span>
              <span className="about-stat-label">For all platform updates</span>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section features-section">
        <div className="section-inner">
          <header className="section-header reveal-on-scroll">
            <h2>Key capabilities</h2>
            <p>
              Designed to help teams build, deploy, and operate platform features with clarity
              and confidence.
            </p>
          </header>

          <div className="features-grid">
            <article className="feature-card reveal-on-scroll">
              <div className="feature-icon">⚡</div>
              <h3>Lightning-fast overview</h3>
              <p>
                See what changed in each release in seconds — no more digging through emails or
                tickets.
              </p>
            </article>

            <article className="feature-card reveal-on-scroll">
              <div className="feature-icon">🔒</div>
              <h3>Built-in governance</h3>
              <p>
                Standardised documentation and release templates keep platform changes aligned
                and auditable.
              </p>
            </article>

            <article className="feature-card reveal-on-scroll">
              <div className="feature-icon">📡</div>
              <h3>Easy integration</h3>
              <p>
                Clear API descriptions, component guidelines, and examples help teams integrate
                with minimal friction.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="section usecases-section">
        <div className="section-inner">
          <header className="section-header reveal-on-scroll">
            <h2>Built for your teams</h2>
            <p>Different roles, one shared source of truth.</p>
          </header>

          <div className="usecase-grid">
            <article className="usecase-card reveal-on-scroll">
              <h3>Developers</h3>
              <p>
                Discover APIs, shared components, and platform patterns. Ship new services
                faster with fewer surprises.
              </p>
            </article>
            <article className="usecase-card reveal-on-scroll">
              <h3>Product &amp; project managers</h3>
              <p>
                Understand what&apos;s shipping, when, and why. Manage dependencies and communicate
                impact to stakeholders.
              </p>
            </article>
            <article className="usecase-card reveal-on-scroll">
              <h3>Platform owners</h3>
              <p>
                Keep platform evolution consistent, secure, and well-documented without slowing
                down delivery.
              </p>
            </article>
            <article className="usecase-card reveal-on-scroll">
              <h3>Leadership</h3>
              <p>
                Get a high-level view of platform progress and adoption to support strategic
                decisions.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS / FLOW */}
      <section className="section flow-section">
        <div className="section-inner">
          <header className="section-header reveal-on-scroll">
            <h2>How the Portal fits into your work</h2>
            <p>From idea to deployed platform feature in four simple steps.</p>
          </header>

          <ol className="flow-steps">
            <li className="flow-step reveal-on-scroll">
              <span className="flow-step-index">1</span>
              <div className="flow-step-body">
                <h3>Plan your change</h3>
                <p>
                  Capture the scope, impact, and dependencies of your platform change using a
                  shared template.
                </p>
              </div>
            </li>
            <li className="flow-step reveal-on-scroll">
              <span className="flow-step-index">2</span>
              <div className="flow-step-body">
                <h3>Build and integrate</h3>
                <p>
                  Use documented APIs, components, and guidelines to ship changes that fit the
                  wider platform.
                </p>
              </div>
            </li>
            <li className="flow-step reveal-on-scroll">
              <span className="flow-step-index">3</span>
              <div className="flow-step-body">
                <h3>Release with confidence</h3>
                <p>
                  Announce new versions with clear release notes that are easy to find and easy
                  to understand.
                </p>
              </div>
            </li>
            <li className="flow-step reveal-on-scroll">
              <span className="flow-step-index">4</span>
              <div className="flow-step-body">
                <h3>Learn and iterate</h3>
                <p>
                  Capture feedback, refine documentation, and keep the Portal as the living
                  memory of your platform.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* ARCHITECTURE OVERVIEW */}
      <section className="section architecture-section">
        <div className="section-inner">
          <header className="section-header reveal-on-scroll">
            <h2>What the platform brings together</h2>
            <p>A single view over the building blocks your teams rely on.</p>
          </header>

          <div className="arch-grid">
            <article className="arch-card reveal-on-scroll">
              <h3>API &amp; service layer</h3>
              <p>
                Catalogue of core services, interfaces, and contracts that power your digital
                products.
              </p>
            </article>
            <article className="arch-card reveal-on-scroll">
              <h3>Shared components</h3>
              <p>
                Reusable UI and backend components, patterns, and libraries that ensure
                consistency.
              </p>
            </article>
            <article className="arch-card reveal-on-scroll">
              <h3>Security &amp; compliance</h3>
              <p>
                Standards, checklists, and ownership information to keep your platform safe and
                compliant.
              </p>
            </article>
            <article className="arch-card reveal-on-scroll">
              <h3>Delivery pipeline</h3>
              <p>
                Releases connected to CI/CD, environments, and change windows to avoid
                surprises.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section testimonials-section">
        <div className="section-inner">
          <header className="section-header reveal-on-scroll">
            <h2>What teams say</h2>
            <p>Internal teams already rely on the Portal to simplify their work.</p>
          </header>

          <div className="testimonials-grid">
            <article className="testimonial-card reveal-on-scroll">
              <p className="testimonial-quote">
                “We finally have one place to see what changed in the platform. It saves us
                hours every week.”
              </p>
              <p className="testimonial-meta">Platform consumer team</p>
            </article>

            <article className="testimonial-card reveal-on-scroll">
              <p className="testimonial-quote">
                “Releases used to be hard to follow. Now everyone knows what&apos;s shipping and
                when.”
              </p>
              <p className="testimonial-meta">Product &amp; project managers</p>
            </article>

            <article className="testimonial-card reveal-on-scroll">
              <p className="testimonial-quote">
                “The Portal gives us a clear narrative of how the platform is evolving over
                time.”
              </p>
              <p className="testimonial-meta">Platform owners</p>
            </article>
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section className="section roadmap-section">
        <div className="section-inner">
          <header className="section-header reveal-on-scroll">
            <h2>What&apos;s coming next</h2>
            <p>We keep iterating on the Portal together with our users.</p>
          </header>

          <div className="roadmap-grid">
            <div className="roadmap-column reveal-on-scroll">
              <h3>Q2 2025</h3>
              <ul>
                <li>Unified observability view for key platform services</li>
                <li>Improved search across releases and documentation</li>
                <li>Guided onboarding flow for new teams</li>
              </ul>
            </div>
            <div className="roadmap-column reveal-on-scroll">
              <h3>Q3 2025</h3>
              <ul>
                <li>Platform SDK and examples for new services</li>
                <li>Dashboards for platform adoption metrics</li>
                <li>Deeper integration with CI/CD pipelines</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section">
        <div className="section-inner cta-inner reveal-on-scroll">
          <h2>Ready to explore the Platform Portal?</h2>
          <p>
            Start by reviewing the latest releases or jump straight into the guide for building
            your own platform capabilities.
          </p>

          <div className="cta-actions">
            <button className="btn primary" onClick={() => navigate('/build-your-platform')}>
              Learn how to build on the platform
            </button>
            <button className="btn ghost" onClick={() => navigate('/releases')}>
              Browse recent releases
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;