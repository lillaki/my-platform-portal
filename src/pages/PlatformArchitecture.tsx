// src/pages/PlatformArchitecture.tsx
import React from 'react';

export const PlatformArchitecture: React.FC = () => {
  return (
    <section className="page-section arch-page">
      <div className="page-content docs-layout">
        {/* Left sidebar / index */}
        <aside className="docs-nav">
          <h3 className="docs-nav-title">Platform docs</h3>
          <nav className="docs-nav-list">
            <a href="#overview">Overview</a>
            <a href="#building-blocks">Core building blocks</a>
            <a href="#networking">Networking &amp; security</a>
            <a href="#data-environments">Data &amp; environments</a>
            <a href="#dev-workflow">Developer workflow</a>
          </nav>
        </aside>

        {/* Right-hand main doc content */}
        <div className="docs-main">
          {/* Intro / overview */}
          <header className="page-header" id="overview">
            <h2>Platform architecture</h2>
            <p>
              A high-level overview of how the platform is put together – from core services and
              networking to how developers ship changes safely.
            </p>
          </header>

          {/* Core building blocks */}
          <section className="arch-section" id="building-blocks">
            <h3>Core building blocks</h3>
            <div className="arch-grid">
              <div className="arch-card">
                <h4>API gateway &amp; edge</h4>
                <p>
                  All external traffic enters through a hardened API gateway which handles routing,
                  rate limiting and authentication. Backends expose only internal endpoints and rely
                  on the gateway for ingress.
                </p>
              </div>
              <div className="arch-card">
                <h4>Domain services</h4>
                <p>
                  Each domain (auth, billing, platform UI, reporting, etc.) is implemented as a set
                  of small services with clear responsibilities and owners. Services talk via HTTP
                  APIs and asynchronous events.
                </p>
              </div>
              <div className="arch-card">
                <h4>Shared platform services</h4>
                <p>
                  Cross-cutting concerns like identity, logging, metrics, feature flags and release
                  metadata are provided by shared platform services instead of being reimplemented in
                  each domain.
                </p>
              </div>
            </div>
          </section>

          {/* Networking & security */}
          <section className="arch-section" id="networking">
            <h3>Networking &amp; security</h3>
            <div className="arch-grid arch-grid-2">
              <div className="arch-card">
                <h4>Network zones</h4>
                <ul>
                  <li>Public edge for user-facing traffic.</li>
                  <li>Private service network where core services run.</li>
                  <li>Restricted admin/ops access for maintenance and debugging.</li>
                </ul>
              </div>
              <div className="arch-card">
                <h4>Authentication &amp; authorization</h4>
                <ul>
                  <li>Central identity provider issues tokens for both users and services.</li>
                  <li>Zero-trust style: all calls are authenticated, including internal ones.</li>
                  <li>Fine-grained authorization enforced per API and per environment.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Data & environments */}
          <section className="arch-section" id="data-environments">
            <h3>Data flow &amp; environments</h3>
            <div className="arch-grid arch-grid-2">
              <div className="arch-card">
                <h4>Data flow</h4>
                <ul>
                  <li>Operational data stored per-service with clear ownership.</li>
                  <li>Analytics data pushed to shared warehouses for reporting.</li>
                  <li>Event streams used for cross-service integrations and audit trails.</li>
                </ul>
              </div>
              <div className="arch-card">
                <h4>Environments</h4>
                <ul>
                  <li>Isolated dev/test environments for experimentation.</li>
                  <li>Staging environment mirroring production topology.</li>
                  <li>Progressive rollouts with feature flags and canary deployments.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Developer workflow */}
          <section className="arch-section" id="dev-workflow">
            <h3>Developer workflow on the platform</h3>
            <div className="arch-workflow">
              <ol>
                <li>
                  <strong>Design</strong> – Start from an API or event contract and align with
                  platform standards.
                </li>
                <li>
                  <strong>Build</strong> – Implement the service using the standard runtime,
                  libraries and templates.
                </li>
                <li>
                  <strong>Ship</strong> – Use CI/CD pipelines to run tests, security checks and roll
                  out changes.
                </li>
                <li>
                  <strong>Observe</strong> – Use logs, metrics and traces to understand behaviour in
                  each environment.
                </li>
                <li>
                  <strong>Communicate</strong> – Document changes and surface them in the Portal
                  release timeline.
                </li>
              </ol>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default PlatformArchitecture;
