import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App></App> This can also be used to call component. Its just a long form of <App/> */}
    <App />
  </React.StrictMode>
);
