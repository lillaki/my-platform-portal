// src/components/ReleaseCard.tsx
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
          {/* Title from monthLabel */}
          <h3>{release.monthLabel}</h3>
          {/* Subtitle from shippedOn */}
          <p className="release-date">{release.shippedOn}</p>
        </div>

        <div className="release-meta">
          {release.tag && (
            <span className={`badge badge-${release.tag.toLowerCase()}`}>
              {release.tag}
            </span>
          )}
        </div>
      </header>

      {/* One-line summary */}
      <p className="release-tag">{release.highlight}</p>

      {/* Use features as “highlights” list */}
      <ul className="release-highlights">
        {release.features.map((f, idx) => (
          <li key={idx}>{f}</li>
        ))}
      </ul>
    </article>
  );
};
