import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Book from './components/Book.js'
import Genre from './components/Genre.js'
import Writer from './components/Writer.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);