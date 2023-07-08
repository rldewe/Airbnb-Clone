import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter } from 'react-router-dom';
import {Navbar,Home,Footer} from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <App />

  </BrowserRouter>
</React.StrictMode>
);


reportWebVitals();


