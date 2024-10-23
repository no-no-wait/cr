import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ReactLenis } from '@studio-freight/react-lenis';

import App from './App';

import './styles/globals.scss';

const root = createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <ReactLenis root>
    <StrictMode>
      <App />
    </StrictMode>
  </ReactLenis>
);
