// src/pages/Releases.tsx
import React from 'react';

type Release = {
  id: string;
  monthLabel: string;      // e.g. "January 2025"
  shippedOn: string;       // e.g. "Shipped January 28, 2025"
  highlight: string;       // one-line summary
  features: string[];
  fixes: string[];
  tag?: 'Major' | 'Minor' | 'Maintenance';
};

const releases: Release[] = [
  {
    id: '2025-01',
    monthLabel: 'January 2025',
    shippedOn: 'Shipped January 29, 2025',
    highlight: 'Platform-wide auth upgrade and refreshed Portal experience.',
    tag: 'Major',
    features: [
      'New single-sign-on flow across all platform services.',
      'Release timeline view in the Portal for better change overview.',
      'Service owners can now attach “technical deep-dives” to each release.',
    ],
    fixes: [
      'Resolved occasional timeouts when loading historical release notes.',
      'Improved error messages when a service is missing metadata.',
      'Fixed inconsistent time zones in scheduled release windows.',
    ],
  },
  {
    id: '2024-12',
    monthLabel: 'December 2024',
    shippedOn: 'Shipped December 17, 2024',
    highlight: 'Quality-of-life improvements for teams working with release notes.',
    tag: 'Minor',
    features: [
      'Inline search in the Portal release list to quickly find a specific change.',
      'Ability to mark a change as “breaking” and highlight it visually.',
    ],
    fixes: [
      'Fixed duplicated entries when importing notes from Confluence.',
      'Resolved layout issues on smaller laptop screens.',
    ],
  },
  {
    id: '2024-11',
    monthLabel: 'November 2024',
    shippedOn: 'Shipped November 22, 2024',
    highlight: 'Stability and housekeeping before the end-of-year releases.',
    tag: 'Maintenance',
    features: [],
    fixes: [
      'Various performance optimisations in the Portal backend.',
      'Hardened API input validation for release metadata.',
    ],
  },
];

export const Releases: React.FC = () => {
  return (
    <section className="page-section">
      <div className="page-content">
        <header className="page-header">
          <h2>Release timeline</h2>
          <p>
            A month-by-month overview of what changed in the platform – split into new
            features and fixes, so teams can quickly see what matters to them.
          </p>
        </header>

        <div className="timeline">
          {releases.map((release, index) => (
            <article key={release.id} className="timeline-item">
              <div className="timeline-left">
                <div className="timeline-marker" />
                {/* faint connector line only between items */}
                {index !== releases.length - 1 && <div className="timeline-connector" />}
              </div>

              <div className="timeline-card">
                <div className="timeline-card-header">
                  <div>
                    <div className="timeline-month">{release.monthLabel}</div>
                    <div className="timeline-date">{release.shippedOn}</div>
                  </div>
                  {release.tag && (
                    <span className={`timeline-badge timeline-badge-${release.tag.toLowerCase()}`}>
                      {release.tag}
                    </span>
                  )}
                </div>

                <p className="timeline-highlight">{release.highlight}</p>

                <div className="timeline-sections">
                  <section className="timeline-section">
                    <div className="timeline-section-header features">
                      <span>New Features</span>
                    </div>
                    <ul>
                      {release.features.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </section>

                  <section className="timeline-section">
                    <div className="timeline-section-header fixes">
                      <span>Bug fixes</span>
                    </div>
                    <ul>
                      {release.fixes.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </section>

                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Releases;
