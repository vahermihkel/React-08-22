import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// npm install react-router-dom
// lisatakse node_modules kausta kõik navigeerimiseks vajalik kood
// import { BrowserRouter } from "react-router-dom"
// import { Link, Route, Routes } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

