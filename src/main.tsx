import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const worksRoot = document.getElementById('works-react-root');
if (worksRoot) {
  createRoot(worksRoot).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
