import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// --- IMPOR CSS MODULAR ---
// Memuat semua styling dari file yang terpisah
import './styles/global.css';      // Gaya dasar, reset, dan Navbar
import './styles/components.css';  // Gaya komponen reusable (ProductCard, Button, dll.)
import './styles/layout.css';      // Gaya layout section utama (Hero, Promo, Footer)
// -------------------------

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// reportWebVitals() telah dihapus.