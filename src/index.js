import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

function importAll(r) {
    return r.keys().map(r);
  }
  
  const images = importAll(require.context('./', false, /\.(png|jpe?g|svg)$/));

root.render(
<App />
);

