// src/pages/BuildPlatform.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { howToGuides } from '../content/howto';

export const BuildPlatform: React.FC = () => {
  return (
    <section className="page-section">
      <div className="page-content">
        <header className="page-header">
          <h2>Build on the platform</h2>
          <p>
            Explore step-by-step guides that show how to design, implement, and operate services
            on top of the platform.
          </p>
        </header>

        <div className="howto-intro">
          <p>
            Each guide focuses on a concrete workflow – from deploying a new service to integrating
            external APIs. Start with the scenario that matches what you want to achieve.
          </p>
        </div>

        <ul className="howto-list">
          {howToGuides.map((guide) => (
            <li key={guide.id} className="howto-item">
              <Link to={`/build-your-platform/${guide.id}`} className="howto-card">
                <h3>{guide.title}</h3>
                {guide.description && <p>{guide.description}</p>}
                <span className="howto-link-label">Open guide →</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BuildPlatform;
