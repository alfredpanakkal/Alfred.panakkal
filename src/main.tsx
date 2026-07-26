import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import { GithubHeatmap } from './components/GithubHeatmap.tsx';
import './index.css';

const worksRoot = document.getElementById('works-react-root');
if (worksRoot) {
  createRoot(worksRoot).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}

const heatmapRoot = document.getElementById('github-heatmap-root');
if (heatmapRoot) {
  createRoot(heatmapRoot).render(
    <StrictMode>
      <GithubHeatmap username="alpha-mini" />
    </StrictMode>,
  );
}
