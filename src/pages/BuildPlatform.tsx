import React from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore - Vite's ?raw import is not typed by default
import buildGuide from '../content/build-your-platform.md?raw';
import { MarkdownPage } from '../components/MarkdownPage';

export const BuildPlatform: React.FC = () => {
  return (
    <section className="page">
      <header className="page-header">
        <h2>Build Your Own Platform</h2>
        <p>Authored in Markdown for easy editing, images, and copyable code snippets.</p>
      </header>

      <MarkdownPage markdown={buildGuide} />

      <section className="helper-box">
        <h3>Editing tips</h3>
        <ul>
          <li>Edit <code>src/content/build-your-platform.md</code></li>
          <li>Place images in <code>public/images</code> and reference them like <code>![alt](/images/name.png)</code></li>
          <li>Use fenced code blocks (```ts, ```bash) to enable the copy button</li>
        </ul>
      </section>
    </section>
  );
};
