// src/App.jsx
import React from 'react';
// Import komponen Navbar
import Navbar from './components/Navbar'; 
// Import komponen halaman utama
import HomePage from './pages/HomePage'; 
// Import data dummy
import dummyData from './data/data.json'; 

// --- Komponen Utama ---
export default function App() {
  // Memuat data dari data.json
  const data = dummyData; 

  return (
    <div className="app-main">
      {/* Navbar di atas semua konten */}
      <Navbar links={data.navbar.links} logo={data.general.logo} />
      
      <main>
        {/* HomePage adalah Single Page Application (SPA) yang menampung semua sections */}
        <HomePage data={data} />
      </main>
    </div>
  );
}