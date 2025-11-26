import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Releases } from './pages/Releases';
import { BuildPlatform } from './pages/BuildPlatform';
import { NotFound } from './pages/NotFound';
import { Layout } from './components/Layout';
import HowToGuide from './pages/HowToGuide';
import PlatformArchitecture from './pages/PlatformArchitecture';


const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/platform-architecture" element={<PlatformArchitecture />} />
        <Route path="/releases" element={<Releases />} />
        <Route path="/build-your-platform" element={<BuildPlatform />} />
        <Route path="/build-your-platform/:id" element={<HowToGuide />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
};

export default App;
