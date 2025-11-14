import React, { useState } from 'react';
import { ReleaseCard } from '../components/ReleaseCard';

export interface Release {
  id: number;
  version: string;
  date: string;
  type: 'Major' | 'Minor' | 'Patch';
  tag: 'Platform' | 'Frontend' | 'Backend';
  highlights: string[];
}

const mockReleases: Release[] = [
  { id: 1, version: 'v2.3.0', date: '2025-11-01', type: 'Major', tag: 'Platform', highlights: ['New dashboard', 'Improved logging'] },
  { id: 2, version: 'v2.2.1', date: '2025-10-15', type: 'Patch', tag: 'Frontend', highlights: ['Bug fix', 'Performance improvements'] },
];

export const Releases: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<'All' | Release['tag']>('All');
  const filtered = selectedTag === 'All' ? mockReleases : mockReleases.filter((r) => r.tag === selectedTag);

  return (
    <section className="page">
      <h2>Platform Releases</h2>
      <div className="filter-buttons">
        {['All', 'Platform', 'Frontend', 'Backend'].map((tag) => (
          <button key={tag} className={`chip ${selectedTag === tag ? 'chip-active' : ''}`} onClick={() => setSelectedTag(tag as any)}>{tag}</button>
        ))}
      </div>
      <div className="release-list">
        {filtered.map((r) => <ReleaseCard key={r.id} release={r} />)}
      </div>
    </section>
  );
};
