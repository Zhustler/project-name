import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Global CSS (if applicable)
import App from './App'; // The root component
import { BrowserRouter as Router } from 'react-router-dom'; // Import Router for routing

const root = ReactDOM.createRoot(document.getElementById('root')); // Create a root element

root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
