import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './dist/css/style.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='sign-maker'/>
        </Route>
        <Route path='*'/> //include 'page not found' here
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);