import React from 'react';
import Navbar from './components/Navbar'; 
import HomePage from './pages/HomePage'; 
import dummyData from './data/data.json'; 

export default function App() {
  const data = dummyData; 

  return (
    <div className="app-main">
      <Navbar links={data.navbar.links} title={data.general.title} />
      
      <main>
        <HomePage data={data} />
      </main>
    </div>
  );
}