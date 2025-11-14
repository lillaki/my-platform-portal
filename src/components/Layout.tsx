import React from 'react';
import { Link, NavLink } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="app-root">
      <header className="app-header">
        <Link to="/" className="logo">
          <span>Platform Portal</span>
        </Link>

        <nav className="nav-links">
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Home
          </NavLink>
          <NavLink to="/releases" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Releases
          </NavLink>
          <NavLink to="/build-your-platform" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Build your platform
          </NavLink>
        </nav>
      </header>

      <main className="app-main">{children}</main>

      <footer className="app-footer">
        <p>
          © {new Date().getFullYear()} 
          <span className="footer-accent"> Platform</span> Portal · Internal release hub
        </p>
      </footer>
    </div>
  );
};
