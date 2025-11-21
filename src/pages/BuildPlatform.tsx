// src/pages/BuildPlatform.tsx
import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import buildDoc from '../content/build-your-platform.md?raw';

export const BuildPlatform: React.FC = () => {
  // Add "Copy" buttons to all code blocks in this page
  useEffect(() => {
    const pres = document.querySelectorAll<HTMLPreElement>('.markdown-body pre');

    pres.forEach((pre) => {
      // Avoid adding multiple buttons if React re-renders
      if (pre.querySelector('.copy-btn-inline')) return;

      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'copy-btn-inline';
      btn.textContent = 'Copy';

      btn.addEventListener('click', () => {
        const code = pre.innerText;

        if (navigator.clipboard) {
          navigator.clipboard.writeText(code).then(() => {
            btn.textContent = 'Copied!';
            btn.classList.add('copied');
            setTimeout(() => {
              btn.textContent = 'Copy';
              btn.classList.remove('copied');
            }, 1500);
          });
        } else {
          // very basic fallback
          const textarea = document.createElement('textarea');
          textarea.value = code;
          document.body.appendChild(textarea);
          textarea.select();
          document.execCommand('copy');
          document.body.removeChild(textarea);
          btn.textContent = 'Copied!';
          btn.classList.add('copied');
          setTimeout(() => {
            btn.textContent = 'Copy';
            btn.classList.remove('copied');
          }, 1500);
        }
      });

      pre.appendChild(btn);
    });

    // Optional cleanup on unmount
    return () => {
      pres.forEach((pre) => {
        const btn = pre.querySelector('.copy-btn-inline');
        if (btn) pre.removeChild(btn);
      });
    };
  }, []); // run once when this page mounts

  return (
    <section className="page-section">
      <div className="page-content">
        <header className="page-header">
          <h2>Build your own platform</h2>
          <p>
            This guide walks you through how to design, implement, and operate your own services
            on top of the platform.
          </p>
        </header>

        <div className="single-column">
          {/* Markdown area with GitHub styling */}
          <div className="markdown-shell">
            <div className="markdown-body">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {buildDoc}
              </ReactMarkdown>
            </div>
          </div>

          {/* Quick recap box below */}
          <aside className="callout">
            <h3>Quick recap</h3>
            <ul>
              <li>Start with a clear domain and ownership.</li>
              <li>Use platform standards for APIs and events.</li>
              <li>Document your service in the Portal from day one.</li>
              <li>Announce changes via release notes, not email.</li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default BuildPlatform;
