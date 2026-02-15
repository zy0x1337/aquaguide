import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { ComparisonProvider } from './contexts/ComparisonContext';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <ComparisonProvider>
          <App />
        </ComparisonProvider>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
);
