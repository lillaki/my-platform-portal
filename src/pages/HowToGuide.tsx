// src/pages/HowToGuide.tsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { howToGuides } from '../content/howto';

export const HowToGuide: React.FC = () => {
  const { id } = useParams();
  const guide = howToGuides.find((g) => g.id === id);

  const [content, setContent] = useState('');

  useEffect(() => {
    if (!guide) return;
    guide.file().then((mod) => setContent(mod.default));
  }, [guide]);

  // inject copy buttons for code blocks in this guide
  useEffect(() => {
    if (!content) return;

    const container = document.querySelector<HTMLElement>('.howto-markdown');
    if (!container) return;

    const pres = container.querySelectorAll<HTMLPreElement>('pre');

    pres.forEach((pre) => {
      if (pre.querySelector('.copy-btn-inline')) return;

      const codeElement = pre.querySelector('code');
      if (!codeElement) return;

      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'copy-btn-inline';
      btn.textContent = 'Copy';

      btn.addEventListener('click', () => {
        const code = codeElement.textContent || '';

        navigator.clipboard.writeText(code).then(() => {
          btn.textContent = 'Copied!';
          btn.classList.add('copied');
          setTimeout(() => {
            btn.textContent = 'Copy';
            btn.classList.remove('copied');
          }, 1500);
        });
      });

      pre.appendChild(btn);
    });

    // optional cleanup (not strictly needed here)
    return () => {
      pres.forEach((pre) => {
        const btn = pre.querySelector('.copy-btn-inline');
        if (btn) pre.removeChild(btn);
      });
    };
  }, [content]);

  if (!guide) {
    return (
      <section className="page-section">
        <div className="page-content">
          <p>Guide not found.</p>
          <p>
            <Link to="/build-your-platform">← Back to all guides</Link>
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="page-section">
      <div className="page-content">
        <header className="page-header">
          <p className="page-eyebrow">
            <Link to="/build-your-platform">← Back to all guides</Link>
          </p>
          <h2>{guide.title}</h2>
          {guide.description && <p>{guide.description}</p>}
        </header>

        <div className="markdown-shell">
          <div className="markdown-body howto-markdown">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {content}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToGuide;
