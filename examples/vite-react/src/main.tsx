import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { FairuProvider } from '@fairu/sdk/react';
import App from './App';
import './styles/globals.css';

// In production, use environment variables
const FAIRU_TOKEN = import.meta.env.VITE_FAIRU_TOKEN || 'demo-token';
const FAIRU_URL = import.meta.env.VITE_FAIRU_URL || 'https://fairu.app/graphql';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FairuProvider url={FAIRU_URL} token={FAIRU_TOKEN}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FairuProvider>
  </StrictMode>
);
