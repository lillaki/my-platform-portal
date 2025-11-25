// src/content/howto/index.ts
export type HowToGuideMeta = {
  id: string;
  title: string;
  description?: string;
  file: () => Promise<{ default: string }>;
};

export const howToGuides: HowToGuideMeta[] = [
  {
    id: 'deploy-service',
    title: 'How to deploy a new service',
    description: 'From local changes to a deployed, observable service on the platform.',
    file: () => import('./deploy-service.md?raw'),
  },
  {
    id: 'add-feature-flag',
    title: 'How to add a feature flag',
    description: 'Roll out features safely using platform feature flags.',
    file: () => import('./add-feature-flag.md?raw'),
  },
  {
    id: 'build-your-platform',
    title: 'How to build your own platform',
    description: 'Connect third-party APIs in a platform-friendly way.',
    file: () => import('./build-your-platform.md?raw'),
  },
  // add more entries here as you create new .md files
];
