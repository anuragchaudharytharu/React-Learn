import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <App />
  // </StrictMode>
);

// Note: In strict mode, React will call component function two times
