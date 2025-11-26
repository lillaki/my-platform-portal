// src/pages/PlatformArchitecture.tsx
import React from 'react';

export const PlatformArchitecture: React.FC = () => {
  return (
    <section className="page-section arch-page">
      <div className="page-content">
        {/* Page hero */}
        <header className="page-header">
          <h2>Platform architecture</h2>
          <p>
            A high-level overview of how the platform is put together – from core services and
            networking to how developers ship changes safely.
          </p>
        </header>

        {/* Intro + main diagram */}
        <div className="arch-layout">
          <div className="arch-text">
            <p>
              The platform is designed as a set of loosely coupled domain services connected
              through well-defined APIs and event streams. Each service is independently
              deployable, but shares common observability, identity and networking patterns.
            </p>
            <ul>
              <li>API-first services with clear ownership and contracts.</li>
              <li>Centralized identity and access management for all traffic.</li>
              <li>Shared messaging and data pipelines for cross-service flows.</li>
              <li>Standardized tooling for build, deploy and runtime diagnostics.</li>
            </ul>
          </div>

          <div className="arch-diagram">
            {/* Replace these image paths with your real diagrams */}
            <img
              src="./images/kasm_arch.png"
              alt="High-level platform architecture"
            />
            <p className="arch-diagram-caption">
              Example architecture view – core services behind an API gateway, with shared
              observability and CI/CD.
            </p>
          </div>
        </div>

        {/* Core building blocks */}
        <section className="arch-section">
          <h3>Core building blocks</h3>
          <div className="arch-grid">
            <div className="arch-card">
              <h4>API gateway & edge</h4>
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
        <section className="arch-section">
          <h3>Networking & security</h3>
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
              <h4>Authentication & authorization</h4>
              <ul>
                <li>Central identity provider issues tokens for both users and services.</li>
                <li>Zero-trust style: all calls are authenticated, including internal ones.</li>
                <li>Fine-grained authorization enforced per API and per environment.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Data & environments */}
        <section className="arch-section">
          <h3>Data flow & environments</h3>
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
        <section className="arch-section">
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
    </section>
  );
};

export default PlatformArchitecture;
