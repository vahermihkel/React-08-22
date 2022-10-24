import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'leaflet/dist/leaflet.css';
import './index.css';
import './i18n';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);


// bootstrap.css kirjutan ülespoole index.css-st, sest programm käitub alati nii,
// et allpool kirjutatu on tema jaoks tähtsam

// let kogusumma = 300;
// kogusumma = 200;      <---------

// bootstrapi node_modules sees: .button { color: red }  
// index.css-i:                  .button { color: #ff2800}
