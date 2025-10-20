// frontend/src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from "react-helmet-async";
import App from './App';
import './index.css';
// import './App.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
    <App />
    </HelmetProvider>
  </React.StrictMode>
);

// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.tsx'

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
