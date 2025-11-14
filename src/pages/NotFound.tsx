import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound: React.FC = () => {
  return (
    <section className="page not-found">
      <h2>Page not found</h2>
      <p>The page you’re looking for doesn’t exist.</p>
      <Link to="/" className="btn primary">Back to home</Link>
    </section>
  );
};
