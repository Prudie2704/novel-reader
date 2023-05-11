import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Book from './components/Novel.js'
import Genre from './components/Genre.js'
import Writer from './components/Writer.js'
import Search from './components/Search.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
