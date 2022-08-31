import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; // <--- võtsin impordi
// <- maha reportWebVitals import (kogub andmeid)

// 1. npm i react-router-dom
// 2. BrowserRouter võimaldab mul teha rakenduses navigeerimist
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// <- maha reportWebVitals rida (kogub andmeid)

// ctrl + c <--- rakendus kinni
// npm start <--- rakendus uuesti käima