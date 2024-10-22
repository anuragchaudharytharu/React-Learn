import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    {/* 2nd step: we wrap App.jsx component inside the imported <provider></provider> from react-redux with props value of imported redux store so that App component can access all the state of that we maintains inside store.js file reducer  */}
  </StrictMode>
);
