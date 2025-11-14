import React from 'react';
import type { Release } from '../pages/Releases';

interface Props {
  release: Release;
}

export const ReleaseCard: React.FC<Props> = ({ release }) => {
  return (
    <article className="release-card">
      <header className="release-card-header">
        <div>
          <h3>{release.version}</h3>
        </div>
        <div className="release-meta">
          <span className={`badge badge-${release.type.toLowerCase()}`}>{release.type}</span>
          <span className="release-date">{release.date}</span>
        </div>
      </header>
      <p className="release-tag">Area: {release.tag}</p>
      <ul className="release-highlights">
        {release.highlights.map((h, idx) => <li key={idx}>{h}</li>)}
      </ul>
    </article>
  );
};
